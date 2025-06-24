import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-[#30bcd9] text-white shadow-lg hover:bg-[#2aa3c7] border border-white/10 backdrop-blur-sm",
    destructive: "bg-red-600 text-white shadow-lg hover:bg-red-700 border border-white/10 backdrop-blur-sm",
    outline: "border border-white/20 bg-white/5 shadow-lg hover:bg-white/10 hover:text-white text-white/80 backdrop-blur-sm",
    secondary: "bg-white/10 text-white shadow-lg hover:bg-white/20 border border-white/10 backdrop-blur-sm",
    ghost: "hover:bg-white/10 hover:text-white text-white/80 backdrop-blur-sm",
    link: "text-[#30bcd9] underline-offset-4 hover:underline",
  },
  size: {
    default: "px-8 py-3 rounded-lg",
    sm: "px-4 py-2 rounded-md text-sm",
    lg: "px-10 py-4 rounded-lg text-lg",
    icon: "h-9 w-9 rounded-lg",
  },
}

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#30bcd9] disabled:pointer-events-none disabled:opacity-50",
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants } 