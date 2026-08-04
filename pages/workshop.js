import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, Check, Clock, Compass, Heart, Play, TrendingUp, Users } from "lucide-react";
import { Button, Container, RomiCharacter, RomiPage } from "../src/romi";

/*
 * /workshop — registration page for the free live workshop with Tom Crawford
 * (The Brain Miner) and Josh Budd (Romi), Wed 9 Sept 2026, 2pm UK.
 * Cream-first, calm sections, one bold purple moment on the registration card,
 * matching the LandingTwo design direction.
 */

// Drop the VSL link in here when it's recorded (YouTube/Loom embed URL or a
// direct .mp4). Until then the page shows the workshop hero graphic with a
// play chip; once a URL is set the same graphic becomes the video poster.
const VSL_URL = null;

const HERO_IMAGE = "/romi/workshop/hero.jpg";
const SITE = "https://www.romiadhd.com";

// Shown under the Save my seat button. Lower it by hand as registrations come
// in; the live call is capped at 100 on the current Zoom plan.
const SEATS_REMAINING = 30;

// 2pm UK on the day = 13:00 UTC (BST).
const WORKSHOP_START_ISO = "2026-09-09T13:00:00Z";

const EVENT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Neurodivergence at Work: Unlocking Your Hidden Superstars",
  description:
    "A free 40 minute live workshop with Tom Crawford (The Brain Miner) and Josh Budd (Romi) on understanding neurodivergence at work, leading people with that in mind, and the business case for easy, low-cost support.",
  startDate: "2026-09-09T14:00:00+01:00",
  endDate: "2026-09-09T14:40:00+01:00",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  ...(HERO_IMAGE ? { image: `${SITE}${HERO_IMAGE}` } : {}),
  location: { "@type": "VirtualLocation", url: `${SITE}/workshop` },
  organizer: { "@type": "Organization", name: "Romi", url: SITE },
  performer: [
    { "@type": "Person", name: "Tom Crawford" },
    { "@type": "Person", name: "Josh Budd" },
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: `${SITE}/workshop`,
  },
};

const soft = (color, pct = 12) => `color-mix(in srgb, ${color} ${pct}%, transparent)`;

function Eyebrow({ color = "var(--romi-indigo)", children }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] font-bold [font-family:var(--romi-font-display)]"
      style={{ color, background: soft(color, 12) }}
    >
      {children}
    </span>
  );
}

/*
 * Date + time labels in the visitor's own timezone (e.g. a New York visitor
 * sees "Wed 9 September" and "9:00 AM EDT"; Sydney sees 10 September). Server
 * render uses the UK labels; the client swaps them in an effect, so no
 * hydration issues.
 */
function useLocalEventLabels() {
  const [labels, setLabels] = useState({ date: "Wed 9 September", time: "2pm UK time" });
  useEffect(() => {
    try {
      const start = new Date(WORKSHOP_START_ISO);
      const date = new Intl.DateTimeFormat(undefined, {
        weekday: "short",
        day: "numeric",
        month: "long",
      }).format(start);
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const time =
        !tz || tz === "Europe/London"
          ? "2pm UK time"
          : new Intl.DateTimeFormat(undefined, {
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: "short",
            }).format(start);
      setLabels({ date, time });
    } catch {
      // Leave the UK labels if anything about the environment is odd.
    }
  }, []);
  return labels;
}

/*
 * Live countdown to 2pm UK on the day. Server renders placeholders; the
 * client fills and ticks every second.
 */
function Countdown({ className = "" }) {
  const [t, setT] = useState(null);
  useEffect(() => {
    const target = new Date(WORKSHOP_START_ISO).getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const cells = [
    [t?.d, "days"],
    [t?.h, "hrs"],
    [t?.m, "min"],
    [t?.s, "sec"],
  ];
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {cells.map(([value, label]) => (
        <div
          key={label}
          className="grid min-w-[64px] place-items-center rounded-[var(--romi-radius-md)] bg-white/15 px-3 py-2.5 text-white"
        >
          <span className="text-2xl font-bold leading-none tabular-nums">{value ?? "-"}</span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/75">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/*
 * The two event badges (date + local time). onDark restyles them for the
 * purple registration card.
 */
function EventBadges({ onDark = false, className = "" }) {
  const { date, time } = useLocalEventLabels();
  const badgeClass = `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-bold [font-family:var(--romi-font-display)] ${
    onDark ? "bg-white/15 text-white" : "text-[var(--romi-indigo)]"
  }`;
  const badgeStyle = onDark ? undefined : { background: soft("var(--romi-indigo)", 10) };
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <span className={badgeClass} style={badgeStyle}>
        <Calendar className="h-3.5 w-3.5" />
        {date}
      </span>
      <span className={badgeClass} style={badgeStyle}>
        <Clock className="h-3.5 w-3.5" />
        {time}
      </span>
    </div>
  );
}

function WorkshopHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--romi-color-border)] bg-[var(--romi-color-bg)]/90 backdrop-blur-md">
      <Container className="flex min-h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Romi home">
          <Image src="/romi/romi-logo-linear.svg" alt="Romi" width={160} height={38} priority className="h-9 w-auto" />
        </Link>
        <Button as="a" href="#register" size="md">
          Save my seat
        </Button>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--romi-color-bg)] pt-14 md:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--romi-purple-40), transparent)" }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-[820px] text-center">
          <Eyebrow>Free online workshop</Eyebrow>
          <h1 className="mt-5 text-[clamp(2.3rem,4.8vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[var(--romi-color-ink)]">
            Neurodivergence at Work:
            <br />
            <span style={{ color: "var(--romi-indigo)" }}>Unlocking your hidden superstars.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-[clamp(1.1rem,1.5vw,1.3rem)] font-medium leading-[1.6] text-[var(--romi-color-ink-muted)]">
            One in five of your team are neurodivergent, but do you know how to get the most out of
            them without wasting time or money? This workshop will show you how.
          </p>
          <EventBadges className="mt-6 justify-center" />
          <div className="mt-9">
            <Button as="a" href="#register" size="xl" className="px-8">
              Save my seat
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Vsl() {
  const isMp4 = typeof VSL_URL === "string" && VSL_URL.endsWith(".mp4");
  const [playing, setPlaying] = useState(false);
  const showEmbed = VSL_URL && !isMp4;
  return (
    <section className="bg-[var(--romi-color-bg)] pb-6 pt-12 md:pt-16">
      <Container>
        <div className="mx-auto max-w-[880px] overflow-hidden rounded-[var(--romi-radius-2xl)] bg-white p-2 shadow-[var(--romi-shadow-lg)] md:p-3">
          <div className="relative aspect-video w-full overflow-hidden rounded-[calc(var(--romi-radius-2xl)-8px)]">
            {showEmbed ? (
              <iframe
                src={VSL_URL}
                title="Workshop introduction from Tom and Josh"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : isMp4 && playing ? (
              <video src={VSL_URL} controls autoPlay playsInline poster={HERO_IMAGE} className="h-full w-full object-cover" />
            ) : HERO_IMAGE ? (
              <button
                type="button"
                onClick={() => (isMp4 ? setPlaying(true) : null)}
                className="group relative block h-full w-full"
                aria-label={isMp4 ? "Play the workshop introduction" : "Workshop introduction video coming soon"}
              >
                <Image
                  src={HERO_IMAGE}
                  alt="Neurodivergence at Work: Unlocking your hidden superstars. Hosted by Josh Budd and Tom Crawford."
                  fill
                  priority
                  sizes="(max-width: 920px) 100vw, 880px"
                  className="object-cover"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-[var(--romi-shadow-lg)] transition-transform group-hover:scale-105 md:h-20 md:w-20">
                    <Play className="ml-1 h-7 w-7 text-[var(--romi-indigo)] md:h-8 md:w-8" fill="currentColor" />
                  </span>
                </span>
              </button>
            ) : (
              <div
                className="flex h-full w-full flex-col items-center justify-center gap-4"
                style={{ background: "var(--romi-gradient-soft)" }}
              >
                <RomiCharacter window="mint" size={120} alt="Romi waving hello" />
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--romi-indigo)] shadow-[var(--romi-shadow-sm)]">
                  <Play className="h-4 w-4" />
                  A hello from Tom and Josh is coming here soon
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

const agenda = [
  {
    icon: Users,
    color: "var(--romi-indigo)",
    title: "Understanding neurodivergence at work",
    body: "What it really looks like day to day, from Tom's lived experience of being and leading neurodivergent people.",
  },
  {
    icon: Compass,
    color: "#3a93e8",
    title: "Leading people with that in mind",
    body: "Practical shifts for managers and people teams that make a difference straight away.",
  },
  {
    icon: TrendingUp,
    color: "var(--romi-mint-deep)",
    title: "The business case",
    body: "The numbers behind supporting neurodivergent talent, and why it is an enormous commercial win.",
  },
  {
    icon: Heart,
    color: "var(--romi-indigo)",
    title: "Support that is easy to give",
    body: "How to get the most out of the neurodivergent people on your team without it costing loads of money, effort or time.",
  },
];

const audiences = [
  "Wellbeing leads",
  "HR and people teams",
  "DE&I specialists",
  "Mental health professionals",
  "Managers",
  "Anyone personally curious",
];

function Covered() {
  return (
    <section className="bg-[var(--romi-color-bg)] py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow>What we&apos;ll cover</Eyebrow>
        </div>
        <div className="mx-auto mt-8 grid max-w-[880px] gap-4 sm:grid-cols-2">
          {agenda.map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--romi-radius-xl)] bg-white p-6 shadow-[var(--romi-shadow-sm)]"
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-full"
                style={{ background: soft(item.color, 14) }}
              >
                <item.icon className="h-5 w-5" style={{ color: item.color }} />
              </span>
              <h3 className="mt-4 text-[1.1rem] font-bold text-[var(--romi-color-ink)]">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--romi-color-ink-muted)]">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-[760px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--romi-color-ink-soft)]">
            Made for
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            {audiences.map((a) => (
              <span
                key={a}
                className="rounded-full border border-[var(--romi-color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--romi-color-ink)]"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Hosts() {
  return (
    <section className="bg-[var(--romi-beige-deep)] py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow>Your hosts</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.01em] text-[var(--romi-color-ink)]">
            Two people who live this, not just talk about it.
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-[820px] gap-4 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-[var(--romi-radius-xl)] bg-white p-6 shadow-[var(--romi-shadow-sm)]">
            <span
              className="grid h-16 w-16 shrink-0 place-items-center rounded-full text-xl font-bold text-[var(--romi-indigo)]"
              style={{ background: "var(--romi-purple-pale)" }}
            >
              TC
            </span>
            <div>
              <h3 className="text-[1.1rem] font-bold text-[var(--romi-color-ink)]">Tom Crawford</h3>
              <p className="text-sm font-semibold text-[var(--romi-indigo)]">CEO, The Brain Miner</p>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                Speaks and writes on neurodivergence in the workplace, drawing on years of leading
                teams and his own lived experience.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-[var(--romi-radius-xl)] bg-white p-6 shadow-[var(--romi-shadow-sm)]">
            <Image
              src="/romi/team/josh.webp"
              alt="Josh Budd"
              width={128}
              height={128}
              quality={95}
              className="h-16 w-16 shrink-0 rounded-full object-cover"
            />
            <div>
              <h3 className="text-[1.1rem] font-bold text-[var(--romi-color-ink)]">Josh Budd</h3>
              <p className="text-sm font-semibold text-[var(--romi-indigo)]">CEO, Romi</p>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                Building Romi, the personal ADHD companion. Made by ADHD brains, for ADHD brains.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const formPerks = ["40 minutes, completely free", "Live Q&A with Tom and Josh"];

function Register() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/workshop-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("done");
    } catch (err) {
      setStatus("idle");
      setError(err.message || "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full rounded-[var(--romi-radius-md)] border border-[var(--romi-color-border)] bg-white px-4 py-3 text-[15px] font-medium text-[var(--romi-color-ink)] placeholder:text-[var(--romi-color-ink-soft)] outline-none transition focus:border-[var(--romi-color-primary)] focus:ring-2 focus:ring-[var(--romi-purple-40)]";

  return (
    <section id="register" className="bg-[var(--romi-color-bg)] py-16 md:py-24">
      <Container>
        <div
          className="relative overflow-hidden rounded-[var(--romi-radius-2xl)] px-6 py-10 md:px-12 md:py-14"
          style={{ background: "var(--romi-gradient-purple-indigo)" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <EventBadges onDark className="absolute right-6 top-6 hidden md:flex" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="text-white">
              <EventBadges onDark className="mb-5 md:hidden" />
              <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.01em]">
                Save your seat
              </h2>
              <Countdown className="mt-6" />
              <ul className="mt-7 space-y-3.5">
                {formPerks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/20">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-white/90">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--romi-radius-xl)] bg-[var(--romi-color-bg)] p-6 shadow-[var(--romi-shadow-xl)] md:p-8">
              {status === "done" ? (
                <div className="py-10 text-center">
                  <span
                    className="mx-auto grid h-14 w-14 place-items-center rounded-full"
                    style={{ background: soft("var(--romi-mint-deep)", 16) }}
                  >
                    <Check className="h-7 w-7 text-[var(--romi-mint-deep)]" strokeWidth={3} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[var(--romi-color-ink)]">
                    You&apos;re in!
                  </h3>
                  <p className="mx-auto mt-2 max-w-[300px] text-[15px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                    We&apos;ll send the joining link to your inbox before the day. See you on 9
                    September.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="ws-name" className="mb-1.5 block text-sm font-bold text-[var(--romi-color-ink)]">
                      Name
                    </label>
                    <input
                      id="ws-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="ws-email" className="mb-1.5 block text-sm font-bold text-[var(--romi-color-ink)]">
                      Work email
                    </label>
                    <input
                      id="ws-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="ws-company" className="mb-1.5 block text-sm font-bold text-[var(--romi-color-ink)]">
                        Company
                      </label>
                      <input
                        id="ws-company"
                        type="text"
                        value={form.company}
                        onChange={set("company")}
                        placeholder="Where you work"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="ws-role" className="mb-1.5 block text-sm font-bold text-[var(--romi-color-ink)]">
                        Role
                      </label>
                      <input
                        id="ws-role"
                        type="text"
                        value={form.role}
                        onChange={set("role")}
                        placeholder="What you do"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  {/* Honeypot, hidden from real visitors */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={set("website")}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  {error && (
                    <p className="text-sm font-semibold text-[var(--romi-cherry)]">{error}</p>
                  )}
                  <Button type="submit" size="xl" className="w-full" disabled={status === "sending"}>
                    {status === "sending" ? "Saving your seat..." : "Save my seat"}
                  </Button>
                  <p className="flex items-center justify-center gap-2 text-sm font-semibold text-[var(--romi-color-ink)]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--romi-honey)] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--romi-honey)]" />
                    </span>
                    Only {SEATS_REMAINING} seats remaining
                  </p>
                  <p className="text-center text-[13px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                    We&apos;ll only use your details for this workshop. No mailing lists, no follow-up
                    sequences.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WorkshopFooter() {
  return (
    <footer className="border-t border-[var(--romi-color-border)] bg-[var(--romi-beige-deep)] py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Link href="/" aria-label="Romi home">
          <Image src="/romi/romi-logo-linear.svg" alt="Romi" width={130} height={31} className="h-8 w-auto" />
        </Link>
        <p className="text-[13px] text-[var(--romi-color-ink-muted)]">
          Hosted by The Brain Miner and Romi · © {new Date().getFullYear()} Neuro Notion App Limited
        </p>
      </Container>
    </footer>
  );
}

export default function WorkshopPage() {
  return (
    <RomiPage
      title="Neurodivergence at Work: Unlocking Your Hidden Superstars | Romi"
      description="A free 40 minute live workshop with Tom Crawford (The Brain Miner) and Josh Budd (Romi). Wednesday 9 September, 2pm UK time."
      canonical="https://www.romiadhd.com/workshop"
      {...(HERO_IMAGE ? { ogImage: `${SITE}${HERO_IMAGE}` } : {})}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSON_LD) }}
        />
      </Head>
      <WorkshopHeader />
      <Hero />
      <Vsl />
      <Covered />
      <Hosts />
      <Register />
      <WorkshopFooter />
    </RomiPage>
  );
}
