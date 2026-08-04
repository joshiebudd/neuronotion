import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Airplay, Maximize } from "lucide-react";
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
 * a frosted centre play button plus, on desktop, the control bar (scrubber,
 * volume, speed, airplay, fullscreen).
 *
 * With a real video URL (srcDesktop / srcMobile), pressing play starts the
 * actual video in the same design: the window resizes to the video's square
 * ratio (the desktop Safari window narrows so the square still fits on
 * screen; the mobile card grows to 1:1), and the SAME control bar becomes the
 * real, working controls - no native browser chrome. With no URL the play
 * button keeps the under-construction tooltip.
 */

// Live demo video (square, 2160x2160). Landing uses these defaults; corporate
// + clinic pass their own URLs via srcDesktop / srcMobile.
const CDN = "https://NeuroNotionPullZonw.b-cdn.net";
const videoSrcDesktop = `${CDN}/Video%20Demos/Romi%20Demo%20Standard.mp4`;
const videoSrcMobile = videoSrcDesktop;

// Upscaled hero composition (3:2, vector + embedded app screens).
const POSTER_DESKTOP = "/romi/landing/demo/landing-hero-poster.svg";
const POSTER_MOBILE = "/romi/landing/demo/landing-hero-poster.svg";

// Very light neutral wash behind the (partly transparent) composition.
const POSTER_BG = "#f4f4f6";

const SPEEDS = [1, 1.25, 1.5, 2];
const DEFAULT_RATE = 1.25;

function fmt(t) {
  const total = Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* Pointer-drag helper for the scrubber / volume tracks: maps the pointer's
 * x-position on the track to a 0-1 ratio. */
function useDragBar(onRatio) {
  const ref = useRef(null);
  const apply = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !rect.width) return;
    onRatio(Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)));
  };
  return {
    ref,
    onPointerDown: (e) => {
      e.currentTarget.setPointerCapture?.(e.pointerId);
      apply(e);
    },
    onPointerMove: (e) => {
      if (e.buttons & 1) apply(e);
    },
  };
}

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

/* The video control bar over a bottom gradient scrim. One component for both
 * states: static (the dressed poster's fake bar, non-interactive, the original
 * mock numbers) and live (the real controls during playback - same layout,
 * same styling, working buttons). On phones the live bar drops the volume /
 * speed / airplay cluster so it fits the narrow card. */
function ControlBar({
  live = false,
  playing = false,
  current = 0,
  duration = 504, // static mock: -08:24 remaining
  volume = 1,
  muted = false,
  rate = 1,
  airplayAvailable = false,
  onPlayPause,
  onSeek,
  onVolume,
  onMute,
  onRate,
  onAirplay,
  onFullscreen,
}) {
  const txt = { fontFamily: "var(--romi-font-body)", fontSize: 12, lineHeight: "18px" };
  const seekBar = useDragBar((r) => onSeek?.(r * (duration || 0)));
  const volBar = useDragBar((r) => onVolume?.(r));
  const pct = live && duration ? (current / duration) * 100 : 0;
  const volPct = muted ? 0 : volume * 100;
  const Btn = live ? "button" : "div";
  const btnProps = live ? { type: "button" } : {};

  return (
    <div
      className={`absolute inset-x-0 bottom-0 px-4 pb-6 pt-12 sm:px-8 ${live ? "" : "pointer-events-none"}`}
      style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30) 100%)" }}
    >
      <div className="flex items-center gap-1 text-white">
        {/* Play / pause */}
        <Btn {...btnProps} className="p-2" onClick={onPlayPause} aria-label={playing ? "Pause" : "Play"}>
          {live && playing ? (
            <Pause className="h-4 w-4" fill="white" strokeWidth={0} />
          ) : (
            <Play className="h-4 w-4" fill="white" strokeWidth={0} />
          )}
        </Btn>

        {/* Volume + slider */}
        <div className={`items-center pr-2 ${live ? "hidden sm:flex" : "flex"}`}>
          <Btn {...btnProps} className="p-2" onClick={onMute} aria-label={muted ? "Unmute" : "Mute"}>
            {live && (muted || volume === 0) ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Btn>
          <div
            ref={volBar.ref}
            onPointerDown={live ? volBar.onPointerDown : undefined}
            onPointerMove={live ? volBar.onPointerMove : undefined}
            className={`relative h-1 w-9 rounded-full ${live ? "cursor-pointer" : ""}`}
            style={{ background: "rgba(255,255,255,0.30)" }}
          >
            <div
              className="absolute left-0 top-0 h-1 rounded-full bg-white"
              style={{ width: live ? `${volPct}%` : 24 }}
            >
              <div className="absolute -top-1 h-3 w-3 rounded-full bg-white" style={{ right: -6, left: "auto", ...(live ? {} : { left: 20, right: "auto" }) }} />
            </div>
          </div>
        </div>

        {/* Scrubber with timestamps */}
        <div className="flex flex-1 items-center gap-2 px-2">
          <span style={{ ...txt, width: 36 }}>{live ? fmt(current) : "00:00"}</span>
          <div
            ref={seekBar.ref}
            onPointerDown={live ? seekBar.onPointerDown : undefined}
            onPointerMove={live ? seekBar.onPointerMove : undefined}
            className={`relative h-2 flex-1 rounded-full ${live ? "cursor-pointer" : ""}`}
            style={{ background: "rgba(255,255,255,0.30)" }}
          >
            <div className="absolute left-0 top-0 h-2 rounded-full bg-white/30" style={{ width: live ? `${pct}%` : 56 }} />
            <div
              className="absolute top-0 h-2 w-2 rounded-full bg-white"
              style={live ? { left: `${pct}%`, transform: "translateX(-50%)" } : { left: 0 }}
            />
          </div>
          <span className="text-right" style={{ ...txt, width: 42 }}>
            -{live ? fmt(Math.max(0, (duration || 0) - current)) : "08:24"}
          </span>
        </div>

        {/* Playback speed */}
        <Btn
          {...btnProps}
          className={`items-center gap-0.5 px-2 ${live ? "hidden sm:flex" : "flex"}`}
          style={txt}
          onClick={onRate}
          aria-label="Playback speed"
        >
          {live ? `${rate}x` : "1x"}
        </Btn>

        {/* Airplay (live: only where the browser supports it) */}
        {(!live || airplayAvailable) && (
          <Btn {...btnProps} className={`p-2 ${live ? "hidden sm:block" : ""}`} onClick={onAirplay} aria-label="AirPlay">
            <Airplay className="h-4 w-4" />
          </Btn>
        )}

        {/* Fullscreen */}
        <Btn {...btnProps} className="p-2" onClick={onFullscreen} aria-label="Fullscreen">
          <Maximize className="h-4 w-4" />
        </Btn>
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

/* Poster dressed as a paused player; with a src, play starts the real video in
 * the same design: the frame takes the video's true ratio and the control bar
 * goes live. */
function VideoOrPoster({
  src,
  poster,
  aspect,
  fit = "cover",
  controls = true,
  posterScale = 1,
  playingAspect,
  onStartedChange,
}) {
  const videoRef = useRef(null);
  const boxRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [airplayOk, setAirplayOk] = useState(false);

  // Safari fires this when an AirPlay target exists; everywhere else the
  // button stays hidden during playback.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || typeof window === "undefined" || !window.WebKitPlaybackTargetAvailabilityEvent) return;
    const onAvail = (e) => setAirplayOk(e.availability === "available");
    v.addEventListener("webkitplaybacktargetavailabilitychanged", onAvail);
    return () => v.removeEventListener("webkitplaybacktargetavailabilitychanged", onAvail);
  }, [src]);

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
    setStarted(true);
    onStartedChange?.(true);
    const v = videoRef.current;
    if (!v) return;
    // Metadata can land before hydration attaches the event listener.
    if (v.duration) setDuration(v.duration);
    v.playbackRate = rate;
    v.play();
  };
  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };
  const seekTo = (t) => {
    const v = videoRef.current;
    if (v) v.currentTime = t;
    setCurrent(t);
  };
  const setVol = (r) => {
    const v = videoRef.current;
    if (v) {
      v.volume = r;
      v.muted = r === 0;
    }
  };
  const toggleMute = () => {
    const v = videoRef.current;
    if (v) v.muted = !v.muted;
  };
  const cycleRate = () => {
    const next = SPEEDS[(SPEEDS.indexOf(rate) + 1) % SPEEDS.length];
    if (videoRef.current) videoRef.current.playbackRate = next;
    setRate(next);
  };
  const showAirplay = () => videoRef.current?.webkitShowPlaybackTargetPicker?.();
  const fullscreen = () => {
    const el = boxRef.current;
    if (el?.requestFullscreen) el.requestFullscreen();
    else if (el?.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else videoRef.current?.webkitEnterFullscreen?.();
  };

  return (
    <div
      ref={boxRef}
      className="relative w-full overflow-hidden [&:fullscreen]:bg-black"
      style={{
        aspectRatio: started && playingAspect ? playingAspect : aspect,
        background: POSTER_BG,
        transition: "aspect-ratio 500ms ease",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full"
        style={{ objectFit: "contain" }}
        onClick={started ? toggle : undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onVolumeChange={(e) => {
          setVolume(e.currentTarget.volume);
          setMuted(e.currentTarget.muted);
        }}
      />

      {started && !playing && (
        /* Paused: bring back the frosted centre play button (bar stays live). */
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <button type="button" onClick={toggle} aria-label="Play" className="pointer-events-auto cursor-pointer">
            <PlayButton />
          </button>
        </div>
      )}

      {started && (
        <ControlBar
          live
          playing={playing}
          current={current}
          duration={duration}
          volume={volume}
          muted={muted}
          rate={rate}
          airplayAvailable={airplayOk}
          onPlayPause={toggle}
          onSeek={seekTo}
          onVolume={setVol}
          onMute={toggleMute}
          onRate={cycleRate}
          onAirplay={showAirplay}
          onFullscreen={fullscreen}
        />
      )}

      {!started && (
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
  // Once desktop playback starts, the Safari window narrows so the square
  // video area (plus the 48px chrome bar) fits within the viewport height.
  const [deskStarted, setDeskStarted] = useState(false);
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
        {/* Desktop: Safari frame. On play the window resizes to the video's
            square ratio. */}
        <div className="hidden md:block">
          <div
            className="mx-auto"
            style={{
              maxWidth: deskStarted ? "min(100%, calc(88vh - 48px))" : "100%",
              transition: "max-width 500ms ease",
            }}
          >
            <SafariFrame>
              <VideoOrPoster
                src={srcDesktop}
                poster={posterDesktop}
                aspect="3 / 2"
                fit="cover"
                posterScale={0.87}
                controls
                playingAspect="1 / 1"
                onStartedChange={setDeskStarted}
              />
            </SafariFrame>
          </div>
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
