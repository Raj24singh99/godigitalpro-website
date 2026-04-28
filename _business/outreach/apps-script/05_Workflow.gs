function processNextLead() {
  var result = processBatchInternal_(1, "manual_single");
  toastSummary_(result);
}

function processBatchNow() {
  var cfg = getConfig_();
  var result = processBatchInternal_(cfg.maxLeadsPerRun, "manual_batch");
  toastSummary_(result);
}

function runScheduledOutreach() {
  var cfg = getConfig_();
  processBatchInternal_(cfg.maxLeadsPerRun, "scheduled");
}

function processBatchInternal_(maxLeads, runType) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    throw new Error("Another outreach run is already in progress.");
  }

  try {
    var ctx = getSheetContext_();
    var ss = ctx.ss;
    var sheet = ctx.sheet;
    var headers = ctx.headers;
    var cfg = getConfig_();

    var processed = 0;
    var drafted = 0;
    var sent = 0;
    var errors = 0;

    var remainingSendQuota = 999999;
    if (cfg.sendMode === "SEND") {
      remainingSendQuota = cfg.dailySendLimit - getTodaySentCount_(sheet, headers);
      if (remainingSendQuota < 0) remainingSendQuota = 0;
    }

    while (processed < maxLeads) {
      if (cfg.sendMode === "SEND" && remainingSendQuota <= 0) {
        appendActivityLog_(ss, {
          row: "",
          leadId: "",
          company: "",
          email: "",
          status: "SKIPPED",
          message: "Daily send limit reached.",
          runType: runType
        });
        break;
      }

      var next = findNextByStatus_(sheet, headers, APP.STATUS.NEW);
      if (!next) break;

      var rowResult = processOneRow_(sheet, headers, cfg, next.row, next.values);
      processed++;

      if (rowResult.status === APP.STATUS.DRAFTED) drafted++;
      if (rowResult.status === APP.STATUS.SENT) {
        sent++;
        remainingSendQuota--;
      }
      if (rowResult.status === APP.STATUS.ERROR) errors++;

      rowResult.runType = runType;
      appendActivityLog_(ss, rowResult);
    }

    return {
      processed: processed,
      drafted: drafted,
      sent: sent,
      errors: errors
    };
  } finally {
    lock.releaseLock();
  }
}

function processOneRow_(sheet, headers, cfg, row, rowValues) {
  var lead = rowToLead_(rowValues, headers);

  if (!lead.email) {
    markRowError_(sheet, row, headers, "Missing email.");
    return {
      row: row,
      leadId: lead.lead_id,
      company: lead.company_name,
      email: lead.email,
      status: APP.STATUS.ERROR,
      message: "Missing email."
    };
  }

  sheet.getRange(row, headers.status).setValue(APP.STATUS.PROCESSING);
  sheet.getRange(row, headers.error_log).clearContent();

  try {
    var websiteText = "";
    if (lead.website) {
      try {
        websiteText = fetchWebsiteText_(lead.website);
      } catch (websiteErr) {
        websiteText = "";
      }
    }
    var generated = generateOutreach_(lead, websiteText, cfg);
    var emailOptions = buildEmailOptions_(cfg, generated);

    writeGeneratedFields_(sheet, row, headers, generated);

    if (cfg.sendMode === "SEND") {
      GmailApp.sendEmail(lead.email, generated.email_subject, generated.email_body, {
        name: emailOptions.name,
        replyTo: emailOptions.replyTo,
        htmlBody: emailOptions.htmlBody,
        attachments: emailOptions.attachments
      });

      sheet.getRange(row, headers.status).setValue(APP.STATUS.SENT);
      sheet.getRange(row, headers.sent_at).setValue(new Date());
      sheet.getRange(row, headers.draft_link).clearContent();

      return {
        row: row,
        leadId: lead.lead_id,
        company: lead.company_name,
        email: lead.email,
        status: APP.STATUS.SENT,
        message: "Email sent."
      };
    }

    var draft = GmailApp.createDraft(
      lead.email,
      generated.email_subject,
      generated.email_body,
      {
        name: emailOptions.name,
        replyTo: emailOptions.replyTo,
        htmlBody: emailOptions.htmlBody,
        attachments: emailOptions.attachments
      }
    );

    var draftLink = "https://mail.google.com/mail/u/0/#drafts";
    if (draft && draft.getId) {
      draftLink = "https://mail.google.com/mail/u/0/#drafts?compose=" + draft.getId();
    }

    sheet.getRange(row, headers.draft_link).setValue(draftLink);
    sheet.getRange(row, headers.status).setValue(APP.STATUS.DRAFTED);
    sheet.getRange(row, headers.sent_at).clearContent();

    return {
      row: row,
      leadId: lead.lead_id,
      company: lead.company_name,
      email: lead.email,
      status: APP.STATUS.DRAFTED,
      message: "Draft created."
    };
  } catch (err) {
    var msg = String(err && err.message ? err.message : err);
    markRowError_(sheet, row, headers, msg);

    return {
      row: row,
      leadId: lead.lead_id,
      company: lead.company_name,
      email: lead.email,
      status: APP.STATUS.ERROR,
      message: msg.substring(0, 500)
    };
  }
}

function buildEmailOptions_(cfg, generated) {
  return {
    name: cfg.senderName,
    replyTo: cfg.senderEmail,
    htmlBody: generated.email_body_html || generated.email_body,
    attachments: getConfiguredAttachments_(cfg)
  };
}

function getConfiguredAttachments_(cfg) {
  var fileId = safeTrim_(cfg.attachmentDriveFileId);
  if (!fileId) return [];

  try {
    var file = DriveApp.getFileById(fileId);
    var blob = file.getBlob();
    var fileName = normalizeAttachmentFileName_(cfg.attachmentFileName || file.getName());
    return [blob.setName(fileName)];
  } catch (e) {
    throw new Error("PDF attachment setup failed: " + String(e && e.message ? e.message : e));
  }
}

function normalizeAttachmentFileName_(rawName) {
  var name = safeTrim_(rawName) || APP.DEFAULTS.ATTACHMENT_FILE_NAME;
  name = name.replace(/[\\/:*?\"<>|]+/g, " ").replace(/\s+/g, " ");
  name = safeTrim_(name);
  if (!/\.pdf$/i.test(name)) {
    name = name + ".pdf";
  }
  return name;
}

function toastSummary_(result) {
  SpreadsheetApp.getActiveSpreadsheet().toast(
    "Processed: " + result.processed +
    " | Drafted: " + result.drafted +
    " | Sent: " + result.sent +
    " | Errors: " + result.errors
  );
}
