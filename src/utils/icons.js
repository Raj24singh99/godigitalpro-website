import * as LucideIcons from "lucide-react";

const DEFAULT_ICON = "Shapes";

export function getLucideIcon(name) {
  if (!name) {
    return LucideIcons[DEFAULT_ICON] || LucideIcons.Activity;
  }
  return LucideIcons[name] || LucideIcons[DEFAULT_ICON] || LucideIcons.Activity;
}
