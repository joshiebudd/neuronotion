import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: Start here. Registered in src/romi/docs/manifest.js under
 * Getting started. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "what-is-romi", label: "What Romi is" },
  { id: "setup-questions", label: "The setup questions" },
  { id: "first-five-things", label: "First five things" },
  { id: "good-to-know", label: "Good to know" },
];

export default function GettingStartedDocs() {
  return (
    <DocsArticle slug="getting-started" sections={sections}>
      <p className="docs-lead">
        Romi is an AI companion for adults with ADHD, and this page covers
        your first session: the Home screen, the setup questions, and the
        first five things to try.
      </p>

      <h2 id="what-is-romi">What Romi is</h2>
      <p>
        Romi helps you get what is in your head into a plan you can follow.
        Talk or type to Romi and it turns what you say into tasks, a
        daily schedule and reminders. Romi runs in your browser at
        app.romiadhd.com, on your computer or your phone.
      </p>
      <p>
        After you sign in, you&apos;re on Home. At the top is a greeting for the
        time of day, then the purple Romi card:{" "}
        &ldquo;Romi says: How can I help today?&rdquo;. Its two buttons,{" "}
        <strong>Type</strong> and <strong>Speak</strong>, both start a brain
        dump, one written and one spoken. Below that, <strong>Today&apos;s
        Focus</strong> lists the tasks planned for today, and a{" "}
        <strong>Next up</strong> card shows your next scheduled block. Its
        label switches to <strong>Now</strong> while a block is in progress.
        On mobile, the menu button at the top of Home opens the{" "}
        <strong>Menu</strong> page, where you find settings and help.
      </p>

      <h2 id="setup-questions">The setup questions</h2>
      <p>
        The first time you open Romi, it asks a few questions: whether
        you have an ADHD diagnosis, which type fits you best, whether you take
        medication, what you want to use Romi for, when your energy peaks,
        your workday hours, how often Romi can nudge you, and how Romi should
        sound. At the end you can connect{" "}
        <strong>Google Calendar</strong> and enable your microphone. Both are
        optional, and you can set them up later.
      </p>
      <Callout type="note">
        <p>
          The question &ldquo;What will you use Romi for?&rdquo; decides what
          appears in your sidebar. Picking <strong>Staying regulated</strong>{" "}
          adds <strong>Regulate</strong>, and <strong>Keeping a
          routine</strong> adds <strong>Routines</strong>. Change this any time
          in <strong>Settings</strong>, on the <strong>Extras</strong> tab,
          under <strong>Sidebar customization</strong>.
        </p>
      </Callout>

      <h2 id="first-five-things">Your first five things</h2>
      <ol className="docs-steps">
        <li>
          Try a brain dump. Tap <strong>Speak</strong> on Home and say
          everything on your mind, or tap <strong>Type</strong> to write
          instead. Romi sorts it into tasks. More in{" "}
          <Link href="/docs/brain-dump">Brain dumps</Link>.
        </li>
        <li>
          Check <strong>Today&apos;s Focus</strong> on Home to see the tasks
          planned for today.
        </li>
        <li>
          Open your calendar: <strong>Calendar</strong> in the desktop sidebar,{" "}
          <strong>Schedule</strong> in the mobile bottom bar. Drag blocks
          to move them to a different time. More in{" "}
          <Link href="/docs/schedule">The Schedule page</Link>.
        </li>
        <li>
          Connect <strong>Google Calendar</strong> if you skipped it during
          setup, so your events and Romi blocks appear in one place. See{" "}
          <Link href="/docs/google-calendar">Google Calendar sync</Link>.
        </li>
        <li>
          Talk to Romi by voice about whatever you are working on. See{" "}
          <Link href="/docs/talk-to-romi">Talking to Romi</Link>.
        </li>
      </ol>
      <Callout type="tip">
        <p>
          If you only do one thing today, do the brain dump. It&apos;s the
          fastest way to see what Romi does.
        </p>
      </Callout>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Is Romi free to use?">
        <p>
          Every new account starts with a free trial of Romi Pro, normally 7
          days. What happens afterwards is covered in{" "}
          <Link href="/docs/subscription">Romi Pro &amp; billing</Link>. If your
          clinic or employer gave you a code, see{" "}
          <Link href="/docs/promo-codes">Promo codes</Link>.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Can I rewatch the tutorial?">
        <p>
          Yes. On desktop, tap <strong>Settings</strong> at the bottom of the
          sidebar, then <strong>Tutorial video</strong>. On mobile, the menu
          button on Home opens the <strong>Menu</strong> page: tap{" "}
          <strong>Help &amp; support</strong>, then{" "}
          <strong>Watch the tutorial</strong>.
        </p>
      </DocsAccordion>
      <DocsAccordion title="I answered a setup question wrong. Can I fix it?">
        <p>
          The answers that shape your day to day are editable in{" "}
          <strong>Settings</strong>. <strong>Notification intensity</strong>{" "}
          and <strong>Romi&apos;s voice</strong> are on the{" "}
          <strong>Preferences</strong> tab, and your sidebar sections are on
          the <strong>Extras</strong> tab under{" "}
          <strong>Sidebar customization</strong>.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
