const emojiRegex = /\p{Extended_Pictographic}/u;

const bannedPhrases = [
  "no pain no gain",
  "you got this",
  "never give up",
  "dream big",
  "stay positive",
  "believe in yourself",
];

const medicalClaims = [
  "cure",
  "treat",
  "diagnose",
  "heal",
  "medicine",
  "prescription",
  "therapy",
  "clinical",
];

export function validateCaption({
  caption,
  requiredVocab = [],
}: {
  caption: string;
  requiredVocab?: string[];
}) {
  const violations: string[] = [];
  const lower = caption.toLowerCase();

  if (emojiRegex.test(caption)) {
    violations.push("Emojis are not allowed.");
  }

  if (bannedPhrases.some((phrase) => lower.includes(phrase))) {
    violations.push("Motivational cliches are not allowed.");
  }

  if (medicalClaims.some((phrase) => lower.includes(phrase))) {
    violations.push("Medical claims are not allowed.");
  }

  if (requiredVocab.length) {
    const missing = requiredVocab.filter(
      (term) => !lower.includes(term.toLowerCase())
    );
    if (missing.length) {
      violations.push(`Missing required vocab: ${missing.join(", ")}.`);
    }
  }

  return violations;
}
