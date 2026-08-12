import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: the Schedule page. Registered in src/romi/docs/manifest.js under
 * Calendar. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "day-and-week-views", label: "Day and Week views" },
  { id: "add-to-your-day", label: "Add something to your day" },
  { id: "move-and-resize", label: "Move and resize blocks" },
  { id: "good-to-know", label: "Good to know" },
];

export default function ScheduleDocs() {
  return (
    <DocsArticle slug="schedule" sections={sections}>
      <p className="docs-lead">
        The Schedule page is where you plan your day. Tap a time slot to add
        something, then drag it around until it fits.
      </p>

      <h2 id="day-and-week-views">Day and Week views</h2>
      <p>
        The page opens on <strong>Day</strong> view, a timeline of your day.
        Switch to <strong>Week</strong> view to see the whole week at once.
        Swipe left or right to move between days or weeks, use the month picker
        at the top to jump further, and tap <strong>Today</strong> to come
        straight back.
      </p>
      <Callout type="note">
        <p>
          This page has two names: <strong>Calendar</strong> on desktop and{" "}
          <strong>Schedule</strong> on mobile. Same page either way.
        </p>
      </Callout>

      <h2 id="add-to-your-day">Add something to your day</h2>
      <ol className="docs-steps">
        <li>
          Tap an empty time slot. The <strong>Add to your day</strong> panel
          opens.
        </li>
        <li>
          Pick a tab: <strong>Tasks</strong> for your unscheduled to-dos,{" "}
          <strong>Routines</strong> for a saved routine, or{" "}
          <strong>Regulate exercises</strong> for a breathing or grounding
          exercise.
        </li>
        <li>
          Tap the one you want and it lands in that slot as a block. You can
          also type a brand-new task straight into the panel.
        </li>
      </ol>
      <Callout type="tip">
        <p>
          You can schedule a Regulate exercise the same way as a task. Put one
          between two hard tasks if you want a built-in break.
        </p>
      </Callout>

      <h2 id="move-and-resize">Move and resize blocks</h2>
      <p>
        Drag a block to move it to a new time. Drag its top or bottom edge to
        make it longer or shorter. Tap a block to open it, edit it, or remove
        it from the day.
      </p>
      <p>
        Every block with a start time has a bell icon for a one-off reminder.
        See <Link href="/docs/reminders">Reminders &amp; notifications</Link> for how
        that works.
      </p>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Does scheduling a task change its do date?">
        <p>
          Placing a task on a day sets when you plan to work on it. Its
          deadline, if it has one, stays where it is. The difference between
          the two is explained in <Link href="/docs/tasks">Your to-do list</Link>.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Can I see my Google Calendar events here?">
        <p>
          Yes. Once you connect an account, your Google events appear alongside
          your Romi blocks. Set that up in{" "}
          <Link href="/docs/google-calendar">Google Calendar sync</Link>.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
