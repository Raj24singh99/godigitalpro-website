function getConfig_() {
  var props = PropertiesService.getScriptProperties();

  var openAiKey = props.getProperty(APP.PROPS.OPENAI_API_KEY);
  var anthropicApiKey = safeTrim_(props.getProperty(APP.PROPS.ANTHROPIC_API_KEY));
  var senderEmail = props.getProperty(APP.PROPS.SENDER_EMAIL);
  var senderName = props.getProperty(APP.PROPS.SENDER_NAME);
  var sendMode = safeTrim_(props.getProperty(APP.PROPS.SEND_MODE)).toUpperCase();
  var dailyRaw = props.getProperty(APP.PROPS.DAILY_SEND_LIMIT);
  var batchRaw = props.getProperty(APP.PROPS.MAX_LEADS_PER_RUN);
  var calendlyLink = safeTrim_(props.getProperty(APP.PROPS.CALENDLY_LINK));
  var attachmentDriveFileId = safeTrim_(props.getProperty(APP.PROPS.ATTACHMENT_DRIVE_FILE_ID));
  var attachmentFileName = safeTrim_(props.getProperty(APP.PROPS.ATTACHMENT_FILE_NAME));
  var brandWebsite = safeTrim_(props.getProperty(APP.PROPS.BRAND_WEBSITE));
  var brandLinkedin = safeTrim_(props.getProperty(APP.PROPS.BRAND_LINKEDIN));
  var brandLogoUrl = safeTrim_(props.getProperty(APP.PROPS.BRAND_LOGO_URL));

  var missing = [];
  // Require at least one AI key
  if (!anthropicApiKey && !openAiKey) missing.push("ANTHROPIC_API_KEY or OPENAI_API_KEY");
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

  var maxLeadsPerRun = APP.DEFAULTS.MAX_LEADS_PER_RUN;
  if (batchRaw) {
    maxLeadsPerRun = parseInt(batchRaw, 10);
    if (isNaN(maxLeadsPerRun) || maxLeadsPerRun <= 0) {
      throw new Error("MAX_LEADS_PER_RUN must be a positive integer.");
    }
  }

  if (!calendlyLink) {
    calendlyLink = APP.DEFAULTS.CALENDLY_LINK;
  }
  if (!attachmentFileName) {
    attachmentFileName = APP.DEFAULTS.ATTACHMENT_FILE_NAME;
  }
  if (!brandWebsite) {
    brandWebsite = APP.DEFAULTS.BRAND_WEBSITE;
  }
  if (!brandLinkedin) {
    brandLinkedin = APP.DEFAULTS.BRAND_LINKEDIN;
  }
  if (!brandLogoUrl) {
    brandLogoUrl = APP.DEFAULTS.BRAND_LOGO_URL;
  }

  if (calendlyLink && !/^https?:\/\//i.test(calendlyLink)) {
    throw new Error("CALENDLY_LINK must start with http:// or https://");
  }
  if (brandWebsite && !/^https?:\/\//i.test(brandWebsite)) {
    throw new Error("BRAND_WEBSITE must start with http:// or https://");
  }
  if (brandLinkedin && !/^https?:\/\//i.test(brandLinkedin)) {
    throw new Error("BRAND_LINKEDIN must start with http:// or https://");
  }
  if (brandLogoUrl && !/^https?:\/\//i.test(brandLogoUrl)) {
    throw new Error("BRAND_LOGO_URL must start with http:// or https://");
  }

  return {
    openAiKey: openAiKey,
    anthropicApiKey: anthropicApiKey,
    senderEmail: senderEmail,
    senderName: senderName,
    sendMode: sendMode,
    dailySendLimit: dailyLimit,
    maxLeadsPerRun: maxLeadsPerRun,
    calendlyLink: calendlyLink,
    attachmentDriveFileId: attachmentDriveFileId,
    attachmentFileName: attachmentFileName,
    brandWebsite: brandWebsite,
    brandLinkedin: brandLinkedin,
    brandLogoUrl: brandLogoUrl
  };
}
