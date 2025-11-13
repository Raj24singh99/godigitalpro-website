import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const COLOR_PALETTES = [
  ["#EEF2FF", "#C7D2FE", "#A5B4FC"],
  ["#ECFDF5", "#A7F3D0", "#6EE7B7"],
  ["#FDF2F8", "#FBCFE8", "#F9A8D4"],
  ["#FFF7ED", "#FED7AA", "#FDBA74"],
  ["#F0F9FF", "#BAE6FD", "#7DD3FC"],
  ["#F5F3FF", "#DDD6FE", "#C4B5FD"],
  ["#FDFDEA", "#FEF08A", "#FACC15"],
  ["#E0F2FE", "#BAE6FD", "#7DD3FC"],
  ["#FFE4E6", "#FECDD3", "#FDA4AF"],
];

const DEFAULT_KEYWORDS = [
  "digital marketing strategy",
  "growth marketing",
  "customer journey optimization",
];

const DEFAULT_AUDIENCE =
  "Marketing, revenue, and product leaders who are accountable for efficient growth.";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "src", "content", "posts");
const COVERS_DIR = path.join(ROOT, "src", "assets", "blogcovers", "generated");
const ONPAGE_COMPONENT = path.join(ROOT, "src", "components", "blog", "OnPageNav.jsx");

await fs.mkdir(COVERS_DIR, { recursive: true });

function titleCaseFromSlug(slug = "") {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function deriveKeywords(meta = {}, pillar, topic) {
  const fromTags = Array.isArray(meta?.tags) ? meta.tags.filter(Boolean) : [];
  const normalized = fromTags.length > 0 ? [...fromTags] : [];
  if (normalized.length < 3) normalized.push(topic.replace(/Playbook/i, "").trim());
  if (normalized.length < 3 && pillar) normalized.push(pillar);
  if (normalized.length < 3 && meta?.subCategory) normalized.push(titleCaseFromSlug(meta.subCategory));
  return Array.from(new Set(normalized))
    .map((kw) => kw.toString().trim())
    .filter(Boolean)
    .slice(0, 3);
}

function derivePlaybookConfig(meta = {}) {
  const topic = meta?.title || "Full-Funnel Marketing Playbook";
  const pillar =
    (Array.isArray(meta?.tags) && meta.tags[0]) ||
    titleCaseFromSlug(meta?.category) ||
    "Integrated Growth Strategy";
  const keywords = deriveKeywords(meta, pillar, topic);
  const subCategoryLabel = titleCaseFromSlug(meta?.subCategory);
  const audience =
    meta?.persona ||
    `${pillar} leaders, growth marketers, and operations partners building durable momentum.`;

  return {
    topic,
    pillar,
    keywords,
    audience,
    useCases: [
      `Rebuild ${subCategoryLabel || keywords[0]} programs with a shared narrative that finance, sales, and marketing can trust.`,
      `Translate ${topic.toLowerCase()} into briefs, QA rituals, and instrumentation so teams move in unison.`,
      `Give executives a real-time view of ${keywords[2]} impact through one connected reporting spine.`,
    ],
    differentiator: `our ability to operationalize ${topic.toLowerCase()} with decision filters, rituals, and instrumentation.`,
    timeframe: "quarterly and annual",
    proofPoint: `${keywords[0]} dashboards powered by GA4, Looker Studio, HubSpot, and customer data warehouses.`,
    heroStat: `Up to 30% lift in ${keywords[0]} efficiency within two quarters.`,
  };
}

function hashString(input = "") {
  return input.split("").reduce((acc, char) => (acc + char.charCodeAt(0) * 31) % 2147483647, 0);
}

function createRandom(seed = 1) {
  let value = seed || 1;
  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

function buildHeroSvg(topic, keywords) {
  const label = topic || "Growth Playbook";
  const palette = COLOR_PALETTES[hashString(label) % COLOR_PALETTES.length];
  const [start, mid, end] = palette;
  const accent = palette[hashString(label + "accent") % palette.length];
  const rand = createRandom(hashString(label + keywords.join("|")));

  const wave = (offset) =>
    `M-200 ${offset} C 200 ${offset - 140}, 500 ${offset + 120}, 1200 ${offset - 60} L1200 630 L-200 630 Z`;

  const nodes = keywords.slice(0, 3).map((keyword, index) => {
    const x = 140 + rand() * 900 + index * 40;
    const y = 140 + rand() * 320;
    const r = 32 + rand() * 22;
    return { keyword, x: Math.min(1060, x), y: Math.min(520, y), r };
  });

  const connectors = nodes
    .map((node, idx) => {
      if (idx === 0) return "";
      const prev = nodes[idx - 1];
      const midX = (prev.x + node.x) / 2;
      const midY = Math.min(prev.y, node.y) - (80 + rand() * 40);
      return `<path d="M${prev.x} ${prev.y} Q ${midX} ${midY} ${node.x} ${node.y}" stroke="rgba(15,23,42,0.35)" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7"/>`;
    })
    .join("");

  const nodeElements = nodes
    .map(
      (node, idx) => `<g opacity="${0.75 + idx * 0.08}">
        <circle cx="${node.x}" cy="${node.y}" r="${node.r + 18}" fill="rgba(255,255,255,0.25)"/>
        <circle cx="${node.x}" cy="${node.y}" r="${node.r}" fill="${accent}" fill-opacity="0.35" stroke="rgba(15,23,42,0.25)" stroke-width="4"/>
        <circle cx="${node.x}" cy="${node.y}" r="${node.r / 3}" fill="#0f172a" fill-opacity="0.8"/>
      </g>`
    )
    .join("");

  const descriptor = keywords.join(" • ").toUpperCase();

  return `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 630' role='img' aria-label='${label} illustration'>
    <defs>
      <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop stop-color='${start}' offset='0%'/>
        <stop stop-color='${mid}' offset='50%'/>
        <stop stop-color='${end}' offset='100%'/>
      </linearGradient>
    </defs>
    <rect width='1200' height='630' rx='48' fill='url(#grad)'/>
    <path d='${wave(180 + rand() * 120)}' fill='rgba(255,255,255,0.45)'/>
    <path d='${wave(360 + rand() * 120)}' fill='rgba(255,255,255,0.25)'/>
    <path d='${wave(520 + rand() * 60)}' fill='rgba(255,255,255,0.18)'/>
    ${connectors}
    ${nodeElements}
    <text x='80' y='560' fill='rgba(15,23,42,0.65)' font-family='"Inter","Segoe UI",sans-serif' font-size='26' font-weight='600'>${label}</text>
    <text x='80' y='600' fill='rgba(15,23,42,0.55)' font-family='"Inter","Segoe UI",sans-serif' font-size='18' letter-spacing='4'>${descriptor}</text>
  </svg>`;
}

function normalizeKeywords(keywords = []) {
  const sanitized = keywords.flat().map((kw) => (kw || "").toString().trim()).filter(Boolean);
  const unique = Array.from(new Set(sanitized));
  const padded = [...unique];
  while (padded.length < 3) padded.push(DEFAULT_KEYWORDS[padded.length] || DEFAULT_KEYWORDS[0]);
  return padded.slice(0, 3);
}

function sectionParagraph(text) {
  return text.replace(/\s+/g, " ").replace(/\s([,.!?;:])/g, "$1").trim();
}

function createSection(context, { title, summary, perspectives, plays }) {
  const { audience, topic, keywords, useCases } = context;
  const [primaryKeyword, secondaryKeyword] = keywords;
  return {
    title,
    summary: sectionParagraph(
      `${summary} This ${title.toLowerCase()} guidance keeps ${primaryKeyword.toLowerCase()} and ${secondaryKeyword.toLowerCase()} tied to tangible commercial outcomes.`
    ),
    perspectives: perspectives.map((perspective) => ({
      title: perspective.title,
      body: sectionParagraph(
        `${perspective.body} That lens gives ${audience.toLowerCase()} the clarity to act without waiting for executive escalations.`
      ),
    })),
    plays: plays.map((play, idx) => ({
      title: play.title,
      detail: sectionParagraph(
        `${play.detail} It directly supports ${useCases[idx % useCases.length].toLowerCase()} so the program compounds instead of stalling.`
      ),
    })),
  };
}

function buildSections(config) {
  const { topic, pillar, keywords, audience, useCases, differentiator, timeframe, proofPoint, heroStat } = config;
  const normalizedKeywords = normalizeKeywords(keywords);
  const [primaryKeyword, secondaryKeyword, supportKeyword] = normalizedKeywords;
  const context = { ...config, keywords: normalizedKeywords };

  const sections = [
    createSection(context, {
      title: `Introduction: ${topic} — Compounding leverage`,
      summary: `${topic} is how we translate ${pillar.toLowerCase()} strategy into repeatable execution. The playbook keeps the ${primaryKeyword} conversation anchored in business outcomes so creative teams, RevOps, and finance rally around the same north star.`,
      perspectives: [
        {
          title: "Leadership mandate",
          body: `Executives want clear proof that ${topic.toLowerCase()} drives efficient growth. We start by mapping ambitions to ${timeframe} horizons, then show how ${heroStat} becomes real once the program is funded and protected.`,
        },
        {
          title: "Operating rhythm",
          body: `We pair quarterly narratives with weekly instrumentation reviews. That cadence keeps the plan alive and exposes blockers fast enough to re-route resources before pipeline stalls.`,
        },
      ],
      plays: [
        { title: "Decisions to lock", detail: `Clarify sponsorship, success metrics, and resourcing envelopes before the first brief is written.` },
        { title: "Signals we monitor", detail: `Track executive attention, budget confidence, and stakeholder sentiment alongside funnel metrics.` },
        { title: "Risks if ignored", detail: `Without a shared POV, teams revert to channel-specific KPIs and the ${primaryKeyword} story fragments within weeks.` },
      ],
    }),
    createSection(context, {
      title: "Searcher intent and focus keywords",
      summary: `Winning the intent clusters around ${keywords.join(", ")} demands clarity on user questions, SERP layouts, and competitors' blind spots.`,
      perspectives: [
        {
          title: "Intent mapping",
          body: `We document the diagnostic questions tied to ${primaryKeyword}, the evaluation checks connected to ${secondaryKeyword}, and the operational prompts that surface under ${supportKeyword}.`,
        },
        {
          title: "SERP intelligence",
          body: `Heatmaps of ads, FAQs, videos, and people-also-ask modules influence how we design hero copy, schema, and supporting assets.`,
        },
      ],
      plays: [
        { title: "Content blocks", detail: `Pair answer-first paragraphs with proof assets, calculators, and CTAs referencing the focus queries.` },
        { title: "Schema & links", detail: `Deploy FAQ, HowTo, and Product schema plus internal links that reinforce topical authority.` },
        { title: "Distribution", detail: `Brief sales, success, and partner teams to reuse the same keyword language in their scripts.` },
      ],
    }),
    createSection(context, {
      title: "Pain points we solve",
      summary: `${audience} shared the same frustrations: disconnected tooling, conflicting KPIs, and generic creative. This section turns those pains into tangible jobs-to-be-done.`,
      perspectives: [
        {
          title: "Field insights",
          body: `Interviews surface statements like “we can't prove ${primaryKeyword} impact” or “no one owns experimentation.” We echo those words so readers feel heard.`,
        },
        {
          title: "Use-case alignment",
          body: `Each narrative ladder backs to scenarios such as ${useCases[0]} and ${useCases[1]}, proving the guidance works beyond theory.`,
        },
      ],
      plays: [
        { title: "Observation", detail: `Document pains verbatim and sort them by effort vs. impact to prioritize roadmap slots.` },
        { title: "JTBD framing", detail: `Translate pains into measurable jobs with clear triggers, owners, and definitions of done.` },
        { title: "Experience proof", detail: `Show how ${useCases[2]} becomes real with screenshots, dashboards, or annotated Looms.` },
      ],
    }),
    createSection(context, {
      title: "Diagnostic framework",
      summary: `Before prescribing tactics we benchmark readiness across data, experience, enablement, and governance. The diagnostic becomes both pre-sales workshop and internal audit.`,
      perspectives: [
        {
          title: "Scoring mechanics",
          body: `We score maturity on a 1–4 scale covering instrumentation, narrative clarity, experimentation hygiene, and enablement support.`,
        },
        {
          title: "Workshop flow",
          body: `Teams can run the audit in 90 minutes: review artifacts, self-score, debate gaps, and document the top three escalations.`,
        },
      ],
      plays: [
        { title: "Inputs", detail: `Gather briefs, dashboards, QA logs, and team charters to keep the discussion evidence-based.` },
        { title: "Facilitation", detail: `Assign a moderator to stop problem-shopping and drive toward quantified next steps.` },
        { title: "Output", detail: `Translate the scorecard into investment asks tied to ${heroStat} or churn reductions.` },
      ],
    }),
    createSection(context, {
      title: "Strategy architecture & decision filters",
      summary: `${topic} competes with dozens of initiatives for budget. We keep execs aligned by separating narrative, decisions, and proof.`,
      perspectives: [
        {
          title: "Narrative arc",
          body: `Open with the market tension, outline the ${pillar.toLowerCase()} bets, and close with how ${primaryKeyword} sharpens positioning.`,
        },
        {
          title: "Decision filter",
          body: `Create rules for what we will pursue, pause, or sunset so teams have cover when saying no.`,
        },
      ],
      plays: [
        { title: "Prioritization", detail: `Score ideas on impact, confidence, and effort, then visualize them in tiered roadmaps.` },
        { title: "Proof plan", detail: `Define benchmarks, pilots, and QA rituals that will build executive trust quickly.` },
        { title: "Escalation", detail: `Escalate blockers via weekly steering rituals so decisions never languish in email.` },
      ],
    }),
    createSection(context, {
      title: "Channel & journey orchestration",
      summary: `We map the story across awareness, evaluation, purchase, and expansion so every channel reinforces the same promise.`,
      perspectives: [
        {
          title: "Journey beats",
          body: `For each stage we document the question being asked, the asset that answers it, and the signal sent back to the system.`,
        },
        {
          title: "Lifecycle signals",
          body: `Intent topics, role, account tier, and engagement depth feed personalization without creeping visitors out.`,
        },
      ],
      plays: [
        { title: "Storyboards", detail: `Write the narrative like a screenplay so paid, owned, and earned channels keep the same protagonist.` },
        { title: "CTA ladder", detail: `Design progressive asks: benchmark tool → diagnostic call → executive working session.` },
        { title: "Measurement", detail: `Use shared UTMs and naming conventions so data rolls into ${proofPoint}.` },
      ],
    }),
    createSection(context, {
      title: "Experimentation & measurement spine",
      summary: `Great stories still need math. We define hypotheses, guardrails, and instrumentation before production starts.`,
      perspectives: [
        {
          title: "Hypothesis design",
          body: `Each test states the audience, trigger, expected lift, and kill criteria. We log them inside a shared experimentation OS.`,
        },
        {
          title: "Insight rituals",
          body: `Weekly reviews promote winners, recycle learnings, and decide which ideas earn more budget or die gracefully.`,
        },
      ],
      plays: [
        { title: "North-star metric", detail: `Tie every test back to ${heroStat} or an analogous efficiency signal.` },
        { title: "Instrumentation", detail: `Marry server-side tagging, CRM, and product analytics so attribution isn't guesswork.` },
        { title: "Storytelling", detail: `Publish experiment recaps with hypothesis → result → decision so teams keep trusting the process.` },
      ],
    }),
    createSection(context, {
      title: "Data, tooling & automation",
      summary: `We treat the stack as an enabler, not a hero. Integrations focus on data contracts, QA, and latency—not chasing shiny logos.`,
      perspectives: [
        {
          title: "Architecture",
          body: `Diagram how the CDP, analytics layer, and engagement tools pass ${primaryKeyword} signals without double-counting.` },
        {
          title: "Automation philosophy",
          body: `Bots remove toil so strategists spend time on insight. Automation augments judgement; it never replaces it.` },
      ],
      plays: [
        { title: "Stack hygiene", detail: `Document owners, SLAs, and rollback steps for every critical integration.` },
        { title: "QA rituals", detail: `Run synthetic conversions, schema validation, and alerting before campaigns launch.` },
        { title: "AI copilots", detail: `Deploy AI for summarizing interviews, drafting briefs, and policing governance gates.` },
      ],
    }),
    createSection(context, {
      title: "Enablement, governance & change management",
      summary: `The best strategy fails without adoption. We bake governance into every workflow so teams know how to execute.`,
      perspectives: [
        {
          title: "Enablement loops",
          body: `Host office hours, async Loom breakdowns, and templates that explain how to deliver ${topic.toLowerCase()} inside each function.`,
        },
        {
          title: "Policy guardrails",
          body: `Accessibility, security, brand, and legal checkpoints are codified so approvals feel like muscle memory instead of bureaucracy.`,
        },
      ],
      plays: [
        { title: "Role clarity", detail: `Define RACI per artifact so contributors understand decision rights.` },
        { title: "Change stories", detail: `Share before/after snapshots that show how rituals saved time or grew revenue.` },
        { title: "Feedback loop", detail: `Survey teams quarterly to improve docs, tooling, and support.` },
      ],
    }),
    createSection(context, {
      title: "Optimization sprints & growth loops",
      summary: `Publishing is step one. We keep the asset fresh through rolling 30/60/90 improvement cycles.`,
      perspectives: [
        {
          title: "Sprint cadence",
          body: `Each sprint reviews insights, adds proof, refreshes stats, and repackages the story into new formats.`,
        },
        {
          title: "Growth loops",
          body: `Webinar signups feed reports; reports unlock communities; communities source fresh POVs that enhance the flagship page.`,
        },
      ],
      plays: [
        { title: "Backlog inputs", detail: `Use SEO data, sales questions, and product launches to prioritize updates.` },
        { title: "Ownership", detail: `Assign a managing editor to enforce the optimization ritual.` },
        { title: "Promotion", detail: `Treat every refresh like a mini-launch so the page keeps earning links and shares.` },
      ],
    }),
    createSection(context, {
      title: "Financial modeling & executive storytelling",
      summary: `Boards approve initiatives that link ${primaryKeyword} coverage to revenue, margin, and payback.`,
      perspectives: [
        {
          title: "Modeling",
          body: `We connect keyword demand to pipeline, win rates, and LTV so finance sees ${heroStat} improvements on the horizon.`,
        },
        {
          title: "Narrative",
          body: `Leaders get a three-slide deck: the tension, the bets, and the scoreboard. They can reuse it in QBRs or board meetings.`,
        },
      ],
      plays: [
        { title: "Scenario plan", detail: `Build best/base/guardrail projections with transparent assumptions.` },
        { title: "Proof library", detail: `Collect quotes, clips, and dashboards that validate the story.` },
        { title: "Enable advocates", detail: `Arm champions with talk tracks so the message stays intact when escalated.` },
      ],
    }),
    createSection(context, {
      title: "Collaboration rituals & talent strategy",
      summary: `${topic} crosses brand, demand, product, success, and ops. We design rituals and staffing plans that keep everyone moving in sync.`,
      perspectives: [
        {
          title: "Rituals",
          body: `Monday standups unblock work, mid-week async updates share metrics, and Friday demos celebrate wins tied to ${secondaryKeyword}.`,
        },
        {
          title: "Talent mix",
          body: `We outline the strategist, analyst, creative partner, and marketing engineer roles plus the upskilling plan for each.`,
        },
      ],
      plays: [
        { title: "Pods", detail: `Form cross-functional squads with clear charters and success metrics.` },
        { title: "Playbooks", detail: `Document how briefs, QA, launch, and measurement handoffs work.` },
        { title: "Partner bench", detail: `Line up fractional help so momentum never stalls.` },
      ],
    }),
    createSection(context, {
      title: "Story-driven snapshot",
      summary: `We close every page with a mini-case drawn from recent work so readers visualize the messy middle and the breakthrough moment.`,
      perspectives: [
        {
          title: "Context",
          body: `Set the stage: industry, constraint, and why ${primaryKeyword} was the lever that mattered.`,
        },
        {
          title: "Catalyst",
          body: `Explain the experiment, decision filter, or ritual that unlocked ${heroStat} within two quarters.`,
        },
      ],
      plays: [
        { title: "Proof", detail: `Share both hard metrics and qualitative quotes.` },
        { title: "Artifacts", detail: `Link to the deck, dashboard, or workshop board that powered the shift.` },
        { title: "Next move", detail: `Invite the reader to remix the approach with their own data.` },
      ],
    }),
    createSection(context, {
      title: `FAQ: Scaling ${topic.toLowerCase()}`,
      summary: `We address the objections heard most often so skeptical readers stay with us.`,
      perspectives: [
        {
          title: "Timeline",
          body: `Quick wins land in 30 days, mid-term gains in 90, structural shifts after two quarters—provided sponsorship holds.`,
        },
        {
          title: "Tooling",
          body: `Most teams can use their existing stack; we only recommend new tools once governance and instrumentation are stable.`,
        },
      ],
      plays: [
        { title: "Messy data?", detail: `Freeze schema changes, reconcile IDs, and rebuild trust with crawl-walk-run milestones.` },
        { title: "Sales alignment", detail: `Publish shared dashboards so GTM teams see how ${secondaryKeyword} work shortens cycles.` },
        { title: "Global teams", detail: `Localize rituals but protect the decision filters so strategy doesn’t splinter.` },
      ],
    }),
    createSection(context, {
      title: "Action roadmap & next steps",
      summary: `Readers leave with a sequenced plan—diagnose, align, architect, instrument, optimize.`,
      perspectives: [
        {
          title: "Run the sprint",
          body: `Week 1 audit, Week 2 prioritization, Week 3 instrumentation, Week 4 executive readout with budget asks.`,
        },
        {
          title: "Layered CTAs",
          body: `Invite prospects to download the toolkit, book a workshop, or request a custom diagnostic depending on readiness.`,
        },
      ],
      plays: [
        { title: "Kickoff", detail: `Secure sponsorship and align on KPIs within the first five days.` },
        { title: "Execution", detail: `Ship briefs, QA, and analytics artifacts against a visible Kanban board.` },
        { title: "Review", detail: `Host retros that convert learnings into the next quarter's roadmap.` },
      ],
    }),
  ];

  return sections;
}

function slugify(input = "") {
  return (
    input
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 64) || "section"
  );
}

async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(fullPath)));
    else if (entry.isFile() && fullPath.endsWith(".jsx")) files.push(fullPath);
  }
  return files;
}

function toImportPath(from, to) {
  let rel = path.relative(path.dirname(from), to).replace(/\\/g, "/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

function parseMeta(source) {
  const metaIndex = source.indexOf("export const meta");
  if (metaIndex === -1) return null;
  const braceStart = source.indexOf("{", metaIndex);
  if (braceStart === -1) return null;
  let depth = 0;
  let pos = braceStart;
  while (pos < source.length) {
    const char = source[pos];
    if (char === "{") depth++;
    else if (char === "}") {
      depth--;
      if (depth === 0) {
        pos++;
        break;
      }
    }
    pos++;
  }
  let metaObjectLiteral = source.slice(braceStart, pos);
  metaObjectLiteral = metaObjectLiteral.replace(/cover\s*:\s*[^,}]+/gi, "cover: null");
  try {
    const meta = Function("blogCover", `return (${metaObjectLiteral});`)(null);
    return meta;
  } catch (error) {
    console.error("Failed to parse meta", error);
    return null;
  }
}

function formatMeta(meta) {
  const metaForJson = { ...meta };
  metaForJson.cover = "__BLOG_COVER__";
  metaForJson.coverAlt = meta.coverAlt || `${meta.title} hero illustration`;
  return JSON.stringify(metaForJson, null, 2)
    .replace(/"([^\"]+)":/g, "$1:")
    .replace('"__BLOG_COVER__"', "blogCover");
}

function formatSections(sections) {
  const prepared = sections.map((section, index) => ({
    id: `${slugify(section.title)}-${index}`,
    title: section.title,
    summary: section.summary,
    perspectives: section.perspectives,
    plays: section.plays,
  }));
  return JSON.stringify(prepared, null, 2)
    .replace(/"([^\"]+)":/g, "$1:");
}

function createComponent(meta, sectionsImport, heroImportPath, onPageNavImportPath, categoryLabel) {
  return `import React from "react";
import blogCover from "${heroImportPath}";
import OnPageNav from "${onPageNavImportPath}";

export const meta = ${formatMeta(meta)};

const sections = ${sectionsImport};

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadTime() {
  const text = sections
    .flatMap((section) => [
      section.summary,
      ...section.perspectives.map((p) => p.body),
      ...section.plays.map((play) => play.detail),
    ])
    .join(" ");
  const words = text.trim().split(/\\s+/).length;
  return (Math.max(10, Math.round(words / 210))) + " min read";
}

export default function BlogArticle() {
  const published = formatDate(meta.date);
  const updated = formatDate(meta.updated || meta.date);
  const estimatedRead = estimateReadTime();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
        <article className="order-1 prose prose-slate max-w-none lg:order-2">
          <header className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">GoDigitalPro Blog · ${categoryLabel}</p>
            <h1>{meta.title}</h1>
            <p className="text-lg text-slate-600">{meta.metaDescription}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>Published {published}</span>
              <span>Updated {updated}</span>
              <span>{estimatedRead}</span>
            </div>
          </header>

          <figure className="my-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
            <img src={meta.cover} alt={meta.coverAlt} loading="lazy" className="h-80 w-full object-cover sm:h-[28rem]" />
            <figcaption className="px-6 py-4 text-sm text-slate-500">{meta.title}</figcaption>
          </figure>

          <div className="mb-10 lg:hidden">
            <OnPageNav sections={sections} showDesktop={false} />
          </div>

          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Section {String(index + 1).padStart(2, "0")}</p>
              <h2>{section.title}</h2>
              <p className="text-base text-slate-700">{section.summary}</p>

              <div className="mt-6 space-y-4">
                {section.perspectives.map((perspective) => (
                  <div key={perspective.title} className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-900">{perspective.title}</h3>
                    <p className="mt-2 text-slate-700">{perspective.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {section.plays.map((play) => (
                  <div key={play.title} className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">{play.title}</h4>
                    <p className="mt-2 text-sm text-slate-700">{play.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </article>
        <aside className="order-2 mt-10 hidden lg:order-1 lg:block lg:mt-0">
          <OnPageNav sections={sections} showMobile={false} />
        </aside>
      </div>
    </div>
  );
}
`;
}

async function processFile(file) {
  const source = await fs.readFile(file, "utf8");
  if (!source.includes("export const meta")) return false;
  const meta = parseMeta(source);
  if (!meta) {
    console.warn(`Skipping ${file} - meta not parsed`);
    return false;
  }

  const config = derivePlaybookConfig(meta);
  const sections = buildSections(config);
  const sectionsJson = formatSections(sections);

  const heroSvg = buildHeroSvg(config.topic, config.keywords);
  const heroFilename = `${meta.slug || slugify(meta.title)}.svg`;
  const heroPath = path.join(COVERS_DIR, heroFilename);
  await fs.writeFile(heroPath, heroSvg, "utf8");

  const heroImportPath = toImportPath(file, heroPath);
  const onPageNavImportPath = toImportPath(file, ONPAGE_COMPONENT);

  const categoryLabel = titleCaseFromSlug(meta.category);
  const newSource = createComponent(meta, sectionsJson, heroImportPath, onPageNavImportPath, categoryLabel);
  await fs.writeFile(file, newSource, "utf8");
  return true;
}

const files = await collectFiles(POSTS_DIR);
let updated = 0;
for (const file of files) {
  const changed = await processFile(file);
  if (changed) updated++;
}

console.log(`Rewrote ${updated} blog articles.`);
