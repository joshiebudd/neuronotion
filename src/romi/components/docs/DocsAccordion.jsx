import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

/*
 * DocsAccordion — progressive disclosure for edge cases and FAQs at the end of
 * a docs article.
 *
 * This used to be a native <details>, which snaps open in one frame. It is now
 * a controlled disclosure so the panel can grow smoothly, using the same
 * grid-template-rows technique as the marketing FAQs (animating rows means no
 * measuring and no fixed heights, so it works whatever the content is).
 * Styling and the reduced-motion opt-out live in docs.css.
 */
export function DocsAccordion({ title, children }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <div className="docs-accordion" data-open={open ? "true" : "false"}>
      <button
        type="button"
        id={triggerId}
        className="docs-accordion-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{title}</span>
        <ChevronDown aria-hidden="true" />
      </button>

      <div id={panelId} role="region" aria-labelledby={triggerId} className="docs-accordion-panel">
        <div className="docs-accordion-clip">
          <div className="docs-accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
