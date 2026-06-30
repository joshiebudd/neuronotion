import { cn } from "../../lib/cn";

/*
 * PhoneFrame — a reusable iOS-style device shell for showing real app screens
 * (LandingTwo). It only draws the bezel + screen mask; the screen content is
 * passed as children (see the Screen* compositions in landing-two/screens).
 *
 * The screen keeps a fixed 390x844 aspect ratio so children can lay out with
 * h-full. `float` adds the gentle idle bob (romi-phone-float in romi.css).
 *
 *   <PhoneFrame width={300} float><ScreenHome /></PhoneFrame>
 */
export function PhoneFrame({
  children,
  width = 300,
  float = false,
  ratio = "390 / 844",
  className,
  screenClassName,
  style,
  ...rest
}) {
  return (
    <div
      className={cn("relative w-full shrink-0", float && "romi-phone-float", className)}
      style={{ maxWidth: width, ...style }}
      {...rest}
    >
      <div className="relative rounded-[2.6rem] bg-[#1b1922] p-[3%] shadow-[0_44px_90px_-30px_rgb(20_8_40_/_0.5)] ring-1 ring-black/5">
        {/* notch */}
        <div className="pointer-events-none absolute left-1/2 top-[3%] z-20 h-[1.6%] w-[34%] -translate-x-1/2 rounded-full bg-[#1b1922]" />
        <div
          className={cn(
            "relative overflow-hidden rounded-[2.05rem] bg-[var(--romi-beige)]",
            screenClassName
          )}
          style={{ aspectRatio: ratio }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
