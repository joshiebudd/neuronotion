import Image from "next/image";
import { cn } from "../../lib/cn";

/*
 * RomiAwards — the awards / social-proof strip. Extracted verbatim from the
 * hero so other pages (e.g. the corporate page) can reuse it standalone.
 * Full bleed across the screen: horizontal scroll on mobile, 5-up grid on md+.
 */

const awards = [
  { src: "/romi/landing/award-startup-awards-26.webp", alt: "Startup Awards 2026 award" },
  { src: "/romi/landing/award-tata-25.webp", alt: "Tata 2025 award" },
  { src: "/romi/landing/award-google-25.webp", alt: "Google 2025 award" },
  { src: "/romi/landing/award-tech-nation-25.webp", alt: "Tech Nation 2025 award" },
  { src: "/romi/landing/award-startup-awards-25.webp", alt: "Startup Awards 2025 award" },
];

export function RomiAwards({ className }) {
  return (
    <div className={cn("w-full px-[clamp(16px,5vw,72px)]", className)}>
      <div className="flex gap-6 overflow-x-auto pb-1 [scrollbar-width:none] md:grid md:grid-cols-5 md:items-center md:gap-12 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
        {awards.map((award) => (
          <div key={award.src} className="flex min-w-[148px] justify-center md:min-w-0">
            <Image
              src={award.src}
              alt={award.alt}
              width={210}
              height={210}
              sizes="(min-width: 768px) 19vw, 148px"
              className="h-auto w-[148px] md:w-full md:max-w-[240px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
