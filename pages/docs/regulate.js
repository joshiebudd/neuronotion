import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: the Regulate page. Registered in src/romi/docs/manifest.js under
 * Daily support. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "explore-protocols", label: "Explore protocols" },
  { id: "help-me-regulate", label: "Help me regulate" },
  { id: "your-logs", label: "Your logs" },
  { id: "good-to-know", label: "Good to know" },
];

export default function RegulateDocs() {
  return (
    <DocsArticle slug="regulate" sections={sections}>
      <p className="docs-lead">
        The Regulate page holds Romi&apos;s guided exercises: breathwork, mind
        resets, soundscapes and guided meditations. Use them to calm down,
        focus, or wind down for sleep.
      </p>

      <h2 id="explore-protocols">Explore protocols</h2>
      <ol className="docs-steps">
        <li>
          Open <strong>Regulate</strong> from the desktop sidebar or the mobile
          bottom bar.
        </li>
        <li>
          Under <strong>Explore</strong>, pick a category:{" "}
          <strong>Breathwork</strong>, <strong>Mind</strong>,{" "}
          <strong>Soundscapes</strong> or <strong>Guided Meditations</strong>.
          A fifth category, <strong>Body</strong>, is coming soon.
        </li>
        <li>
          Tap an exercise, for example <strong>Rapid Calm</strong>,{" "}
          <strong>Interrupt the Spiral</strong> or{" "}
          <strong>Settle and Sleep</strong>. The play button starts it straight
          away.
        </li>
        <li>
          Some exercises offer a choice of lengths. Tap the small duration
          pill on the exercise first and pick another one.
        </li>
      </ol>
      <p>
        Each exercise also shows the technique behind it, for example{" "}
        <strong>Rapid Calm</strong> is built on the{" "}
        <strong>Physiological Sigh</strong>. On desktop, tapping a category
        opens its exercises in a grid; on mobile, the category expands in
        place.
      </p>

      <h2 id="help-me-regulate">Help me regulate</h2>
      <p>
        At the top of the page, tap the card that says{" "}
        <strong>Feeling off? Let me guide you.</strong> Describe how you feel
        in your own words, then tap <strong>Find my protocol</strong>. Romi
        suggests a matching exercise and explains its choice under{" "}
        <strong>Why we picked this</strong>; tap{" "}
        <strong>Start this protocol</strong> to begin.
      </p>
      <Callout type="tip">
        <p>
          A few words are enough, for example anxious before a call, or
          tired but restless.
        </p>
      </Callout>

      <h2 id="your-logs">Your logs</h2>
      <p>
        The three buttons near the top, <strong>Check in</strong>,{" "}
        <strong>Journal</strong> and <strong>Log mood</strong>, let you
        record how you are doing. They are covered in{" "}
        <Link href="/docs/check-ins">Check-ins &amp; journalling</Link>.
      </p>
      <p>
        Tap the clock icon next to{" "}
        <strong>Protocols</strong> to open <strong>Your logs</strong>: a single
        feed of completed exercises, daily check-ins, journals and mood logs,
        newest first. Narrow it down with the <strong>All</strong>,{" "}
        <strong>Protocols</strong>, <strong>Daily Check-Ins</strong>,{" "}
        <strong>Journals</strong> and <strong>Moods</strong> filters.
      </p>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Can I plan a Regulate exercise into my day?">
        <p>
          Yes. On the <Link href="/docs/schedule">Schedule page</Link>, tap an empty
          time slot and choose the <strong>Regulate exercises</strong> tab in
          the <strong>Add to your day</strong> panel. The exercise becomes a block
          in your day like any task or routine.
        </p>
      </DocsAccordion>
      <DocsAccordion title="I can't see Regulate in my sidebar">
        <p>
          Open <strong>Settings</strong>, go to the <strong>Extras</strong>{" "}
          tab, then open <strong>Sidebar customization</strong>. Tap{" "}
          <strong>Regulate</strong> so it is selected and it will appear in
          your sidebar.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
