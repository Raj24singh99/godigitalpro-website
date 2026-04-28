function safeTrim_(value) {
  return String(value == null ? "" : value).replace(/^\s+|\s+$/g, "");
}

function normalizeHeaderKey_(value) {
  var s = safeTrim_(value).toLowerCase();
  s = s.replace(/\s+/g, "_");
  s = s.replace(/[^a-z0-9_]/g, "");
  return s;
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

function getNowDateKey_() {
  var tz = Session.getScriptTimeZone();
  return Utilities.formatDate(new Date(), tz, "yyyy-MM-dd");
}
