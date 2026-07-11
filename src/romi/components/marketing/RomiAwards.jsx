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
  // Duplicate the list so the mobile marquee loops seamlessly.
  const marqueeRow = [...awards, ...awards];

  return (
    <div className={cn("w-full px-[clamp(16px,5vw,72px)]", className)}>
      {/* Mobile: seamless auto-scrolling marquee. Manual swipe wasn't obvious,
          so it now scrolls on its own. Reuses the global .romi-marquee helper
          (keyframes + reduced-motion live in romi.css). */}
      <div className="overflow-hidden md:hidden">
        <div className="romi-marquee items-center gap-10" style={{ "--romi-marquee-duration": "20s" }}>
          {marqueeRow.map((award, i) => (
            <div key={`${award.src}-${i}`} className="flex min-w-[132px] justify-center">
              <Image
                src={award.src}
                alt={award.alt}
                width={210}
                height={210}
                sizes="132px"
                className="h-auto w-[132px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop unchanged: 5-up grid */}
      <div className="hidden md:grid md:grid-cols-5 md:items-center md:gap-12">
        {awards.map((award) => (
          <div key={award.src} className="flex justify-center">
            <Image
              src={award.src}
              alt={award.alt}
              width={210}
              height={210}
              sizes="19vw"
              className="h-auto w-full max-w-[240px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
