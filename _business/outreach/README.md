# GoDigitalPro Outreach Automation (Google Apps Script)

This project contains a modular Apps Script setup for:
- reading leads from a Google Sheet (`Leads`)
- generating personalized analysis + outreach emails via OpenAI
- creating Gmail drafts (or sending, based on mode)
- batch processing + hourly trigger
- logging outcomes in `ActivityLog`

## Folder

- `apps-script/00_Constants.gs`
- `apps-script/01_Utils.gs`
- `apps-script/02_Config.gs`
- `apps-script/03_CRM.gs`
- `apps-script/04_AI.gs`
- `apps-script/05_Workflow.gs`
- `apps-script/06_MenuAndTriggers.gs`

## How To Paste Into Google Apps Script

1. Open your Sheet -> `Extensions` -> `Apps Script`.
2. Delete old broken code file(s), especially old `Code.gs`.
3. Create new files in Apps Script with these exact names:
   - `00_Constants.gs`
   - `01_Utils.gs`
   - `02_Config.gs`
   - `03_CRM.gs`
   - `04_AI.gs`
   - `05_Workflow.gs`
   - `06_MenuAndTriggers.gs`
4. Copy-paste contents from matching files in this folder.
5. Save project.

## Required Script Properties

In Apps Script: `Project Settings` -> `Script properties`, add:

- `OPENAI_API_KEY` = your API key
- `SENDER_EMAIL` = `raj@godigitalpro.in`
- `SENDER_NAME` = `Raj | GoDigitalPro`
- `SEND_MODE` = `DRAFT` (recommended initially) or `SEND`
- `DAILY_SEND_LIMIT` = `10` (or your safe limit)
- `MAX_LEADS_PER_RUN` = `5`
- `CALENDLY_LINK` = `https://calendly.com/raj-godigitalpro/30min` (recommended)
- `BRAND_WEBSITE` = `https://godigitalpro.in/`
- `BRAND_LINKEDIN` = `https://www.linkedin.com/company/godigitalpro/`
- `BRAND_LOGO_URL` = public image URL for logo (optional)

## Leads Sheet Required Headers

Row 1 must contain these columns:

`lead_id,company_name,website,contact_name,email,niche,location,notes,status,analysis_summary,framework_90_day,email_subject,email_body,draft_link,sent_at,reply_status,next_followup_date,error_log`

If all headers are accidentally pasted into one cell, script auto-fixes that layout.

## Notes-Driven Prompt Control (No Code Change Needed)

Use `notes` to control campaign strategy per lead/batch with `key: value` pairs.

Supported keys:
- `campaign`
- `angle`
- `audience`
- `pain_points`
- `outcomes`
- `services`
- `offer`
- `cta`
- `tone`
- `must_include`
- `avoid`
- `constraints`
- `subject_style`
- `framework_focus`
- `personalization`
- `proof`

You can separate items using `|`, `;`, or new lines.

Example for schools:
- `campaign: school_lead_gen | angle: increase admissions with better parent inquiry flow | audience: school principal and admin team | pain_points: low quality inquiries, weak counseling conversion | outcomes: more qualified parent inquiries and admissions calls | services: SEO + Google Ads + landing page CRO + CRM follow-up | cta: invite for a 15-minute admissions growth audit | tone: consultative and practical | subject_style: pain-point + outcome, no first-name mention`

## Test Sequence

1. Add one lead row with:
   - `company_name`
   - `website` (optional)
   - `email`
   - `status = NEW`
2. Run `testSetup`.
3. Run `testConfig`.
4. Run `processNextLead`.
5. Check output fields + `draft_link` in the lead row.

## Batch + Scheduler

- `processBatchNow`: processes up to `MAX_LEADS_PER_RUN`.
- `installHourlyTrigger`: runs scheduled processing every hour.
- `removeOutreachTriggers`: removes existing outreach triggers.

## Menu Actions In Sheet

After refresh, use:
- `GoDigitalPro -> Test setup`
- `GoDigitalPro -> Test config`
- `GoDigitalPro -> Process next lead`
- `GoDigitalPro -> Process batch now`
- `GoDigitalPro -> Install hourly trigger`
- `GoDigitalPro -> Remove outreach triggers`

## Status Lifecycle

- `NEW` -> `PROCESSING` -> `DRAFTED` (if `SEND_MODE=DRAFT`)
- `NEW` -> `PROCESSING` -> `SENT` (if `SEND_MODE=SEND`)
- any failure -> `ERROR` + message in `error_log`

## Calendly Behavior

- If `CALENDLY_LINK` is set, outreach email body will include it once in CTA.
- The link is enforced in post-processing, so it remains present even if model omits it.
- If property is blank, script falls back to default `https://calendly.com/raj-godigitalpro/30min`.
- Current scope: initial outreach email process (`processNextLead`, `processBatchNow`, scheduler).

## Subject Behavior

- Subject is enforced to stay hook/pain-point oriented.
- Recipient first-name mentions (for example, `Raj`) are stripped.
- If model returns a weak subject, a pain-point fallback subject is auto-generated.

## Email Formatting Behavior

- Body text is normalized into clean paragraphs (no random mid-sentence line breaks).
- Outgoing emails include `htmlBody` for improved readability in inbox.
- Greeting is auto-normalized:
  - valid name -> `Hi <FirstName>,`
  - missing/low-quality name -> `Hi,`
- Important phrases are emphasized in bold (light emphasis only).
- Calendly appears as a blue labeled link (`Book a 30-minute strategy call`) instead of raw URL text.
- Signature includes Website + LinkedIn links.
- Signature can render a small logo next to name when `BRAND_LOGO_URL` is set.

## School Leads Import (Current Batch)

- Prepared files:
  - `lead-gen-os/05_campaign_execution/edtech/schools/imports/schools_batch_01_35.csv`
  - `lead-gen-os/05_campaign_execution/edtech/schools/imports/schools_batch_02_remaining.csv`
  - `lead-gen-os/05_campaign_execution/edtech/schools/imports/schools_all_39.csv`
- Source snapshot:
  - `lead-gen-os/05_campaign_execution/edtech/schools/source_raw/schools_source_2026-03-18.csv`
- These school rows intentionally keep `website` blank and store phone in `notes`.

## Logging

Automation activity is appended into `ActivityLog` with:
- timestamp
- run type (`manual_single`, `manual_batch`, `scheduled`)
- row
- lead id
- company
- email
- status
- message

## Scaling Plan (Next Modules)

This structure is ready to add more modules without rewriting core flow:
- `07_Followups.gs` for follow-up sequencing
- `08_ReplySync.gs` for reply tracking
- `09_PPTGenerator.gs` for automated audit decks
- `10_Onboarding.gs` for post-sale onboarding automations

Keep each concern in its own file and avoid large single-file scripts.
