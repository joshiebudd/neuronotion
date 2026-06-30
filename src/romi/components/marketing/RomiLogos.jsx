import { Badge } from "../ui/Badge";
import { Container } from "../layout/Container";

/*
 * "Seen On and Supported by" — a full-bleed logo marquee on the light cream band.
 *
 * Refactor of the legacy <LPSupportedBy /> carousel (used on the main landing +
 * corporate pages) into the Romi design system. Two changes vs the original:
 *   1. Snapping fixed. The legacy keyframe animated translateX(-50%) -> (-100%),
 *      scrolling the track into blank space before jumping back. Here the track
 *      is two identical sets animated 0 -> -50% (see .romi-marquee in romi.css),
 *      so it loops with no visible seam.
 *   2. Romi tokens. Indigo band, Romi badge, soft edge fade, hover-to-pause,
 *      reduced-motion safe.
 *
 * Logos are white-on-transparent assets, so on the light cream band they are
 * forced to a muted charcoal for a uniform monochrome strip. Order leads with
 * the strongest marks: NHS, Google, Product Hunt.
 */

const CDN = "https://NeuroNotionPullZonw.b-cdn.net";

const logos = [
  { id: "nhs", src: `${CDN}/SupportedByLogos/2.webp`, alt: "NHS" },
  { id: "google", src: `${CDN}/SupportedByLogos/1.webp`, alt: "Google" },
  { id: "producthunt", src: `${CDN}/SupportedByLogos/10.webp`, alt: "Product Hunt" },
  { id: "santander", src: `${CDN}/SupportedByLogos/8.webp`, alt: "Santander" },
  { id: "tata", src: `${CDN}/SupportedByLogos/6.webp`, alt: "Tata" },
  { id: "technation", src: `${CDN}/SupportedByLogos/11.webp`, alt: "Tech Nation" },
  { id: "hin", src: `${CDN}/SupportedByLogos/3.webp`, alt: "Health Innovation Network" },
  { id: "loughborough", src: `${CDN}/SupportedByLogos/7.webp`, alt: "Loughborough University" },
  { id: "nihr", src: `${CDN}/SupportedByLogos/12.webp`, alt: "NIHR MindTech" },
  { id: "startupawards", src: `${CDN}/SupportedByLogos/4.webp`, alt: "StartUp Awards" },
  { id: "aiventureflows", src: `${CDN}/SupportedByLogos/5.webp`, alt: "AI Venture Flows" },
  { id: "elevenlabs", src: `${CDN}/11LabsLogowebp.webp`, alt: "ElevenLabs" },
];

// Fade logos in/out at the left + right edges so the loop seam is invisible.
const edgeFade = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)",
};

// White-on-transparent marks -> solid charcoal, softened, for a calm mono strip
// that reads on the light cream band.
const forceMono = { filter: "brightness(0)", opacity: 0.5 };

function LogoTrack() {
  // Two identical sets back-to-back. CSS animates the track 0 -> -50%, so set
  // two lands exactly where set one started: a seamless, snap-free loop.
  const sequence = [...logos, ...logos];

  return (
    <div className="romi-marquee">
      {sequence.map((logo, i) => (
        <div
          key={`${logo.id}-${i}`}
          aria-hidden={i >= logos.length}
          className="flex shrink-0 items-center justify-center px-7 sm:px-9 lg:px-11"
        >
          <img
            src={logo.src}
            alt={i >= logos.length ? "" : logo.alt}
            loading="lazy"
            draggable={false}
            className="h-12 w-auto select-none object-contain sm:h-16 md:h-20 lg:h-24"
            style={forceMono}
          />
        </div>
      ))}
    </div>
  );
}

export function RomiLogos() {
  return (
    <section className="bg-[var(--romi-beige)] pb-6 pt-12 md:pb-8 md:pt-14">
      <Container>
        <div className="flex justify-center">
          <Badge>Seen On and Supported by</Badge>
        </div>
      </Container>

      {/* Full-bleed marquee so the scroll runs edge to edge of the viewport */}
      <div className="mt-9 overflow-hidden md:mt-10" style={edgeFade}>
        <LogoTrack />
      </div>
    </section>
  );
}
