import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: the To-Do List page (/todos). Registered in src/romi/docs/manifest.js
 * under Tasks. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "the-tabs", label: "The tabs" },
  { id: "add-a-task", label: "Add a task" },
  { id: "do-days", label: "Do Days" },
  { id: "good-to-know", label: "Good to know" },
];

export default function TasksDocs() {
  return (
    <DocsArticle slug="tasks" sections={sections}>
      <p className="docs-lead">
        Your to-do list holds every task in one place. Tabs filter it down to
        today, this week, or nothing at all.
      </p>

      <h2 id="the-tabs">The tabs</h2>
      <p>
        <strong>Today</strong> shows tasks dated today,{" "}
        <strong>This week</strong> shows tasks dated within the next seven
        days, and <strong>All</strong> is every open task.{" "}
        <strong>Review</strong> collects anything overdue; see{" "}
        <Link href="/docs/review">The Review tab</Link>.{" "}
        <strong>Someday</strong> holds tasks with no date: things you want to
        remember but are not ready to plan. They stay out of Today and This
        week until you give one a day or tap <strong>Add to tasks</strong>. At
        the end of the row, the tick icon opens <strong>Completed</strong> and
        the box icon opens <strong>Archived</strong>.
      </p>
      <p>
        Above the list are search and a <strong>Sort/Filter</strong> menu:
        sort by Priority, Tag, Emoji or Custom order, and filter by Priority,
        Tag or Emoji.
      </p>
      <Callout type="note">
        <p>
          The page is called <strong>To-Do List</strong> in the desktop sidebar
          and <strong>Tasks</strong> in the mobile bottom bar. Same page
          either way.
        </p>
      </Callout>

      <h2 id="add-a-task">Add a task</h2>
      <ol className="docs-steps">
        <li>
          Tap <strong>Add a task, event or thought</strong>.
        </li>
        <li>
          Type your task under <strong>What needs doing?</strong> Romi picks an
          emoji for it; tap the emoji to choose your own.
        </li>
        <li>
          Under <strong>When</strong>, pick <strong>Today</strong>,{" "}
          <strong>Tomorrow</strong>, <strong>Next week</strong>,{" "}
          <strong>Someday</strong> or <strong>Custom</strong> for any date.
        </li>
        <li>
          Set a <strong>Priority</strong> if you like: 1 is high, 2 is medium,
          3 is low.
        </li>
        <li>
          Add <strong>Subtasks</strong>, a <strong>+Tag</strong> or a{" "}
          <strong>+Note</strong>, or tap <strong>Break it down</strong> to let
          Romi split it up; see{" "}
          <Link href="/docs/task-breakdown">Breaking down a task</Link>.
        </li>
        <li>
          Tap <strong>Add task</strong>.
        </li>
      </ol>
      <p>
        To make a task repeat, tap <strong>Repeat</strong> and choose{" "}
        <strong>Daily</strong>, <strong>Weekly</strong>,{" "}
        <strong>Monthly</strong> or <strong>Custom</strong> for other
        intervals. Only the current copy is on your list; the next one
        appears on its own day. End a series with{" "}
        <strong>Stop repeating</strong>. Someday tasks cannot repeat, because
        they have no date to repeat from.
      </p>
      <p>
        To change a task, right-click it on desktop or press and hold on
        mobile. The options menu covers rescheduling, priority, archiving,
        duplicating and moving it to <strong>Someday</strong>.
      </p>
      <Callout type="tip">
        <p>
          If picking a date is what stops you writing a task down, choose{" "}
          <strong>Someday</strong> and decide the day later.
        </p>
      </Callout>

      <h2 id="do-days">Do Days</h2>
      <p>
        A task&apos;s <strong>Do Day</strong> is the day you plan to work on
        it. That is what the <strong>When</strong> pills set and what shows
        on the right of each task row. Change it anytime.
      </p>
      <p>
        If a task&apos;s Do Day passes and it is still not done, it moves
        into <strong>Review</strong>.
      </p>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="What is the difference between archiving and deleting?">
        <p>
          Archiving takes a task off your list but keeps it: choose{" "}
          <strong>Archive</strong> from the options menu, then tap{" "}
          <strong>Restore</strong> in the <strong>Archived</strong> tab
          whenever you want it back. Deleting is permanent and only happens
          inside Archived: <strong>Delete</strong> removes one task,{" "}
          <strong>Delete All</strong> empties the tab, and neither can be
          undone.
        </p>
      </DocsAccordion>
      <DocsAccordion title="How do I complete or archive lots of tasks at once?">
        <p>
          Open any task&apos;s options menu and choose{" "}
          <strong>Bulk select</strong>. Tick the tasks you want, then use{" "}
          <strong>Complete</strong> or <strong>Archive</strong> in the bar
          below.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
