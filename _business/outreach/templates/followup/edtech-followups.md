# EdTech Follow-up Sequence — F1 / F2 / F3
> The `07_Followups.gs` script sends these automatically based on `next_followup_date`.
> These are also written out manually below in case you want to review/edit before sending.

**Timing:**
- F1: 3 days after initial email sent
- F2: 4 days after F1
- F3: 5 days after F2
- After F3: status → CLOSED_NO_REPLY (no more contact unless they reach out)

---

## Follow-up 1 — Quick Check-in + One Insight
*Tone: brief, curious, adds tiny value*
*Goal: get a reply — even a "not interested" is useful*

**Subject options:**
- `Quick note on [Company]'s inquiry funnel`
- `One thing on your admissions setup`
- `Following up — quick question`

**Template:**
```
Hi [Name],

Sent you a note a few days ago about [Company]'s admission funnel — wanted to check if it landed.

One quick observation: most EdTech brands we audit are losing the most inquiries in the 0–30 minute window after a form fill. If follow-up speed is something you're working on, happy to share a quick fix that tends to move the needle fast.

Let me know if a 20-minute call makes sense.
```

**Notes directive (for AI generation):**
```
followup: 1 | tone: brief and curious | content: one specific insight about inquiry response time — most edtech brands lose highest intent leads in first 30 minutes after form fill — offer to share quick fix | cta: soft — let me know if a call makes sense | max_words: 80
```

---

## Follow-up 2 — Practical Tip (Standalone Value)
*Tone: genuinely helpful, no pressure*
*Goal: be remembered as someone useful, not just a salesperson*

**Subject options:**
- `One quick win for [Company]'s enrollment rate`
- `EdTech landing page tip that moves the needle`
- `Practical fix most EdTech brands miss`

**Template:**
```
Hi [Name],

One practical thing — adding a "Why this matters for your career" section on your course landing page, specific to the student's goal (job switch, salary hike, skill gap), typically lifts form completions by 15–25% without touching ad spend.

Most EdTech landing pages sell the course. The ones that convert better sell the outcome.

Worth 20 minutes if you want to look at [Company]'s pages specifically.
```

**Notes directive:**
```
followup: 2 | tone: value-adding, practical | content: specific landing page tip — outcome-focused copy outperforms course-feature copy, adding student-goal section lifts form fills 15-25% | standalone useful even if no reply | cta: optional — worth 20 minutes if interested | max_words: 90
```

---

## Follow-up 3 — Soft Close
*Tone: warm, zero pressure, door left open*
*Goal: clean close — either they engage or you move on with no bad impression*

**Subject options:**
- `Last note from my end`
- `Leaving this here, [Company]`
- `Closing the loop`

**Template:**
```
Hi [Name],

Last note from my end. If timing isn't right or you're heads down on something else — completely fine.

If improving the admission funnel or reducing CPL ever becomes a priority, happy to pick up the conversation then. Good luck with [Company].
```

**Notes directive:**
```
followup: 3 | tone: warm, zero pressure, final | content: closing the loop gracefully — if not right time completely fine, door open if priorities change | no hard cta | max_words: 60
```

---

## Tracking
After each follow-up sequence is complete, update the CRM:
- `reply_status`: REPLIED / NOT_INTERESTED / CLOSED_NO_REPLY
- `next_followup_date`: blank (closed)
- Note any response context in `notes` field for future reference
