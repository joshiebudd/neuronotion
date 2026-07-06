import { useEffect, useRef, useState } from "react";

/*
 * ClickTooltip — a small brand-lilac tooltip that pops above its trigger on
 * click, then auto-dismisses. Built to the Figma tooltip spec (rounded chip +
 * downward arrow + soft layered shadow), recoloured to the Romi brand purple.
 * Used to explain temporarily-disabled controls (app-store buttons, the demo
 * video) without navigating anywhere.
 */
export function ClickTooltip({ label, children, className }) {
  const [show, setShow] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const trigger = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShow(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(false), 2400);
  };

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={trigger}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") trigger(event);
      }}
      className={"relative inline-flex cursor-not-allowed select-none " + (className || "")}
    >
      {children}
      {show && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2.5 -translate-x-1/2">
          <span
            className="block whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium leading-[18px] text-white [font-family:var(--romi-font-display)] shadow-[0px_2px_2px_-1px_rgba(0,0,0,0.04),0px_4px_6px_-2px_rgba(0,0,0,0.03),0px_12px_16px_-4px_rgba(0,0,0,0.08)]"
            style={{ background: "var(--romi-color-primary)" }}
          >
            {label}
          </span>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent"
            style={{ borderTopColor: "var(--romi-color-primary)" }}
          />
        </span>
      )}
    </span>
  );
}
