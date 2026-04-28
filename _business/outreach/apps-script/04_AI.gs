function generateOutreach_(lead, websiteText, cfg) {
  var prompt = buildPrompt_(lead, websiteText, cfg);
  var parsed;

  if (cfg.anthropicApiKey) {
    parsed = callClaude_(prompt, 900, cfg);
  } else {
    parsed = callOpenAI_(prompt, 900, cfg);
  }

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

  parsed.email_subject = sanitizeTextForDelivery_(enforceSubjectQuality_(parsed.email_subject, lead));
  parsed.email_body = sanitizeTextForDelivery_(parsed.email_body);
  parsed.email_body = enforceGreeting_(parsed.email_body, lead);
  parsed.email_body = enforceEmailSignature_(parsed.email_body, cfg);
  parsed.email_body_html = buildEmailHtml_(parsed.email_body, cfg);

  return parsed;
}

function buildPrompt_(lead, websiteText, cfg) {
  var lines = [];
  var calendlyLink = cfg.calendlyLink;
  var notesContext = extractNotesPromptContext_(lead.notes);

  lines.push("You are a senior digital marketing strategist for GoDigitalPro.");
  lines.push("Return ONLY valid JSON.");
  lines.push("Keys: analysis_summary, framework_90_day, email_subject, email_body");
  lines.push("");
  lines.push("Rules:");
  lines.push("1) analysis_summary: max 120 words, specific.");
  lines.push("2) framework_90_day: phases 0-30, 31-60, 61-90 with practical actions.");
  lines.push("3) email_subject: max 60 characters, hook + pain-point style.");
  lines.push("   Do not mention recipient first name (example: avoid 'Raj').");
  lines.push("   Prefer outcomes and pain points like speed, leads, conversion, pipeline.");
  lines.push("4) email_body: max 170 words, friendly and professional.");
  lines.push("5) Close naturally. Do NOT add any sign-off, signature, or closing line. Do NOT write 'Best regards', 'Thanks', 'Sincerely', or any team name. The system appends these.");
  lines.push("6) Do not include booking instructions, raw links, or CTA boilerplate. The system appends the final CTA block and signature.");
  lines.push("7) No markdown.");
  lines.push("8) No fake claims or invented numbers.");
  lines.push("9) Keep sentences continuous and readable; avoid random line breaks mid-sentence.");
  lines.push("10) Use short paragraphs for clarity.");
  lines.push("11) Do not use emojis.");
  lines.push("12) If CRM notes include directive keys, follow them with highest priority.");
  if (calendlyLink) {
    lines.push("13) The system will append the booking CTA after the body using this link: " + calendlyLink);
  } else {
    lines.push("13) The system will append the booking CTA after the body.");
  }
  lines.push("");
  lines.push("Lead data:");
  lines.push("company_name: " + lead.company_name);
  lines.push("contact_name: " + lead.contact_name);
  lines.push("email: " + lead.email);
  lines.push("website: " + (lead.website || "Not available"));
  lines.push("niche: " + lead.niche);
  lines.push("location: " + lead.location);
  lines.push("notes: " + (notesContext.rawNotes || "Not provided"));
  if (notesContext.directiveLines.length > 0) {
    lines.push("crm_directives:");
    var i;
    for (i = 0; i < notesContext.directiveLines.length; i++) {
      lines.push("- " + notesContext.directiveLines[i]);
    }
  }
  lines.push("");
  lines.push("Sender background (use naturally as proof, do not fabricate beyond this):");
  lines.push("- 250Cr+ ad spend managed, 1000Cr+ revenue delivered");
  lines.push("- 50+ clients across startups to enterprises, 7 countries");
  lines.push("- EdTech case study: Shiksha Niketan School — ran enrollment lead gen campaigns, social media setup, parent-targeted creatives, consistent inquiry pipeline built");
  lines.push("- Startup case study: Truway — full brand build from scratch (logo, website, creatives, identity)");
  lines.push("- Services: Google Ads, Meta Ads, SEO, landing page CRO, social media, branding, analytics");
  lines.push("");
  if (websiteText) {
    lines.push("Website extracted text:");
    lines.push(String(websiteText).substring(0, APP.DEFAULTS.WEBSITE_TEXT_MAX));
  } else {
    lines.push("Website extracted text: Not available.");
    lines.push("Use only lead data + niche context. Keep analysis practical and non-fabricated.");
  }

  return lines.join("\n");
}

function extractNotesPromptContext_(notes) {
  var raw = safeTrim_(notes);
  var directives = {};
  var directiveLines = [];
  var tokens;
  var i;

  if (raw) {
    tokens = raw.split(/\s*(?:\n|\||;)\s*/g);
    for (i = 0; i < tokens.length; i++) {
      var token = safeTrim_(tokens[i]);
      if (!token) continue;

      var sep = token.indexOf(":");
      if (sep <= 0) continue;

      var key = normalizeNoteDirectiveKey_(token.substring(0, sep));
      var value = safeTrim_(token.substring(sep + 1));
      if (!key || !value) continue;

      if (directives[key]) {
        directives[key] = directives[key] + " | " + clipPromptText_(value, 240);
      } else {
        directives[key] = clipPromptText_(value, 240);
      }
    }
  }

  var ordered = [
    "campaign",
    "angle",
    "audience",
    "pain_points",
    "outcomes",
    "services",
    "offer",
    "cta",
    "tone",
    "must_include",
    "avoid",
    "constraints",
    "subject_style",
    "framework_focus",
    "personalization",
    "proof"
  ];

  for (i = 0; i < ordered.length; i++) {
    if (directives[ordered[i]]) {
      directiveLines.push(ordered[i] + ": " + directives[ordered[i]]);
    }
  }

  return {
    rawNotes: clipPromptText_(raw, 1800),
    directiveLines: directiveLines
  };
}

function normalizeNoteDirectiveKey_(key) {
  var k = safeTrim_(key).toLowerCase();
  k = k.replace(/[^a-z0-9]+/g, "_");
  k = k.replace(/^_+|_+$/g, "");

  var alias = {
    niche_angle: "angle",
    messaging_angle: "angle",
    message_angle: "angle",
    target_audience: "audience",
    target: "audience",
    persona: "audience",
    icp: "audience",
    painpoint: "pain_points",
    painpoints: "pain_points",
    pain_point: "pain_points",
    problems: "pain_points",
    problem: "pain_points",
    goal: "outcomes",
    goals: "outcomes",
    objective: "outcomes",
    objectives: "outcomes",
    offering: "offer",
    offer_detail: "offer",
    call_to_action: "cta",
    cta_line: "cta",
    style: "tone",
    voice: "tone",
    must_haves: "must_include",
    dont_say: "avoid",
    do_not_say: "avoid",
    avoid_words: "avoid",
    subject: "subject_style",
    subject_hook: "subject_style",
    framework: "framework_focus",
    plan_focus: "framework_focus",
    personalise: "personalization",
    personalisation: "personalization"
  };

  if (alias[k]) {
    k = alias[k];
  }

  var allowed = {
    campaign: true,
    angle: true,
    audience: true,
    pain_points: true,
    outcomes: true,
    services: true,
    offer: true,
    cta: true,
    tone: true,
    must_include: true,
    avoid: true,
    constraints: true,
    subject_style: true,
    framework_focus: true,
    personalization: true,
    proof: true
  };

  if (!allowed[k]) return "";
  return k;
}

function clipPromptText_(text, maxLen) {
  var s = safeTrim_(text);
  if (s.length <= maxLen) return s;
  return safeTrim_(s.substring(0, maxLen));
}

// ─── Shared AI call functions (used by both 04_AI and 07_Followups) ────────

function callClaude_(prompt, maxTokens, cfg) {
  var payload = {
    model: APP.DEFAULTS.CLAUDE_MODEL,
    max_tokens: maxTokens || 1024,
    messages: [{ role: "user", content: prompt }]
  };

  var response = UrlFetchApp.fetch("https://api.anthropic.com/v1/messages", {
    method: "post",
    contentType: "application/json",
    headers: {
      "x-api-key": cfg.anthropicApiKey,
      "anthropic-version": "2023-06-01"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  var statusCode = response.getResponseCode();
  var body = response.getContentText();

  if (statusCode >= 300) {
    var errText = body;
    try {
      var errJson = JSON.parse(body);
      if (errJson && errJson.error && errJson.error.message) errText = errJson.error.message;
    } catch (e) {}
    throw new Error("Claude error " + statusCode + ": " + String(errText).substring(0, 500));
  }

  var json = JSON.parse(body);
  var text = "";
  if (json && json.content && json.content.length > 0) {
    text = json.content[0].text || "";
  }
  if (!text) throw new Error("Could not read output text from Claude response.");
  return extractJsonObject_(text);
}

function callOpenAI_(prompt, maxTokens, cfg) {
  var payload = {
    model: APP.DEFAULTS.MODEL,
    input: prompt,
    max_output_tokens: maxTokens || 800
  };

  var response = UrlFetchApp.fetch("https://api.openai.com/v1/responses", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + cfg.openAiKey },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  var statusCode = response.getResponseCode();
  var body = response.getContentText();

  if (statusCode >= 300) {
    var errText = body;
    try {
      var errJson = JSON.parse(body);
      if (errJson && errJson.error && errJson.error.message) errText = errJson.error.message;
    } catch (e) {}
    throw new Error("OpenAI error " + statusCode + ": " + String(errText).substring(0, 500));
  }

  var json = JSON.parse(body);
  var text = extractOutputText_(json);
  return extractJsonObject_(text);
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
      if (!item || !item.content || !item.content.length) continue;

      for (j = 0; j < item.content.length; j++) {
        var c = item.content[j];
        if (!c) continue;

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

  if (parts.length > 0) return parts.join("\n");

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

function enforceEmailSignature_(emailBody, cfg) {
  var body = normalizeBodyParagraphs_(emailBody);
  var signature = buildPlainSignature_(cfg);
  var calendlyLink = cfg.calendlyLink;

  body = body
    .replace(/\[Your Name\]/gi, "")
    .replace(/\[Your Title\]/gi, "")
    .replace(/\[Company Name\]/gi, "")
    .replace(/Senior Digital Marketing Strategist/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\s+|\s+$/g, "");

  body = stripTrailingSignoffAndSignature_(body);
  body = stripCalendlyNoise_(body, calendlyLink);
  body = removeDanglingCtaFragments_(body);

  if (calendlyLink) {
    var ctaLine = APP.DEFAULTS.CALENDLY_CTA_PREFIX + calendlyLink;
    if (body.indexOf(calendlyLink) === -1) {
      if (body) {
        body = body + "\n\n" + ctaLine;
      } else {
        body = ctaLine;
      }
    }
  }

  if (!body) return signature;
  return body + "\n\n" + signature;
}

function buildPlainSignature_(cfg) {
  var lines = [
    "Best regards,",
    "Raj Singh",
    "Founder & CEO, GoDigitalPro",
    "raj@godigitalpro.in"
  ];

  if (cfg.brandWebsite) {
    lines.push("Website: " + cfg.brandWebsite);
  }
  if (cfg.brandLinkedin) {
    lines.push("LinkedIn: " + cfg.brandLinkedin);
  }

  return lines.join("\n");
}

function normalizeBodyParagraphs_(text) {
  var raw = String(text || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var lines = raw.split("\n");
  var paragraphs = [];
  var current = [];
  var i;

  for (i = 0; i < lines.length; i++) {
    var line = safeTrim_(lines[i]);
    if (!line) {
      if (current.length) {
        paragraphs.push(current.join(" "));
        current = [];
      }
      continue;
    }
    current.push(line);
  }

  if (current.length) {
    paragraphs.push(current.join(" "));
  }

  return safeTrim_(paragraphs.join("\n\n"));
}

function sanitizeTextForDelivery_(text) {
  var s = String(text || "");

  // Remove replacement-char artifacts that appear as black-diamond boxes.
  s = s.replace(/\uFFFD+/g, "");

  // Remove emoji/pictographic surrogate pairs for stable rendering.
  s = s.replace(/[\uD83C-\uDBFF][\uDC00-\uDFFF]/g, "");

  // Remove symbol emoji block that can render inconsistently.
  s = s.replace(/[\u2600-\u27BF]/g, "");

  s = s.replace(/\s{2,}/g, " ");
  s = s.replace(/\n{3,}/g, "\n\n");
  return safeTrim_(s);
}

function enforceGreeting_(emailBody, lead) {
  var body = normalizeBodyParagraphs_(emailBody);
  var greetingName = pickGreetingName_(lead.contact_name);
  var greeting = greetingName ? ("Hi " + greetingName + ",") : "Hi,";

  if (!body) {
    return greeting;
  }

  var paragraphs = body.split(/\n\s*\n/);
  if (paragraphs.length === 0) {
    return greeting;
  }

  var first = safeTrim_(paragraphs[0]);
  if (/^(hi|hello|hey|dear)\b/i.test(first)) {
    var remainder = first.replace(/^(hi|hello|hey|dear)\b[^,]{0,60},?\s*/i, "");
    remainder = safeTrim_(remainder);
    paragraphs[0] = greeting;
    if (remainder) {
      paragraphs.splice(1, 0, remainder);
    }
  } else {
    paragraphs.unshift(greeting);
  }

  return normalizeBodyParagraphs_(paragraphs.join("\n\n"));
}

function pickGreetingName_(rawName) {
  var full = safeTrim_(rawName).replace(/\s+/g, " ");
  if (!full || full.length < 2 || full.length > 60) return "";
  if (/[@0-9]/.test(full)) return "";
  if (/(school|college|institute|university|department|academy|campus|trust|office|retired|finance)/i.test(full)) {
    return "";
  }

  var skip = {
    mr: true,
    mrs: true,
    ms: true,
    dr: true,
    sir: true,
    madam: true,
    prof: true,
    professor: true,
    team: true,
    admin: true,
    principal: true,
    no: true,
    na: true,
    none: true,
    x: true
  };

  var tokens = full.split(/\s+/);
  var i;

  for (i = 0; i < tokens.length; i++) {
    var token = safeTrim_(tokens[i]).replace(/[^A-Za-z\u00C0-\u024F\u0900-\u097F'.-]/g, "");
    if (!token) continue;

    var canonical = token.toLowerCase().replace(/\./g, "");
    if (skip[canonical]) continue;
    if (token.length < 2 || token.length > 24) continue;
    if (/^(school|college|institute|department|academy|trust)$/i.test(canonical)) continue;

    if (/^[A-Z]+$/.test(token) && token.length > 1) {
      token = token.charAt(0) + token.substring(1).toLowerCase();
    } else if (/^[a-z]+$/.test(token)) {
      token = token.charAt(0).toUpperCase() + token.substring(1);
    }

    return token;
  }

  return "";
}

function enforceSubjectQuality_(subject, lead) {
  var s = safeTrim_(subject);
  var contactName = safeTrim_(lead.contact_name);
  var notesBlob = (
    safeTrim_(lead.notes) + " " +
    safeTrim_(lead.niche) + " " +
    safeTrim_(lead.website)
  ).toLowerCase();

  s = s
    .replace(/^['"]+|['"]+$/g, "")
    .replace(/\s+/g, " ")
    .replace(/^\s*(hi|hello|hey)\s+/i, "")
    .replace(/\b(raj singh|raj)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^\s+|\s+$/g, "");

  if (contactName) {
    var nameParts = contactName.split(/\s+/);
    var i;
    for (i = 0; i < nameParts.length; i++) {
      if (nameParts[i].length >= 3) {
        var escaped = nameParts[i].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        var re = new RegExp("\\b" + escaped + "\\b", "ig");
        s = s.replace(re, "");
      }
    }
    s = s.replace(/\s{2,}/g, " ").replace(/^\s+|\s+$/g, "");
  }

  if (!s || s.length < 8) {
    s = buildFallbackSubject_(notesBlob);
  }

  if (!/(speed|conversion|lead|pipeline|growth|client|revenue|audit|seo|funnel|performance|bookings)/i.test(s)) {
    s = buildFallbackSubject_(notesBlob);
  }

  s = trimSubjectToMax_(s, 60);
  return s;
}

function buildFallbackSubject_(notesBlob) {
  var subject = "3 quick wins to increase qualified client leads";

  if (
    notesBlob.indexOf("admission") !== -1 ||
    notesBlob.indexOf("enrollment") !== -1 ||
    notesBlob.indexOf("enrolment") !== -1 ||
    notesBlob.indexOf("student inquiry") !== -1 ||
    notesBlob.indexOf("parent inquiry") !== -1 ||
    notesBlob.indexOf("school") !== -1
  ) {
    subject = "Admissions inquiry gaps that may be costing enrollments";
  } else if (notesBlob.indexOf("counseling") !== -1 || notesBlob.indexOf("counselling") !== -1) {
    subject = "Counseling inquiry gaps hurting student enrollments";
  } else if (notesBlob.indexOf("speed") !== -1 || notesBlob.indexOf("core web") !== -1) {
    subject = "Site speed gaps that may be costing you leads";
  } else if (notesBlob.indexOf("seo") !== -1) {
    subject = "SEO gaps reducing qualified inbound leads";
  } else if (notesBlob.indexOf("conversion") !== -1 || notesBlob.indexOf("landing") !== -1) {
    subject = "Conversion leaks on your site and quick fixes";
  } else if (notesBlob.indexOf("agency") !== -1) {
    subject = "How to grow your agency's qualified lead pipeline";
  }

  return trimSubjectToMax_(subject, 60);
}

function trimSubjectToMax_(subject, maxLen) {
  var s = safeTrim_(subject);
  if (s.length <= maxLen) return s;
  s = s.substring(0, maxLen);
  s = s.replace(/\s+\S*$/, "");
  return safeTrim_(s);
}

function buildEmailHtml_(plainBody, cfg) {
  var sections = extractEmailSections_(plainBody, cfg);
  var paragraphs = buildReadableParagraphs_(sections.mainText);
  var calendlyLink = cfg.calendlyLink;
  var html = [];
  var i;

  // Full Gmail-compatible table layout
  html.push('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>');
  html.push('<body style="margin:0;padding:0;background:#f1f5f9;">');

  // Outer wrapper
  html.push('<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;">');
  html.push('<tr><td align="center" style="padding:24px 12px;">');

  // Card
  html.push('<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;">');

  // ── Header ──
  html.push('<tr><td style="background:#0f172a;padding:22px 32px;border-radius:12px 12px 0 0;">');
  html.push('<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>');
  html.push('<td><span style="font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:700;color:#ECEC75;letter-spacing:-0.3px;">GoDigitalPro</span><br>');
  html.push('<span style="font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;">AI-Powered Marketing</span></td>');
  html.push('</tr></table>');
  html.push('</td></tr>');

  // ── Body ──
  html.push('<tr><td style="padding:32px 32px 20px 32px;">');

  for (i = 0; i < paragraphs.length; i++) {
    var isGreeting = (i === 0 && /^(hi|hello|hey)\b/i.test(paragraphs[i]) && paragraphs[i].length <= 35);
    if (isGreeting) {
      // Greeting on its own line, clear break before body starts
      html.push('<p style="margin:0 0 2px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.75;color:#1e293b;">' + formatParagraphHtml_(paragraphs[i]) + '</p>');
      html.push('<p style="margin:0 0 18px 0;font-family:Arial,Helvetica,sans-serif;font-size:1px;line-height:1;color:transparent;">&nbsp;</p>');
    } else {
      html.push('<p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.75;color:#1e293b;">' + formatParagraphHtml_(paragraphs[i]) + '</p>');
    }
  }

  if (calendlyLink) {
    html.push(buildCalendlyHtml_(calendlyLink));
  }

  html.push('</td></tr>');

  // ── Signature ──
  html.push('<tr><td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 32px;border-radius:0 0 12px 12px;">');
  html.push(buildSignatureHtml_(cfg));
  html.push('</td></tr>');

  html.push('</table>'); // end card
  html.push('</td></tr></table>'); // end outer
  html.push('</body></html>');

  return html.join('');
}

function extractEmailSections_(plainBody, cfg) {
  var calendlyLink = cfg.calendlyLink;
  var normalized = normalizeBodyParagraphs_(plainBody);
  var lower = normalized.toLowerCase();
  var sigIndex = lower.indexOf("best regards");
  var mainText = normalized;

  if (sigIndex >= 0) {
    mainText = safeTrim_(normalized.substring(0, sigIndex));
  }

  mainText = stripCalendlyNoise_(mainText, calendlyLink);

  return {
    mainText: mainText
  };
}

function stripCalendlyNoise_(text, calendlyLink) {
  var out = String(text || "");
  var cleanedPrefix = safeTrim_(APP.DEFAULTS.CALENDLY_CTA_PREFIX);

  if (cleanedPrefix) {
    var prefixRe = new RegExp(escapeRegExp_(cleanedPrefix), "ig");
    out = out.replace(prefixRe, "");
  }

  if (calendlyLink) {
    var linkRe = new RegExp(escapeRegExp_(calendlyLink), "ig");
    out = out.replace(linkRe, "");
  }

  // Remove generic booking sentences; dedicated CTA block will be added separately.
  out = out.replace(/(?:^|\s)(book|schedule)[^.?!]*(audit|call|slot|time)[^.?!]*[.?!]/ig, " ");
  out = out.replace(/(?:^|\s)(let me know)[^.?!]*(time|call|slot)[^.?!]*[.?!]/ig, " ");
  out = out.replace(/(?:^|\s)(please\s+)?(pick|choose|select)[^.?!]*(time|slot)[^.?!]*(link|calendly)[^.?!]*[.?!]/ig, " ");
  out = out.replace(/(?:^|\s)(please\s+)?(pick|choose|select)[^.?!]*(link|calendly)[^.?!]*[.?!]/ig, " ");
  out = out.replace(/(?:^|\s)(you can (?:easily|simply))[^.?!]*[.?!]/ig, " ");
  out = out.replace(/(?:^|\s)(feel free to)[^.?!]*(book|schedule|pick|choose|select)[^.?!]*[.?!]/ig, " ");
  out = out.replace(/\bPlease\b\s*$/gim, "");

  out = out.replace(/\s{2,}/g, " ");
  out = out.replace(/\n{3,}/g, "\n\n");
  return safeTrim_(out);
}

function stripTrailingSignoffAndSignature_(text) {
  var body = normalizeBodyParagraphs_(text);

  body = body.replace(
    /(?:\n\s*\n|\n|[.!?]\s+)(best regards|kind regards|warm regards|regards|sincerely|thanks|thank you),?[\s\S]*$/i,
    ""
  );

  return normalizeBodyParagraphs_(body);
}

function removeDanglingCtaFragments_(text) {
  var paragraphs = String(text || "").split(/\n\s*\n/);
  var cleaned = [];
  var i;

  for (i = 0; i < paragraphs.length; i++) {
    var p = safeTrim_(paragraphs[i]);
    if (!p) continue;

    var probe = p.replace(/[.!:,;\s]+$/g, "").toLowerCase();
    if (
      p.length <= 60 &&
      (
        probe === "you can easily" ||
        probe === "you can simply" ||
        probe === "if useful" ||
        probe === "feel free to" ||
        probe === "you can" ||
        probe === "simply" ||
        probe === "please"
      )
    ) {
      continue;
    }

    cleaned.push(p);
  }

  return normalizeBodyParagraphs_(cleaned.join("\n\n"));
}

function buildReadableParagraphs_(text) {
  var rawParagraphs = String(text || "").split(/\n\s*\n/);
  var finalParagraphs = [];
  var i;
  var j;

  for (i = 0; i < rawParagraphs.length; i++) {
    var p = safeTrim_(rawParagraphs[i]);
    if (!p) continue;

    var split = splitParagraphForReadability_(p);
    for (j = 0; j < split.length; j++) {
      if (split[j]) finalParagraphs.push(split[j]);
    }
  }

  return finalParagraphs;
}

function splitParagraphForReadability_(paragraph) {
  var p = safeTrim_(paragraph);
  if (!p) return [];

  if (/^(hello|hi|hey)\b/i.test(p) && p.length <= 30) {
    return [p];
  }

  if (p.length <= 170) {
    return [p];
  }

  var sentences = p.match(/[^.!?]+[.!?]?/g);
  if (!sentences || sentences.length === 0) {
    return [p];
  }

  var chunks = [];
  var current = "";
  var sentenceCount = 0;
  var i;

  for (i = 0; i < sentences.length; i++) {
    var s = safeTrim_(sentences[i]);
    if (!s) continue;

    if (!current) {
      current = s;
      sentenceCount = 1;
      continue;
    }

    if (current.length + s.length + 1 <= 185 && sentenceCount < 2) {
      current += " " + s;
      sentenceCount++;
    } else {
      chunks.push(current);
      current = s;
      sentenceCount = 1;
    }
  }

  if (current) chunks.push(current);
  return chunks;
}

function formatParagraphHtml_(paragraphText) {
  var text = escapeHtml_(paragraphText);
  return emphasizeKeywordsHtml_(text);
}

function emphasizeKeywordsHtml_(escapedText) {
  var out = escapedText;
  var patterns = [
    /qualified leads/gi,
    /lead generation/gi,
    /sales pipeline/gi,
    /site speed/gi,
    /conversion[s]?/gi,
    /15 minute audit call/gi
  ];
  var i;

  for (i = 0; i < patterns.length; i++) {
    out = out.replace(patterns[i], function (m) {
      return "<strong>" + m + "</strong>";
    });
  }

  return out;
}

function buildCalendlyHtml_(calendlyLink) {
  var url = escapeHtmlAttr_(calendlyLink);
  var html = [];

  html.push('<table cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 4px 0;">');
  html.push('<tr><td>');
  html.push('<p style="margin:0 0 14px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#64748b;line-height:1.5;">If useful, happy to share specific quick wins for your funnel:</p>');
  html.push(
    '<a href="' + url + '" target="_blank" ' +
    'style="display:inline-block;background:#ECEC75;color:#0f172a;padding:13px 26px;' +
    'border-radius:7px;text-decoration:none;font-family:Arial,Helvetica,sans-serif;' +
    'font-size:14px;font-weight:700;letter-spacing:0.2px;">Book a Free 20-Min Audit &rarr;</a>'
  );
  html.push('</td></tr></table>');

  return html.join('');
}

function buildSignatureHtml_(cfg) {
  var html = [];

  html.push('<p style="margin:0 0 14px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#94a3b8;">Best regards,</p>');

  // Name + logo row
  html.push('<table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">');
  html.push('<tr>');

  if (cfg.brandLogoUrl) {
    html.push('<td style="padding-right:14px;vertical-align:middle;">');
    html.push(
      '<img src="' + escapeHtmlAttr_(cfg.brandLogoUrl) + '" alt="GoDigitalPro" ' +
      'width="48" height="48" style="display:block;border-radius:8px;border:2px solid #ECEC75;">'
    );
    html.push('</td>');
  }

  html.push('<td style="vertical-align:middle;">');
  html.push('<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#0f172a;">Raj Singh</p>');
  html.push('<p style="margin:3px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;">Founder &amp; CEO, GoDigitalPro</p>');
  html.push('<p style="margin:4px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#94a3b8;">raj@godigitalpro.in</p>');
  html.push('</td>');
  html.push('</tr>');
  html.push('</table>');

  // Link buttons — dark bg, yellow text
  if (cfg.brandWebsite || cfg.brandLinkedin) {
    html.push('<table cellpadding="0" cellspacing="0" border="0"><tr>');

    if (cfg.brandWebsite) {
      html.push('<td style="padding-right:8px;">');
      html.push(
        '<a href="' + escapeHtmlAttr_(cfg.brandWebsite) + '" target="_blank" ' +
        'style="display:inline-block;padding:7px 16px;background:#0f172a;color:#ECEC75;' +
        'text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;border-radius:6px;">godigitalpro.in</a>'
      );
      html.push('</td>');
    }

    if (cfg.brandLinkedin) {
      html.push('<td>');
      html.push(
        '<a href="' + escapeHtmlAttr_(cfg.brandLinkedin) + '" target="_blank" ' +
        'style="display:inline-block;padding:7px 16px;background:#0f172a;color:#ECEC75;' +
        'text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;border-radius:6px;">LinkedIn</a>'
      );
      html.push('</td>');
    }

    html.push('</tr></table>');
  }

  return html.join('');
}

function escapeHtml_(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtmlAttr_(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeRegExp_(text) {
  return String(text || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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
        if (text) return text;
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
