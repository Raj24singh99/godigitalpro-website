# Next Actions
> Claude updates this every session. Work top to bottom. Cross off when done.

**Updated:** 2026-04-24
**Current focus:** EdTech outreach — build the system, source leads, launch

---

## THIS WEEK — Apr 24–30 (System Setup Sprint)

### 1. Get Apps Script Running (2–3 hours, do first)
- [ ] Create a new Google Sheet named `GoDigitalPro CRM`
- [ ] Add a tab called `Leads` with headers from `outreach/apps-script/00_Constants.gs` (REQUIRED_HEADERS)
- [ ] Open Extensions → Apps Script in the sheet
- [ ] Paste all 7 files from `_business/outreach/apps-script/` (00 through 07)
- [ ] Add Script Properties: OPENAI_API_KEY (or ANTHROPIC_API_KEY if using Claude), SENDER_EMAIL, SENDER_NAME, SEND_MODE=DRAFT, DAILY_SEND_LIMIT=20, MAX_LEADS_PER_RUN=5
- [ ] Add 1 test lead row, run `testSetup` + `testConfig` + `processNextLead`
- [ ] Check draft in Gmail — verify email looks good

### 2. Source First 20 EdTech Leads (1–2 hours)
Sources to use:
- LinkedIn: Search `EdTech founder` + filter India + 11–200 employees
- LinkedIn: Search `EdTech marketing head` + India
- Google: `"edtech startup india" site:linkedin.com`
- Crunchbase: EdTech India, Series A and below
- YourStory / Inc42: Recent EdTech India profiles

Fields to collect per lead:
`company_name, website, contact_name (founder/CMO), email, niche=edtech, location, notes`

For notes use this campaign string (copy-paste into notes column):
```
campaign: edtech_lead_gen | angle: improve admission funnel conversion and reduce CPL | audience: edtech founder or CMO | pain_points: high CPL, low quality leads, poor admission funnel conversion, ad spend waste | outcomes: more qualified student inquiries, better admission rate, lower CAC | services: Google Ads + Meta Ads + SEO + landing page CRO + lead nurturing | offer: free 20-minute admission growth audit | cta: book a 20-minute admission growth audit | tone: consultative and founder-to-founder | subject_style: specific pain point + outcome, no first-name | proof: 250 crore ad spend managed, 1000 crore revenue delivered
```

### 3. LinkedIn Setup (30 mins)
- [ ] Update LinkedIn headline: `Founder @ GoDigitalPro | AI-Powered Marketing for EdTech Brands | 250Cr+ Ad Spend Managed`
- [ ] Update About section — position as EdTech growth expert
- [ ] Start sending 10 connection requests/day to EdTech founders (template in `outreach/templates/linkedin/edtech-linkedin.md`)
- [ ] Follow/monitor: #edtech #edtechindia #admissions #edtechmarketing

---

## NEXT WEEK — May 1–7 (Launch Outreach)
- Scale to 20 emails/day (switch Apps Script to SEND mode after DRAFT review)
- Send 10 LinkedIn connection requests/day + follow up with DMs to accepted connections
- Begin follow-up sequences for Week 1 cold email (F1 runs automatically)
- First discovery call booked → prep using `pipeline/discovery-calls/` template

---

## WEEK 3 — May 8–14 (Optimize + Accelerate)
- Review reply rate — if < 3%, test new subject line angle
- Add B2B niche leads to pipeline
- Prepare first proposal if any warm conversation progresses

---

## Blocked / Waiting
_(nothing blocked yet — pure execution)_

---

## Recently Completed
_(log completed actions here with dates)_
