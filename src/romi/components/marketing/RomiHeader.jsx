import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { cn } from "../../lib/cn";

const navItems = [
  { label: "Team", target: "team", href: "/rominewlanding#team" },
  { label: "Pricing", target: "pricing", href: "/rominewlanding#pricing" },
  { label: "For work", href: "/romiforcorporates" },
  // { label: "For healthcare", href: "/romiforhealthcare" }, // hidden for now
];

// "For..." dropdown hidden for now.
// const forItems = [
//   { label: "For ADHD Clinics", desc: "Offer Romi to your patients", href: "/romiforclinics" },
//   { label: "For Coaches", desc: "Support clients between sessions", href: "/romiforcoaches" },
// ];

const LOGIN_URL = "https://app.romiadhd.com/login";
const SIGNUP_URL = "https://app.romiadhd.com/signup";

function HeaderAction({ children, variant = "secondary", dark = false, href }) {
  // On indigo sections the light surface buttons would disappear, so swap to a
  // clean white-on-indigo treatment: primary -> white fill, secondary -> ghost.
  const darkOverride =
    variant === "primary"
      ? "border-0 bg-white text-[var(--romi-indigo)] shadow-none hover:bg-white/90"
      : "border-white/30 bg-transparent text-white shadow-none hover:bg-white/10";

  return (
    <Button
      as="a"
      href={href}
      variant={variant}
      size="sm"
      className={cn("transition-colors duration-300 active:scale-[0.98]", dark && darkOverride)}
    >
      {children}
    </Button>
  );
}

export function RomiHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // const [isForOpen, setIsForOpen] = useState(false); // for the hidden "For..." dropdown
  const headerRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 8);

      const header = headerRef.current;
      if (!header) return;

      // Probe what is actually painted behind the header's text band. Using
      // elementsFromPoint respects z-index + the overlapping section curves, so
      // the beige sections that sit on top (z-10) win in their overlap zones and
      // we only flip to "dark" once an indigo section is genuinely behind us.
      const line = header.offsetHeight / 2;
      const stack = document.elementsFromPoint(window.innerWidth / 2, line);

      let dark = false;
      for (const el of stack) {
        if (header.contains(el)) continue;
        const section = el.closest("section, [data-romi-header-theme]");
        if (!section) continue;
        dark = section.getAttribute("data-romi-header-theme") === "dark";
        break;
      }
      setOverDark(dark);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const navLink = cn(
    "underline-offset-[6px] transition-colors duration-300 hover:underline",
    overDark
      ? "text-white/85 hover:text-white"
      : "text-[var(--romi-color-ink-muted)] hover:text-[var(--romi-color-ink)]"
  );

  // Team / Pricing scroll to the matching section on WHATEVER page you're on
  // (both the landing and the corporate page carry #team and #pricing). If the
  // section isn't on this page, the Link falls through to the landing anchor.
  const handleScrollNav = (target) => (event) => {
    const el = typeof document !== "undefined" ? document.getElementById(target) : null;
    if (el) {
      event.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        overDark
          ? "border-white/10 bg-[var(--romi-indigo)]/92 shadow-none backdrop-blur-md"
          : isScrolled
            ? "border-[var(--romi-color-border)] bg-[var(--romi-color-bg)]/98 shadow-[var(--romi-shadow-sm)] backdrop-blur-md"
            : "border-[var(--romi-color-border)] bg-[var(--romi-color-bg)] shadow-none"
      )}
    >
      <Container className="flex min-h-[76px] items-center justify-between gap-6">
        <Link href="/rominewlanding" className="flex shrink-0 items-center" aria-label="Romi home">
          <Image
            src="/romi/romi-logo-linear.svg"
            alt="Romi"
            width={170}
            height={41}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium [font-family:var(--romi-font-display)] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLink}
              onClick={item.target ? handleScrollNav(item.target) : undefined}
            >
              {item.label}
            </Link>
          ))}
          {/* "For..." dropdown hidden for now
          <div
            className="relative"
            onMouseEnter={() => setIsForOpen(true)}
            onMouseLeave={() => setIsForOpen(false)}
          >
            <button
              type="button"
              className={cn("inline-flex items-center gap-1.5", navLink)}
              aria-expanded={isForOpen}
              aria-haspopup="menu"
              onClick={() => setIsForOpen(true)}
            >
              For...
              <ChevronDown
                aria-hidden="true"
                className={cn("h-4 w-4 transition-transform", isForOpen && "rotate-180")}
              />
            </button>

            {isForOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4" role="menu">
                <div className="overflow-hidden rounded-[var(--romi-radius-xl)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] p-2 shadow-[var(--romi-shadow-lg)]">
                  {forItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col gap-0.5 rounded-[var(--romi-radius-md)] px-3.5 py-3 transition-colors hover:bg-[color-mix(in_srgb,var(--romi-purple)_14%,transparent)]"
                      role="menuitem"
                      onClick={() => setIsForOpen(false)}
                    >
                      <span className="text-[15px] font-semibold text-[var(--romi-color-ink)] [font-family:var(--romi-font-display)]">{item.label}</span>
                      <span className="text-[13px] text-[var(--romi-color-ink-muted)]">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          */}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <HeaderAction dark={overDark} href={LOGIN_URL}>Log in</HeaderAction>
          <HeaderAction dark={overDark} variant="primary" href={SIGNUP_URL}>
            Try Romi
          </HeaderAction>
        </div>

        <button
          type="button"
          className={cn(
            "inline-grid h-11 w-11 place-items-center rounded-[var(--romi-radius-md)] border transition-colors duration-300 active:scale-[0.98] lg:hidden",
            overDark
              ? "border-white/25 bg-white/10 text-white hover:bg-white/20"
              : "border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-xs)] hover:bg-[var(--romi-color-surface-muted)]"
          )}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((current) => !current)}
        >
          {isMobileOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </Container>

      {isMobileOpen && (
        <div className="border-t border-[var(--romi-color-border)] bg-[var(--romi-color-bg)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--romi-radius-md)] px-3 py-3 text-base font-semibold text-[var(--romi-color-ink-muted)] transition-colors [font-family:var(--romi-font-display)] hover:bg-[color-mix(in_srgb,var(--romi-purple)_14%,transparent)] hover:text-[var(--romi-color-ink)]"
                onClick={item.target ? handleScrollNav(item.target) : () => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <HeaderAction href={LOGIN_URL}>Log in</HeaderAction>
              <HeaderAction variant="primary" href={SIGNUP_URL}>Try Romi</HeaderAction>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
