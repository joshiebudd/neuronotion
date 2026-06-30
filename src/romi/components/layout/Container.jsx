import { cn } from "../../lib/cn";

export function Container({ className, children, ...props }) {
  return (
    <div className={cn("romi-container", className)} {...props}>
      {children}
    </div>
  );
}
