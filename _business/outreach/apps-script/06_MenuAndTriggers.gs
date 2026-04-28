function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu(APP.MENU_NAME)
    .addItem("Test setup", "testSetup")
    .addItem("Test config", "testConfig")
    .addSeparator()
    .addSubMenu(
      SpreadsheetApp.getUi().createMenu("Outreach")
        .addItem("Process next lead", "processNextLead")
        .addItem("Process batch now", "processBatchNow")
        .addItem("Install hourly trigger", "installHourlyTrigger")
        .addItem("Remove outreach triggers", "removeOutreachTriggers")
    )
    .addSubMenu(
      SpreadsheetApp.getUi().createMenu("Follow-ups")
        .addItem("Process follow-ups now", "processFollowups")
        .addItem("Install follow-up trigger (6h)", "installFollowupTrigger")
        .addItem("Remove follow-up triggers", "removeFollowupTriggers")
    )
    .addToUi();
}

function testSetup() {
  var ctx = getSheetContext_();
  ctx.ss.toast("Setup OK. Connected to Leads sheet.");
}

function testConfig() {
  var cfg = getConfig_();
  var ctx = getSheetContext_();

  ctx.ss.toast(
    "Config OK. Mode: " + cfg.sendMode +
    ", Daily limit: " + cfg.dailySendLimit +
    ", Batch size: " + cfg.maxLeadsPerRun +
    ", Calendly: " + (cfg.calendlyLink ? "ON" : "OFF")
  );
}

function installHourlyTrigger() {
  removeOutreachTriggers();

  ScriptApp.newTrigger(APP.TRIGGER_HANDLER)
    .timeBased()
    .everyHours(1)
    .create();

  SpreadsheetApp.getActiveSpreadsheet().toast("Hourly trigger installed.");
}

function removeOutreachTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  var i;

  for (i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === APP.TRIGGER_HANDLER) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  SpreadsheetApp.getActiveSpreadsheet().toast("Outreach triggers removed.");
}
