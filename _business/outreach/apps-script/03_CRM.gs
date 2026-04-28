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

  var missing = [];
  for (i = 0; i < APP.REQUIRED_HEADERS.length; i++) {
    if (!map[APP.REQUIRED_HEADERS[i]]) {
      missing.push(APP.REQUIRED_HEADERS[i]);
    }
  }

  if (missing.length > 0) {
    throw new Error("Missing columns in Leads sheet: " + missing.join(", "));
  }

  return map;
}

function findNextByStatus_(sheet, headers, targetStatus) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;

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
    lead_id: cell_(rowValues, headers, "lead_id"),
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

function writeGeneratedFields_(sheet, row, headers, generated) {
  sheet.getRange(row, headers.analysis_summary).setValue(generated.analysis_summary);
  sheet.getRange(row, headers.framework_90_day).setValue(generated.framework_90_day);
  sheet.getRange(row, headers.email_subject).setValue(generated.email_subject);
  sheet.getRange(row, headers.email_body).setValue(generated.email_body);
}

function getTodaySentCount_(sheet, headers) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

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
      if (sentDay === today) count++;
    }
  }

  return count;
}

function appendActivityLog_(ss, item) {
  var sheet = ss.getSheetByName(APP.LOG_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(APP.LOG_SHEET_NAME);
    sheet.getRange(1, 1, 1, 8).setValues([[
      "timestamp",
      "run_type",
      "row_number",
      "lead_id",
      "company_name",
      "email",
      "status",
      "message"
    ]]);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date(),
    safeTrim_(item.runType),
    safeTrim_(item.row),
    safeTrim_(item.leadId),
    safeTrim_(item.company),
    safeTrim_(item.email),
    safeTrim_(item.status),
    safeTrim_(item.message)
  ]);
}
