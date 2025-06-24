import * as React from "react"
import { cn } from "../../lib/utils"

const badgeVariants = {
  default: "border-transparent bg-[#30bcd9] text-white hover:bg-[#2aa3c7]",
  secondary: "border-white/20 bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm",
  destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
  outline: "border-white/20 text-white/80 hover:bg-white/5 backdrop-blur-sm",
}

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#30bcd9] focus:ring-offset-2",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge, badgeVariants } 