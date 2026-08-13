import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../lib/useReducedMotion";

/*
 * useDocsReveal — the shared entrance for docs pages.
 *
 * Returns a ref to put on a wrapper. Anything inside it marked [data-reveal]
 * fades and lifts into place in document order, staggered. docs.css hides
 * those elements up front, but only inside a
 * `prefers-reduced-motion: no-preference` block, so anyone who asks for less
 * motion (and anyone whose JS never arrives) just gets the content.
 *
 * `key` re-runs the entrance when it changes, which is how each article
 * replays it on client-side navigation between docs pages.
 *
 * Reading the docs must never depend on an animation finishing, so the end
 * state is guaranteed three ways: hidden tabs skip the animation outright
 * (anime.js pauses its engine while a document is hidden, which would
 * otherwise strand every element on the first frame at opacity 0), a timeout
 * shows the content if the animation never completes, and a failed import
 * falls through to the same reveal.
 */

const DURATION = 520;
const STAGGER = 70;

export function useDocsReveal(key) {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const els = Array.from(scope.querySelectorAll("[data-reveal]"));
    if (!els.length) return undefined;

    // The end state: also the safe state if anything goes wrong on the way.
    const show = () => {
      els.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    };

    if (reducedMotion || document.visibilityState === "hidden") {
      show();
      return undefined;
    }

    let cancelled = false;
    const safety = window.setTimeout(show, DURATION + STAGGER * els.length + 400);

    import("animejs")
      .then(({ animate, stagger }) => {
        if (cancelled) return;
        animate(els, {
          opacity: [0, 1],
          translateY: [14, 0],
          duration: DURATION,
          delay: stagger(STAGGER),
          ease: "out(3)",
          onComplete: () => {
            window.clearTimeout(safety);
            show();
          },
        });
      })
      .catch(show);

    return () => {
      cancelled = true;
      window.clearTimeout(safety);
    };
  }, [reducedMotion, key]);

  return scopeRef;
}
