import { Lightbulb, Info, AlertTriangle } from "lucide-react";
import { cn } from "../../lib/cn";

/*
 * Callout — the docs aside for gotchas and helpful extras, keeping body text
 * linear. Three types with fixed brand colours: tip (mint), note (lilac),
 * warning (honey). Use sparingly; one per section at most.
 */

const TYPES = {
  tip: { icon: Lightbulb, className: "docs-callout--tip" },
  note: { icon: Info, className: "docs-callout--note" },
  warning: { icon: AlertTriangle, className: "docs-callout--warning" },
};

export function Callout({ type = "note", children }) {
  const { icon: Icon, className } = TYPES[type] || TYPES.note;

  return (
    <div className={cn("docs-callout", className)}>
      <Icon aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}
