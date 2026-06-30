import { Badge } from "../ui/Badge";
import { Container } from "../layout/Container";

/*
 * "Romi in Action" section.
 * Desktop: full Safari browser chrome wrapping a 30s platform demo video.
 * Mobile: swaps to a mobile-frame variant of the same video.
 * Both videos are placeholders — swap videoSrcDesktop / videoSrcMobile once
 * the "epic demo" is recorded.
 */

const videoSrcDesktop = null; // TODO: swap in desktop demo video URL
const videoSrcMobile = null;  // TODO: swap in mobile demo video URL

function SafariFrame({ children }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#e0e0e0] bg-white shadow-[0_34px_70px_-42px_rgb(20_8_40_/_0.38),0_0_0_1px_rgb(0_0_0_/_0.06)]">
      {/* Browser chrome */}
      <div className="flex h-12 items-center gap-2.5 border-b border-[#e8e8e8] bg-[#f6f6f6] px-5">
        {/* Traffic lights */}
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
        {/* Address bar */}
        <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md bg-white px-3 text-[12px] text-[#888] shadow-[0_0_0_1px_rgb(0_0_0_/_0.1)]">
          app.romi.ai
        </div>
      </div>
      {children}
    </div>
  );
}

function MobileFrame({ children }) {
  return (
    <div className="mx-auto w-[280px] overflow-hidden rounded-[36px] border-[8px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_32px_80px_-20px_rgb(20_8_40_/_0.5)]">
      {/* Notch */}
      <div className="relative flex h-6 items-center justify-center bg-[#1a1a1a]">
        <div className="h-3.5 w-20 rounded-full bg-[#111]" />
      </div>
      <div className="overflow-hidden rounded-t-[4px]">
        {children}
      </div>
    </div>
  );
}

function VideoPlaceholder({ aspect = "16/9" }) {
  return (
    <div
      className="w-full bg-[#f0eef8]"
      style={{ aspectRatio: aspect }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-4">
        {/* Play icon */}
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--romi-indigo)]/10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 5.14v14l11-7-11-7z" fill="var(--romi-indigo)" fillOpacity="0.6" />
          </svg>
        </div>
        <span className="text-sm font-medium text-[var(--romi-indigo)]/50">Demo video coming soon</span>
      </div>
    </div>
  );
}

function VideoOrPlaceholder({ src, aspect }) {
  if (!src) return <VideoPlaceholder aspect={aspect} />;
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className="w-full"
      style={{ aspectRatio: aspect, objectFit: "cover" }}
    />
  );
}

export function RomiInAction() {
  return (
    // Purple section above "cards down" over this beige one (rounded-b on Helps).
    // We sit flat underneath with tight top padding.
    <section className="relative bg-[var(--romi-beige)] pt-12 pb-24 md:pt-14 md:pb-32">
      <Container>
        <div className="mb-12 flex justify-center md:mb-16">
          <Badge avatar="/romi/landing/badge-window-inaction.svg">Romi in Action</Badge>
        </div>
      </Container>

      {/* Video breaks past the 1180px content column so the demo lands big and
          in-your-face. Capped at 1500px, inset only by the page gutter. */}
      <div className="mx-auto max-w-[1500px] px-[var(--romi-page-gutter)]">
        {/* Desktop: Safari frame */}
        <div className="hidden md:block">
          <SafariFrame>
            <VideoOrPlaceholder src={videoSrcDesktop} aspect="16/9" />
          </SafariFrame>
        </div>

        {/* Mobile: phone frame */}
        <div className="md:hidden">
          <MobileFrame>
            <VideoOrPlaceholder src={videoSrcMobile} aspect="9/16" />
          </MobileFrame>
        </div>
      </div>
    </section>
  );
}
