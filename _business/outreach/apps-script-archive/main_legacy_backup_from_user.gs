var APP = {
  SHEET_NAME: "Leads",
  MENU_NAME: "GoDigitalPro",
  STATUS: {
    NEW: "NEW",
    PROCESSING: "PROCESSING",
    DRAFTED: "DRAFTED",
    SENT: "SENT",
    ERROR: "ERROR"
  },
  PROPS: {
    OPENAI_API_KEY: "OPENAI_API_KEY",
    SENDER_EMAIL: "SENDER_EMAIL",
    SENDER_NAME: "SENDER_NAME",
    SEND_MODE: "SEND_MODE",
    DAILY_SEND_LIMIT: "DAILY_SEND_LIMIT"
  }
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu(APP.MENU_NAME)
    .addItem("Test setup", "testSetup")
    .addItem("Test config", "testConfig")
    .addSeparator()
    .addItem("Process next lead", "processNextLead")
    .addToUi();
}

function testSetup() {
  var ctx = getSheetContext_();
  ctx.ss.toast("Setup OK. Connected to Leads sheet.");
}

function testConfig() {
  var ctx = getSheetContext_();
  var cfg = getConfig_();

  ctx.ss.toast(
    "Config OK. Mode: " + cfg.sendMode + ", Daily limit: " + cfg.dailySendLimit
  );
}

function processNextLead() {
  var ctx = getSheetContext_();
  var ss = ctx.ss;
  var sheet = ctx.sheet;
  var headers = ctx.headers;
  var cfg = getConfig_();

  var next = findNextByStatus_(sheet, headers, APP.STATUS.NEW);
  if (!next) {
    ss.toast("No lead with status NEW.");
    return;
  }

  var row = next.row;
  var lead = rowToLead_(next.values, headers);

  if (!lead.email) {
    markRowError_(sheet, row, headers, "Missing email.");
    throw new Error("Row " + row + " missing email.");
  }

  if (!lead.website) {
    markRowError_(sheet, row, headers, "Missing website.");
    throw new Error("Row " + row + " missing website.");
  }

  sheet.getRange(row, headers.status).setValue(APP.STATUS.PROCESSING);
  sheet.getRange(row, headers.error_log).clearContent();

  try {
    var websiteText = fetchWebsiteText_(lead.website);
    var generated = generateOutreach_(lead, websiteText, cfg.openAiKey);

    sheet.getRange(row, headers.analysis_summary).setValue(generated.analysis_summary);
    sheet.getRange(row, headers.framework_90_day).setValue(generated.framework_90_day);
    sheet.getRange(row, headers.email_subject).setValue(generated.email_subject);
    sheet.getRange(row, headers.email_body).setValue(generated.email_body);

    if (cfg.sendMode === "SEND") {
      enforceDailyLimit_(sheet, headers, cfg.dailySendLimit);

      GmailApp.sendEmail(lead.email, generated.email_subject, generated.email_body, {
        name: cfg.senderName,
        replyTo: cfg.senderEmail
      });

      sheet.getRange(row, headers.status).setValue(APP.STATUS.SENT);
      sheet.getRange(row, headers.sent_at).setValue(new Date());
      sheet.getRange(row, headers.draft_link).clearContent();
    } else {
      var draft = GmailApp.createDraft(
        lead.email,
        generated.email_subject,
        generated.email_body,
        {
          name: cfg.senderName,
          replyTo: cfg.senderEmail
        }
      );

      var draftLink = "https://mail.google.com/mail/u/0/#drafts";
      if (draft && draft.getId) {
        draftLink = "https://mail.google.com/mail/u/0/#drafts?compose=" + draft.getId();
      }

      sheet.getRange(row, headers.draft_link).setValue(draftLink);
      sheet.getRange(row, headers.status).setValue(APP.STATUS.DRAFTED);
      sheet.getRange(row, headers.sent_at).clearContent();
    }

    ss.toast("Processed row " + row + ".");
  } catch (err) {
    var msg = String(err && err.message ? err.message : err);
    markRowError_(sheet, row, headers, msg);
    ss.toast("Error on row " + row + ". Check error_log.");
    throw err;
  }
}

/* =========================
   AI + Prompt
   ========================= */

function generateOutreach_(lead, websiteText, openAiKey) {
  var prompt = buildPrompt_(lead, websiteText);

  var payload = {
    model: "gpt-4.1-mini",
    input: prompt,
    max_output_tokens: 800
  };

  var response = UrlFetchApp.fetch("https://api.openai.com/v1/responses", {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + openAiKey
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  var statusCode = response.getResponseCode();
  var body = response.getContentText();

  if (statusCode >= 300) {
    var errorText = body;
    try {
      var errJson = JSON.parse(body);
      if (errJson && errJson.error && errJson.error.message) {
        errorText = errJson.error.message;
      }
    } catch (ignoreParseErr) {}
    throw new Error("OpenAI error " + statusCode + ": " + String(errorText).substring(0, 500));
  }

  var json = JSON.parse(body);
  var text = extractOutputText_(json);
  var parsed = extractJsonObject_(text);

  var required = ["analysis_summary", "framework_90_day", "email_subject", "email_body"];
  var missing = [];
  var i;

  for (i = 0; i < required.length; i++) {
    if (!parsed[required[i]]) {
      missing.push(required[i]);
    }
  }

  if (missing.length > 0) {
    throw new Error("Model output missing keys: " + missing.join(", "));
  }

  return parsed;
}

function buildPrompt_(lead, websiteText) {
  var lines = [];

  lines.push("You are a senior digital marketing strategist for GoDigitalPro.");
  lines.push("Return ONLY valid JSON.");
  lines.push("Keys: analysis_summary, framework_90_day, email_subject, email_body");
  lines.push("");
  lines.push("Rules:");
  lines.push("1) analysis_summary: max 120 words, specific.");
  lines.push("2) framework_90_day: phases 0-30, 31-60, 61-90 with practical actions.");
  lines.push("3) email_subject: max 60 characters, personalized.");
  lines.push("4) email_body: max 170 words, friendly and professional.");
  lines.push("5) Use one CTA asking for a 15 minute audit call.");
  lines.push("6) No markdown.");
  lines.push("7) No fake claims or invented numbers.");
  lines.push("");
  lines.push("Lead data:");
  lines.push("company_name: " + lead.company_name);
  lines.push("contact_name: " + lead.contact_name);
  lines.push("email: " + lead.email);
  lines.push("website: " + lead.website);
  lines.push("niche: " + lead.niche);
  lines.push("location: " + lead.location);
  lines.push("notes: " + lead.notes);
  lines.push("");
  lines.push("Website extracted text:");
  lines.push(String(websiteText || "").substring(0, 12000));

  return lines.join("\n");
}

function extractOutputText_(responseJson) {
  if (responseJson && typeof responseJson.output_text === "string" && responseJson.output_text) {
    return responseJson.output_text;
  }

  var parts = [];
  var i;
  var j;

  if (responseJson && responseJson.output && responseJson.output.length) {
    for (i = 0; i < responseJson.output.length; i++) {
      var item = responseJson.output[i];
      if (!item || !item.content || !item.content.length) {
        continue;
      }
      for (j = 0; j < item.content.length; j++) {
        var c = item.content[j];
        if (!c) {
          continue;
        }

        if ((c.type === "output_text" || c.type === "text") && c.text) {
          if (typeof c.text === "string") {
            parts.push(c.text);
          } else if (c.text.value && typeof c.text.value === "string") {
            parts.push(c.text.value);
          }
        }
      }
    }
  }

  if (parts.length > 0) {
    return parts.join("\n");
  }

  throw new Error("Could not read output text from OpenAI response.");
}

function extractJsonObject_(text) {
  var s = safeTrim_(text);

  s = s.replace(/^```json\s*/i, "");
  s = s.replace(/^```\s*/i, "");
  s = s.replace(/\s*```$/, "");
  s = safeTrim_(s);

  try {
    return JSON.parse(s);
  } catch (firstErr) {
    var start = s.indexOf("{");
    var end = s.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) {
      throw new Error("Model output was not valid JSON.");
    }
    return JSON.parse(s.substring(start, end + 1));
  }
}

/* =========================
   Website Fetch
   ========================= */

function fetchWebsiteText_(rawUrl) {
  var url = normalizeUrl_(rawUrl);
  var urls = [url];

  if (url.indexOf("https://") === 0) {
    urls.push("http://" + url.substring(8));
  }

  var i;
  var lastError = "Unknown website fetch error.";

  for (i = 0; i < urls.length; i++) {
    try {
      var res = UrlFetchApp.fetch(urls[i], {
        muteHttpExceptions: true,
        followRedirects: true,
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      });

      var code = res.getResponseCode();
      if (code >= 200 && code < 400) {
        var text = stripHtmlToText_(res.getContentText());
        if (text) {
          return text;
        }
        lastError = "Empty readable text from " + urls[i];
      } else {
        lastError = "HTTP " + code + " from " + urls[i];
      }
    } catch (e) {
      lastError = String(e && e.message ? e.message : e);
    }
  }

  throw new Error("Website fetch failed: " + lastError);
}

function normalizeUrl_(rawUrl) {
  var u = safeTrim_(rawUrl);
  if (!/^https?:\/\//i.test(u)) {
    u = "https://" + u;
  }
  return u;
}

function stripHtmlToText_(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&quot;/gi, "\"")
    .replace(/\s+/g, " ")
    .replace(/^\s+|\s+$/g, "");
}

/* =========================
   Config + Sheet
   ========================= */

function getConfig_() {
  var props = PropertiesService.getScriptProperties();

  var openAiKey = props.getProperty(APP.PROPS.OPENAI_API_KEY);
  var senderEmail = props.getProperty(APP.PROPS.SENDER_EMAIL);
  var senderName = props.getProperty(APP.PROPS.SENDER_NAME);
  var sendMode = safeTrim_(props.getProperty(APP.PROPS.SEND_MODE)).toUpperCase();
  var dailyRaw = props.getProperty(APP.PROPS.DAILY_SEND_LIMIT);

  var missing = [];
  if (!openAiKey) missing.push(APP.PROPS.OPENAI_API_KEY);
  if (!senderEmail) missing.push(APP.PROPS.SENDER_EMAIL);
  if (!senderName) missing.push(APP.PROPS.SENDER_NAME);
  if (!sendMode) missing.push(APP.PROPS.SEND_MODE);
  if (!dailyRaw) missing.push(APP.PROPS.DAILY_SEND_LIMIT);

  if (missing.length > 0) {
    throw new Error("Missing script properties: " + missing.join(", "));
  }

  if (sendMode !== "DRAFT" && sendMode !== "SEND") {
    throw new Error("SEND_MODE must be DRAFT or SEND.");
  }

  var dailyLimit = parseInt(dailyRaw, 10);
  if (isNaN(dailyLimit) || dailyLimit <= 0) {
    throw new Error("DAILY_SEND_LIMIT must be a positive integer.");
  }

  return {
    openAiKey: openAiKey,
    senderEmail: senderEmail,
    senderName: senderName,
    sendMode: sendMode,
    dailySendLimit: dailyLimit
  };
}

function getSheetContext_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(APP.SHEET_NAME);

  if (!sheet) {
    throw new Error("Sheet '" + APP.SHEET_NAME + "' not found.");
  }

  ensureHeaderLayout_(sheet);
  var headers = getHeaderMap_(sheet);

  return {
    ss: ss,
    sheet: sheet,
    headers: headers
  };
}

function ensureHeaderLayout_(sheet) {
  var lastCol = sheet.getLastColumn();
  var first = safeTrim_(sheet.getRange(1, 1).getValue());

  if (lastCol === 1 && first.indexOf(",") !== -1) {
    var parts = first.split(",");
    var cleaned = [];
    var i;
    for (i = 0; i < parts.length; i++) {
      cleaned.push(normalizeHeaderKey_(parts[i]));
    }
    sheet.getRange(1, 1, 1, cleaned.length).setValues([cleaned]);
  }
}

function getHeaderMap_(sheet) {
  var headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var map = {};
  var i;

  for (i = 0; i < headerRow.length; i++) {
    var key = normalizeHeaderKey_(headerRow[i]);
    if (key) {
      map[key] = i + 1;
    }
  }

  var required = [
    "lead_id",
    "company_name",
    "website",
    "contact_name",
    "email",
    "niche",
    "location",
    "notes",
    "status",
    "analysis_summary",
    "framework_90_day",
    "email_subject",
    "email_body",
    "draft_link",
    "sent_at",
    "reply_status",
    "next_followup_date",
    "error_log"
  ];

  var missing = [];
  for (i = 0; i < required.length; i++) {
    if (!map[required[i]]) {
      missing.push(required[i]);
    }
  }

  if (missing.length > 0) {
    throw new Error("Missing columns in Leads sheet: " + missing.join(", "));
  }

  return map;
}

function normalizeHeaderKey_(value) {
  var s = safeTrim_(value).toLowerCase();
  s = s.replace(/\s+/g, "_");
  s = s.replace(/[^a-z0-9_]/g, "");
  return s;
}

function findNextByStatus_(sheet, headers, targetStatus) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return null;
  }

  var data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
  var target = String(targetStatus || "").toUpperCase();
  var i;

  for (i = 0; i < data.length; i++) {
    var status = safeTrim_(data[i][headers.status - 1]).toUpperCase();

    if (status === target) {
      return { row: i + 2, values: data[i] };
    }

    if (target === APP.STATUS.NEW && status === "") {
      return { row: i + 2, values: data[i] };
    }
  }

  return null;
}

function rowToLead_(rowValues, headers) {
  return {
    company_name: cell_(rowValues, headers, "company_name"),
    website: cell_(rowValues, headers, "website"),
    contact_name: cell_(rowValues, headers, "contact_name"),
    email: cell_(rowValues, headers, "email"),
    niche: cell_(rowValues, headers, "niche"),
    location: cell_(rowValues, headers, "location"),
    notes: cell_(rowValues, headers, "notes")
  };
}

function cell_(rowValues, headers, key) {
  var col = headers[key];
  if (!col) return "";
  return safeTrim_(rowValues[col - 1]);
}

function markRowError_(sheet, row, headers, message) {
  sheet.getRange(row, headers.status).setValue(APP.STATUS.ERROR);
  sheet.getRange(row, headers.error_log).setValue(String(message || "").substring(0, 1000));
}

function safeTrim_(value) {
  return String(value == null ? "" : value).replace(/^\s+|\s+$/g, "");
}

/* =========================
   Limits
   ========================= */

function enforceDailyLimit_(sheet, headers, limit) {
  if (!limit || limit <= 0) {
    return;
  }
  var sentToday = getTodaySentCount_(sheet, headers);
  if (sentToday >= limit) {
    throw new Error("Daily send limit reached (" + limit + ").");
  }
}

function getTodaySentCount_(sheet, headers) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return 0;
  }

  var data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
  var tz = Session.getScriptTimeZone();
  var today = Utilities.formatDate(new Date(), tz, "yyyy-MM-dd");
  var count = 0;
  var i;

  for (i = 0; i < data.length; i++) {
    var status = safeTrim_(data[i][headers.status - 1]).toUpperCase();
    var sentAt = data[i][headers.sent_at - 1];

    if (status === APP.STATUS.SENT &&
        Object.prototype.toString.call(sentAt) === "[object Date]") {
      var sentDay = Utilities.formatDate(sentAt, tz, "yyyy-MM-dd");
      if (sentDay === today) {
        count++;
      }
    }
  }

  return count;
}
