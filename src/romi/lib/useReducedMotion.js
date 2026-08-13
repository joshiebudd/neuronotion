import { useEffect, useState } from "react";

/*
 * useReducedMotion — tracks the OS "reduce motion" setting.
 *
 * Romi is an ADHD app, so motion is always decoration: every animation that
 * uses this hook must still deliver the same content when it returns true.
 */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}
