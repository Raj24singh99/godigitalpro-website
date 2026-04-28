// 07_Followups.gs
// Auto follow-up sequence engine for GoDigitalPro outreach
// Adds: processFollowups(), runScheduledFollowups(), installFollowupTrigger(), removeFollowupTriggers()

var FOLLOWUP = {
  MAX_FOLLOWUPS: 3,
  INTERVALS_DAYS: [0, 3, 4, 5],   // index = followup number (1-based). F1=3d, F2=4d, F3=5d
  ELIGIBLE_STATUSES: ["SENT", "DRAFTED"],
  STOP_REPLY_STATUSES: ["REPLIED", "BOOKED", "NOT_INTERESTED", "CLOSED_NO_REPLY", "UNSUBSCRIBE"],
  FOLLOWUP_COUNT_HEADER: "followup_count",
  TRIGGER_HANDLER: "runScheduledFollowups"
};

// ─── Public entry points ───────────────────────────────────────────────────

function processFollowups() {
  var result = processFollowupBatch_("manual");
  toastFollowupSummary_(result);
}

function runScheduledFollowups() {
  processFollowupBatch_("scheduled");
}

// ─── Core batch processor ──────────────────────────────────────────────────

function processFollowupBatch_(runType) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    throw new Error("Another followup run is already in progress.");
  }

  try {
    var ctx = getSheetContext_();
    var sheet = ctx.sheet;
    var ss = ctx.ss;
    var cfg = getConfig_();

    ensureFollowupCountColumn_(sheet);
    var headers = getHeaderMap_(sheet);

    var eligible = findEligibleFollowups_(sheet, headers);
    var remainingQuota = 999999;

    if (cfg.sendMode === "SEND") {
      remainingQuota = cfg.dailySendLimit - getTodaySentCount_(sheet, headers);
      if (remainingQuota < 0) remainingQuota = 0;
    }

    var processed = 0;
    var drafted = 0;
    var sent = 0;
    var errors = 0;

    for (var i = 0; i < eligible.length; i++) {
      if (cfg.sendMode === "SEND" && remainingQuota <= 0) {
        appendActivityLog_(ss, {
          row: "", leadId: "", company: "", email: "",
          status: "SKIPPED", message: "Daily send limit reached (followups).",
          runType: runType
        });
        break;
      }

      var item = eligible[i];
      var result = processOneFollowup_(sheet, headers, cfg, item.row, item.values, item.followupNum);
      processed++;

      if (result.status === APP.STATUS.DRAFTED) drafted++;
      if (result.status === APP.STATUS.SENT) { sent++; remainingQuota--; }
      if (result.status === APP.STATUS.ERROR) errors++;

      result.runType = runType;
      appendActivityLog_(ss, result);
    }

    return { processed: processed, drafted: drafted, sent: sent, errors: errors };

  } finally {
    lock.releaseLock();
  }
}

// ─── Find eligible leads ───────────────────────────────────────────────────

function findEligibleFollowups_(sheet, headers) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  var data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var eligible = [];
  var i;

  for (i = 0; i < data.length; i++) {
    var status = safeTrim_(data[i][headers.status - 1]).toUpperCase();
    var replyStatus = safeTrim_(data[i][headers.reply_status - 1]).toUpperCase();
    var followupCount = parseInt(safeTrim_(data[i][headers.followup_count - 1]) || "0", 10);
    if (isNaN(followupCount)) followupCount = 0;

    if (FOLLOWUP.ELIGIBLE_STATUSES.indexOf(status) === -1) continue;
    if (FOLLOWUP.STOP_REPLY_STATUSES.indexOf(replyStatus) !== -1) continue;
    if (followupCount >= FOLLOWUP.MAX_FOLLOWUPS) continue;

    // Check if next_followup_date is due
    var nextFollowupRaw = data[i][headers.next_followup_date - 1];
    if (nextFollowupRaw) {
      var nextDate = new Date(nextFollowupRaw);
      nextDate.setHours(0, 0, 0, 0);
      if (nextDate > today) continue;
    }
    // If next_followup_date is blank and status is SENT, eligible immediately
    // (means initial email was sent but no followup scheduled yet)

    eligible.push({
      row: i + 2,
      values: data[i],
      followupNum: followupCount + 1
    });
  }

  return eligible;
}

// ─── Process one follow-up row ─────────────────────────────────────────────

function processOneFollowup_(sheet, headers, cfg, row, rowValues, followupNum) {
  var lead = rowToLead_(rowValues, headers);

  if (!lead.email) {
    markRowError_(sheet, row, headers, "F" + followupNum + ": Missing email.");
    return {
      row: row, leadId: lead.lead_id, company: lead.company_name, email: "",
      status: APP.STATUS.ERROR, message: "Missing email."
    };
  }

  try {
    var previousSummary = safeTrim_(rowValues[headers.analysis_summary - 1] || "");
    var generated = generateFollowupEmail_(lead, previousSummary, followupNum, cfg);
    var emailOptions = buildEmailOptions_(cfg, generated);

    // Set next_followup_date
    var intervalDays = FOLLOWUP.INTERVALS_DAYS[followupNum] || 5;
    var nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervalDays);

    // Write followup_count
    sheet.getRange(row, headers.followup_count).setValue(followupNum);
    sheet.getRange(row, headers.next_followup_date).setValue(nextDate);

    // If this was the last follow-up, mark reply_status
    if (followupNum >= FOLLOWUP.MAX_FOLLOWUPS) {
      sheet.getRange(row, headers.reply_status).setValue("CLOSED_NO_REPLY");
    }

    if (cfg.sendMode === "SEND") {
      GmailApp.sendEmail(lead.email, generated.email_subject, generated.email_body, {
        name: emailOptions.name,
        replyTo: emailOptions.replyTo,
        htmlBody: emailOptions.htmlBody
      });
      sheet.getRange(row, headers.status).setValue(APP.STATUS.SENT);
      return {
        row: row, leadId: lead.lead_id, company: lead.company_name, email: lead.email,
        status: APP.STATUS.SENT, message: "F" + followupNum + " sent."
      };
    }

    var draft = GmailApp.createDraft(lead.email, generated.email_subject, generated.email_body, {
      name: emailOptions.name,
      replyTo: emailOptions.replyTo,
      htmlBody: emailOptions.htmlBody
    });

    var draftLink = "https://mail.google.com/mail/u/0/#drafts";
    if (draft && draft.getId) {
      draftLink = "https://mail.google.com/mail/u/0/#drafts?compose=" + draft.getId();
    }

    sheet.getRange(row, headers.draft_link).setValue(draftLink);
    return {
      row: row, leadId: lead.lead_id, company: lead.company_name, email: lead.email,
      status: APP.STATUS.DRAFTED, message: "F" + followupNum + " draft created."
    };

  } catch (err) {
    var msg = String(err && err.message ? err.message : err);
    markRowError_(sheet, row, headers, "F" + followupNum + ": " + msg);
    return {
      row: row, leadId: lead.lead_id, company: lead.company_name, email: lead.email,
      status: APP.STATUS.ERROR, message: msg.substring(0, 500)
    };
  }
}

// ─── AI: Generate follow-up email ─────────────────────────────────────────

function generateFollowupEmail_(lead, previousSummary, followupNum, cfg) {
  var prompt = buildFollowupPrompt_(lead, previousSummary, followupNum, cfg);
  var parsed;

  if (cfg.anthropicApiKey) {
    parsed = callClaude_(prompt, 600, cfg);
  } else {
    parsed = callOpenAI_(prompt, 600, cfg);
  }

  var required = ["email_subject", "email_body"];
  var missing = [];
  var i;
  for (i = 0; i < required.length; i++) {
    if (!parsed[required[i]]) missing.push(required[i]);
  }
  if (missing.length > 0) throw new Error("Model output missing keys: " + missing.join(", "));

  parsed.email_subject = sanitizeTextForDelivery_(enforceSubjectQuality_(parsed.email_subject, lead));
  parsed.email_body = sanitizeTextForDelivery_(parsed.email_body);
  parsed.email_body = enforceGreeting_(parsed.email_body, lead);
  parsed.email_body = enforceEmailSignature_(parsed.email_body, cfg);
  parsed.email_body_html = buildEmailHtml_(parsed.email_body, cfg);

  return parsed;
}

function buildFollowupPrompt_(lead, previousSummary, followupNum, cfg) {
  var lines = [];

  var tones = ["", "brief and curious — check if they saw the first email", "genuinely helpful — add standalone practical value", "warm and zero-pressure — soft close, leave door open"];
  var purposes = [
    "",
    "Check if they received the first email. Add one specific insight about their niche (e.g. inquiry response time, funnel drop-off) as a hook. Keep it short.",
    "Share one standalone practical tip relevant to their niche — useful even if they never reply. Don't repeat the original pitch.",
    "Final note. Acknowledge timing may not be right. Leave door open for future. No pressure, no hard ask."
  ];

  lines.push("You are a senior digital marketing strategist for GoDigitalPro.");
  lines.push("Return ONLY valid JSON with keys: email_subject, email_body");
  lines.push("");
  lines.push("Context: This is follow-up #" + followupNum + " of a cold outreach email sequence.");
  lines.push("Tone: " + tones[followupNum]);
  lines.push("Purpose: " + purposes[followupNum]);
  lines.push("");
  lines.push("Rules:");
  lines.push("1) email_subject: max 55 chars. Different from original. Hook or curiosity style. No first names.");
  lines.push("2) email_body: max 90 words. Short and conversational.");
  lines.push("3) Reference the previous email very briefly (one phrase). Do not repeat the full pitch.");
  lines.push("4) Do NOT include sign-off or signature. System appends these.");
  lines.push("5) Do NOT include raw links, Calendly URL, or booking language. System appends CTA.");
  lines.push("6) No markdown. No emojis. No fake claims.");
  lines.push("7) One or two short paragraphs maximum.");
  lines.push("");
  lines.push("Lead data:");
  lines.push("company: " + lead.company_name);
  lines.push("niche: " + (lead.niche || "Not specified"));
  lines.push("contact: " + (lead.contact_name || "Not available"));
  if (previousSummary) {
    lines.push("Previous analysis (brief): " + previousSummary.substring(0, 300));
  }
  if (lead.notes) {
    var notesCtx = extractNotesPromptContext_(lead.notes);
    if (notesCtx.directiveLines.length > 0) {
      lines.push("Campaign context:");
      for (var i = 0; i < notesCtx.directiveLines.length; i++) {
        lines.push("- " + notesCtx.directiveLines[i]);
      }
    }
  }

  return lines.join("\n");
}

// ─── Column management ─────────────────────────────────────────────────────

function ensureFollowupCountColumn_(sheet) {
  var headers = getHeaderMap_(sheet);
  if (headers[FOLLOWUP.FOLLOWUP_COUNT_HEADER]) return;

  var lastCol = sheet.getLastColumn();
  var newCol = lastCol + 1;
  sheet.getRange(1, newCol).setValue(FOLLOWUP.FOLLOWUP_COUNT_HEADER);
  SpreadsheetApp.flush();
}

// ─── Triggers ──────────────────────────────────────────────────────────────

function installFollowupTrigger() {
  removeFollowupTriggers();
  ScriptApp.newTrigger(FOLLOWUP.TRIGGER_HANDLER)
    .timeBased()
    .everyHours(6)
    .create();
  SpreadsheetApp.getActiveSpreadsheet().toast("Follow-up trigger installed — runs every 6 hours.");
}

function removeFollowupTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  var i;
  for (i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === FOLLOWUP.TRIGGER_HANDLER) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
}

function toastFollowupSummary_(result) {
  SpreadsheetApp.getActiveSpreadsheet().toast(
    "Follow-ups — Processed: " + result.processed +
    " | Drafted: " + result.drafted +
    " | Sent: " + result.sent +
    " | Errors: " + result.errors
  );
}
