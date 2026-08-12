import { ChevronDown } from "lucide-react";

/*
 * DocsAccordion — progressive disclosure for edge cases and FAQs at the end of
 * a docs article. Native <details>/<summary> so it works without JavaScript;
 * styling lives in docs.css under .docs-accordion.
 */
export function DocsAccordion({ title, children }) {
  return (
    <details className="docs-accordion">
      <summary>
        {title}
        <ChevronDown aria-hidden="true" />
      </summary>
      <div className="docs-accordion-body">{children}</div>
    </details>
  );
}
