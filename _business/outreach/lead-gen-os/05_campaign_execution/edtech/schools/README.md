# Schools Outreach Batch Setup

## Source Snapshot
- Raw file copied from Downloads:
  - `source_raw/schools_source_2026-03-18.csv`
- Parsed rows: `39`
- Valid unique emails: `39`

## Ready-to-Import Files
- First batch (recommended now): `imports/schools_batch_01_35.csv`
- Remaining leads: `imports/schools_batch_02_remaining.csv`
- Full set: `imports/schools_all_39.csv`

## Import Steps (Google Sheet `Leads`)
1. Open `imports/schools_batch_01_35.csv`.
2. Copy all rows (including header).
3. In your `Leads` sheet, paste starting at cell `A1` only if the sheet is empty.
4. If your `Leads` sheet already has headers and older data, paste only data rows starting at the first empty row in column `A`.
5. Confirm `status` column is `NEW` for imported leads.

## Personalization Behavior (now implemented)
- If `contact_name` is usable: email starts with `Hi <FirstName>,`
- If name is missing/low quality: email starts with `Hi,`

## Notes
- `website` is left blank for these school leads; the workflow now supports this.
- Phone number is preserved inside `notes` for future WhatsApp/call workflows.
- You can append campaign directives directly in `notes`, for example:
  - `angle: increase admissions with better parent inquiry flow | pain_points: low quality inquiries, weak counseling conversion | outcomes: more qualified parent inquiries and admissions calls | cta: invite for a 15-minute admissions growth audit`
