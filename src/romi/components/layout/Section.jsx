import { cn } from "../../lib/cn";

export function Section({ className, children, ...props }) {
  return (
    <section className={cn("romi-section", className)} {...props}>
      {children}
    </section>
  );
}
