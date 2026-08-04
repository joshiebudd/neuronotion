import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Calendar, Check, Clock, Compass, MessageCircle, Play, Smartphone, Users, Video } from "lucide-react";
import { Button, Container, RomiCharacter, RomiPage } from "../src/romi";

/*
 * /workshop — registration page for the free live workshop with Tom Crawford
 * (The Brain Miner) and Josh Budd (Romi), Wed 9 Sept 2026, 2pm UK.
 * Cream-first, calm sections, one bold purple moment on the registration card,
 * matching the LandingTwo design direction.
 */

// Drop the VSL link in here when it's recorded (YouTube/Loom embed URL or a
// direct .mp4). Until then the page shows a branded placeholder.
const VSL_URL = null;

const EVENT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Neurodivergence at Work: Leading People Differently",
  description:
    "A free 45 minute live workshop with Tom Crawford (The Brain Miner) and Josh Budd (Romi) on neurodivergence in the workplace, leading people differently, and the tools that help colleagues self-manage.",
  startDate: "2026-09-09T14:00:00+01:00",
  endDate: "2026-09-09T14:45:00+01:00",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: { "@type": "VirtualLocation", url: "https://www.romiadhd.com/workshop" },
  organizer: { "@type": "Organization", name: "Romi", url: "https://www.romiadhd.com" },
  performer: [
    { "@type": "Person", name: "Tom Crawford" },
    { "@type": "Person", name: "Josh Budd" },
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.romiadhd.com/workshop",
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

function MetaItem({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--romi-color-ink)]">
      <span
        className="grid h-8 w-8 place-items-center rounded-full"
        style={{ background: soft("var(--romi-indigo)", 10) }}
      >
        <Icon className="h-4 w-4 text-[var(--romi-indigo)]" />
      </span>
      {children}
    </span>
  );
}

function WorkshopHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--romi-color-border)] bg-[var(--romi-color-bg)]/90 backdrop-blur-md">
      <Container className="flex min-h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Romi home">
          <Image src="/romi/romi-logo-linear.svg" alt="Romi" width={160} height={38} priority className="h-9 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm font-semibold text-[var(--romi-color-ink-muted)] sm:block">
            Wed 9 Sept · 2pm UK
          </span>
          <Button as="a" href="#register" size="md">
            Save my seat
          </Button>
        </div>
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
        <div className="mx-auto max-w-[760px] text-center">
          <Eyebrow>Free live workshop</Eyebrow>
          <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.06] tracking-[-0.015em] text-[var(--romi-color-ink)]">
            1 in 7 of your people are{" "}
            <span style={{ color: "var(--romi-indigo)" }}>neurodivergent.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-[clamp(1.1rem,1.5vw,1.3rem)] font-medium leading-[1.6] text-[var(--romi-color-ink-muted)]">
            Most workplaces still lead them like everyone else. Join Tom Crawford and Josh Budd for
            45 minutes on what leading neurodivergent colleagues well looks like, and the tools that
            help them thrive.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <MetaItem icon={Calendar}>Wednesday 9 September</MetaItem>
            <MetaItem icon={Clock}>2:00pm UK · 45 minutes</MetaItem>
            <MetaItem icon={Video}>Live online</MetaItem>
          </div>
          <div className="mt-9">
            <Button as="a" href="#register" size="xl" className="px-8">
              Save my seat
            </Button>
            <p className="mt-4 text-sm font-medium text-[var(--romi-color-ink-muted)]">
              Free to attend. Bring your questions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Vsl() {
  const isMp4 = typeof VSL_URL === "string" && VSL_URL.endsWith(".mp4");
  return (
    <section className="bg-[var(--romi-color-bg)] pb-6 pt-12 md:pt-16">
      <Container>
        <div className="mx-auto max-w-[880px] overflow-hidden rounded-[var(--romi-radius-2xl)] bg-white p-2 shadow-[var(--romi-shadow-lg)] md:p-3">
          <div className="relative aspect-video w-full overflow-hidden rounded-[calc(var(--romi-radius-2xl)-8px)]">
            {VSL_URL ? (
              isMp4 ? (
                <video src={VSL_URL} controls playsInline className="h-full w-full object-cover" />
              ) : (
                <iframe
                  src={VSL_URL}
                  title="Workshop introduction from Tom and Josh"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              )
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
    title: "Neurodivergence at work, from lived experience",
    body: "Tom on what 1 in 7 really means day to day, and his own story of leading and being led as a neurodivergent person.",
  },
  {
    icon: Compass,
    color: "#3a93e8",
    title: "Leading people differently",
    body: "Practical shifts for managers, wellbeing and DE&I teams that you can start using the same week.",
  },
  {
    icon: Smartphone,
    color: "var(--romi-mint-deep)",
    title: "Tools for empowered self-management",
    body: "Why strategy on its own is not enough, with a short look at how Romi helps colleagues manage their own brains.",
  },
  {
    icon: MessageCircle,
    color: "var(--romi-indigo)",
    title: "Open Q&A",
    body: "Bring the situations you are wrestling with. Tom and Josh take your questions live.",
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
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.01em] text-[var(--romi-color-ink)]">
            45 minutes, four things, no fluff.
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-[880px] gap-4 sm:grid-cols-2">
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
              <p className="text-sm font-semibold text-[var(--romi-indigo)]">The Brain Miner</p>
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
              width={64}
              height={64}
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

const formPerks = [
  "45 minutes, completely free",
  "Live Q&A with Tom and Josh",
  "The joining link lands straight in your inbox",
];

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
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="text-white">
              <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.01em]">
                Save your seat
              </h2>
              <p className="mt-4 max-w-[440px] text-[1.1rem] leading-[1.55] text-white/85">
                Wednesday 9 September, 2:00pm UK time. Come with questions, leave with things you can
                use the same week.
              </p>
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
                        Company <span className="font-medium text-[var(--romi-color-ink-soft)]">(optional)</span>
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
                        Role <span className="font-medium text-[var(--romi-color-ink-soft)]">(optional)</span>
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
      title="Neurodivergence at Work | Free Live Workshop | Romi"
      description="A free 45 minute live workshop with Tom Crawford (The Brain Miner) and Josh Budd (Romi). Neurodivergence in the workplace, leading people differently, and the tools that help. Wed 9 Sept, 2pm UK."
      canonical="https://www.romiadhd.com/workshop"
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
