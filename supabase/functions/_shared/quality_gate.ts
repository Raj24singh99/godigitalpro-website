import { chatCompletion } from "./openai.ts";
import { validateCaption } from "./quality.ts";

export async function qualityGateCaption({
  caption,
  requiredVocab = [],
  allowRegenerate = true,
}: {
  caption: string;
  requiredVocab?: string[];
  allowRegenerate?: boolean;
}) {
  const violations = validateCaption({ caption, requiredVocab });
  if (!violations.length) {
    return { passed: true, caption };
  }

  if (!allowRegenerate) {
    return { passed: false, caption, violations };
  }

  const system =
    "Rewrite Instagram captions with strict compliance. No emojis, no cliches, no medical claims.";
  const user = `Fix the caption below. Reason: ${violations.join(" ")}. Return only the revised caption.\nCaption: ${caption}`;
  const revised = await chatCompletion([
    { role: "system", content: system },
    { role: "user", content: user },
  ]);

  const newViolations = validateCaption({
    caption: revised,
    requiredVocab,
  });

  if (newViolations.length) {
    return { passed: false, caption: revised, violations: newViolations };
  }

  return { passed: true, caption: revised, regenerated: true };
}
