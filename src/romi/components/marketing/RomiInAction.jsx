import { useRef, useState } from "react";
import { Play, Volume2, Airplay, Maximize } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Container } from "../layout/Container";
import { ClickTooltip } from "../ui/ClickTooltip";

/*
 * "Romi in Action" section.
 * Desktop: full Safari browser chrome wrapping the 3:2 demo frame.
 * Mobile: swaps to a clean rounded-card variant of the same frame.
 *
 * The frame always opens as the POSTER: the Romi hero lockup (two app screens
 * + feature badges) on a light neutral wash, dressed as a paused video player -
 * a frosted centre play button plus, on desktop, a full control bar (scrubber,
 * volume, speed, airplay, fullscreen).
 *
 * With a real video URL (srcDesktop / srcMobile), the poster becomes a
 * click-to-play facade: pressing play swaps it for the actual <video> in the
 * same frame. The demo files are square (2160x2160), so rather than cropping
 * them to 3:2 they play centred on the wash inside the desktop frame, and on
 * mobile the card grows to 1:1 so the video fills the card width. With no URL
 * the play button keeps the under-construction tooltip.
 */

// Live demo video (square). Landing uses these defaults; corporate + clinic
// pass their own URLs via srcDesktop / srcMobile.
const CDN = "https://NeuroNotionPullZonw.b-cdn.net";
const videoSrcDesktop = `${CDN}/Video%20Demos/Romi%20Demo%20Standard.mp4`;
const videoSrcMobile = videoSrcDesktop;

// Upscaled hero composition (3:2, vector + embedded app screens).
const POSTER_DESKTOP = "/romi/landing/demo/landing-hero-poster.svg";
const POSTER_MOBILE = "/romi/landing/demo/landing-hero-poster.svg";

// Very light neutral wash behind the (partly transparent) composition.
const POSTER_BG = "#f4f4f6";

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

/* Frosted centre play button (the "press play" affordance). Kept glassy per the
 * spec, but with a shadow + ring + indigo glyph so it stays legible on the light
 * lilac poster (a pure-white frosted button vanishes on light content). */
function PlayButton({ size = 72 }) {
  return (
    <div
      className="grid place-items-center rounded-full transition-transform duration-200 hover:scale-105"
      style={{
        width: size,
        height: size,
        background: "rgba(255, 255, 255, 0.62)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow:
          "0 14px 36px rgba(38, 19, 64, 0.34), inset 0 0 0 1px rgba(255, 255, 255, 0.7)",
      }}
    >
      <Play
        className="translate-x-[2px]"
        style={{ width: size * 0.34, height: size * 0.34 }}
        fill="var(--romi-indigo)"
        strokeWidth={0}
      />
    </div>
  );
}

/* Full video control bar over a bottom gradient scrim (desktop only). */
function ControlBar() {
  const txt = { fontFamily: "var(--romi-font-body)", fontSize: 12, lineHeight: "18px" };
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 px-8 pb-6 pt-12"
      style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30) 100%)" }}
    >
      <div className="flex items-center gap-1 text-white">
        {/* Play */}
        <div className="p-2">
          <Play className="h-4 w-4" fill="white" strokeWidth={0} />
        </div>

        {/* Volume + slider */}
        <div className="flex items-center pr-2">
          <div className="p-2">
            <Volume2 className="h-4 w-4" />
          </div>
          <div className="relative h-1 w-9 rounded-full" style={{ background: "rgba(255,255,255,0.30)" }}>
            <div className="absolute left-0 top-0 h-1 rounded-full bg-white" style={{ width: 24 }}>
              <div className="absolute -top-1 h-3 w-3 rounded-full bg-white" style={{ left: 20 }} />
            </div>
          </div>
        </div>

        {/* Scrubber with timestamps */}
        <div className="flex flex-1 items-center gap-2 px-2">
          <span style={{ ...txt, width: 36 }}>00:00</span>
          <div className="relative h-2 flex-1 rounded-full" style={{ background: "rgba(255,255,255,0.30)" }}>
            <div className="absolute left-0 top-0 h-2 rounded-full bg-white/30" style={{ width: 56 }} />
            <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-white" />
          </div>
          <span className="text-right" style={{ ...txt, width: 42 }}>-08:24</span>
        </div>

        {/* Playback speed */}
        <div className="flex items-center gap-0.5 px-2" style={txt}>
          1x
        </div>

        {/* Airplay */}
        <div className="p-2">
          <Airplay className="h-4 w-4" />
        </div>

        {/* Fullscreen */}
        <div className="p-2">
          <Maximize className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

/* The dressed poster: hero art + faint scrim + centre play affordance +
 * (desktop) fake control bar. Fills whatever positioned frame it sits in. */
function PosterLayer({ poster, fit, posterScale, controls, children }) {
  return (
    <>
      <img
        src={poster}
        alt="Romi app demo: brain dump, tasks, routines and regulate"
        className="absolute inset-0 h-full w-full"
        style={{ objectFit: fit, transform: posterScale !== 1 ? `scale(${posterScale})` : undefined }}
      />
      {/* Faint dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.10)" }} />
      <div className="absolute inset-0 grid place-items-center">{children}</div>
      {controls && <ControlBar />}
    </>
  );
}

/* Poster dressed as a paused player; with a src, play swaps in the real video. */
function VideoOrPoster({ src, poster, aspect, fit = "cover", controls = true, posterScale = 1, playingAspect }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // No video yet: the play button explains itself on click.
  if (!src) {
    return (
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect, background: POSTER_BG }}>
        <PosterLayer poster={poster} fit={fit} posterScale={posterScale} controls={controls}>
          <ClickTooltip label="Video under construction - come back soon!">
            <PlayButton />
          </ClickTooltip>
        </PosterLayer>
      </div>
    );
  }

  // play() fires inside the click handler so browsers allow sound.
  const start = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: playing && playingAspect ? playingAspect : aspect, background: POSTER_BG }}
    >
      <video
        ref={videoRef}
        src={src}
        controls={playing}
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full"
        style={{ objectFit: "contain" }}
      />
      {!playing && (
        <button
          type="button"
          onClick={start}
          aria-label="Play the Romi demo video"
          className="absolute inset-0 block w-full cursor-pointer"
          /* Opaque: the poster art is partly transparent, and without this the
             video's first frame bleeds through it instead of the wash. */
          style={{ background: POSTER_BG }}
        >
          <PosterLayer poster={poster} fit={fit} posterScale={posterScale} controls={controls}>
            <PlayButton />
          </PosterLayer>
        </button>
      )}
    </div>
  );
}

export function RomiInAction({
  badgeLabel = "See Romi in action",
  badgeAvatar = "/romi/landing/badge-window-inaction.svg",
  badgeCharacter, // pass { body, expression } to use a live Romi glyph instead
  posterDesktop = POSTER_DESKTOP,
  posterMobile = POSTER_MOBILE,
  srcDesktop = videoSrcDesktop,
  srcMobile = videoSrcMobile,
  // Landing default: flat beige. Other pages override to fit their band rhythm.
  sectionClassName = "relative bg-[var(--romi-beige)] pt-12 pb-24 md:pt-14 md:pb-32",
}) {
  const badgeProps = badgeCharacter ? { character: badgeCharacter } : { avatar: badgeAvatar };
  return (
    <section className={sectionClassName}>
      <Container>
        <div className="mb-12 flex justify-center md:mb-16">
          <Badge {...badgeProps}>{badgeLabel}</Badge>
        </div>
      </Container>

      {/* Video breaks past the 1180px content column so the demo lands big and
          in-your-face. Capped at 1500px, inset only by the page gutter. */}
      <div className="mx-auto max-w-[1500px] px-[var(--romi-page-gutter)]">
        {/* Desktop: Safari frame. The square demo plays centred inside the
            3:2 window on the poster wash. */}
        <div className="hidden md:block">
          <SafariFrame>
            <VideoOrPoster
              src={srcDesktop}
              poster={posterDesktop}
              aspect="3 / 2"
              fit="cover"
              posterScale={0.87}
              controls
            />
          </SafariFrame>
        </div>

        {/* Mobile: a clean rounded landscape card (no phone frame - the hero
            composition is landscape and looks lost inside a portrait phone).
            On play the card grows to 1:1 so the square video fills its width. */}
        <div className="md:hidden">
          <div className="overflow-hidden rounded-[22px] border border-[#e6e6e6] shadow-[0_24px_50px_-30px_rgb(20_8_40_/_0.35)]">
            <VideoOrPoster
              src={srcMobile}
              poster={posterMobile}
              aspect="3 / 2"
              fit="cover"
              controls={false}
              playingAspect="1 / 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
