import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: the Review tab on the to-do list. Registered in
 * src/romi/docs/manifest.js under Tasks. Section ids must match the
 * `sections` prop for the on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "how-tasks-get-here", label: "How tasks get here" },
  { id: "review-one-by-one", label: "Review one by one" },
  { id: "clear-everything-at-once", label: "Clear everything at once" },
  { id: "good-to-know", label: "Good to know" },
];

export default function ReviewDocs() {
  return (
    <DocsArticle slug="review" sections={sections}>
      <p className="docs-lead">
        The Review tab collects all your overdue tasks in one place.
        Reschedule each one, archive it, or clear the whole queue at once.
      </p>

      <h2 id="how-tasks-get-here">How tasks get here</h2>
      <p>
        Review sits on your to-do list, next to <strong>Today</strong>,{" "}
        <strong>This week</strong> and <strong>All</strong>. You will find the
        list under <strong>To-Do List</strong> in the desktop sidebar or{" "}
        <strong>Tasks</strong> in the mobile bottom bar. A yellow badge on the{" "}
        <strong>Review</strong> tab shows how many tasks are waiting.
      </p>
      <p>
        A task joins the queue when its Do Day has passed. Completed,
        archived and <strong>Someday</strong> tasks never appear here.
      </p>

      <h2 id="review-one-by-one">Review one by one</h2>
      <ol className="docs-steps">
        <li>
          Tap the <strong>Review</strong> tab to open the queue. The first
          card shows the task and the day it was originally scheduled for.
        </li>
        <li>
          Tap <strong>Reschedule</strong> and choose <strong>Today</strong>,{" "}
          <strong>Tomorrow</strong>, <strong>Next week</strong>,{" "}
          <strong>Next month</strong> or <strong>Pick a date</strong>.
        </li>
        <li>
          Or tap <strong>Archive</strong> to move the task out of your list.
        </li>
        <li>
          Or tap <strong>Make Smaller</strong> to break the task into smaller
          steps.
        </li>
        <li>
          Already done it in real life? Tick the checkbox on the card to mark
          it complete.
        </li>
      </ol>
      <p>
        After each decision the card leaves and the next one takes its
        place. Use <strong>Previous</strong> and <strong>Next</strong> to
        look through the queue before deciding anything, and tap a card to
        open the full task.
      </p>
      <Callout type="note">
        <p>
          Rescheduling a task from its card moves its Do Day, so it stops
          counting as overdue. Do Days are explained in{" "}
          <Link href="/docs/tasks">Your to-do list</Link>.
        </p>
      </Callout>

      <h2 id="clear-everything-at-once">Clear everything at once</h2>
      <p>
        Two buttons above the cards act on the whole queue.{" "}
        <strong>Reschedule all to...</strong> moves every task to the same new
        day, with the same date options as a single task.{" "}
        <strong>Archive all</strong> archives everything in the queue, and Romi
        asks you to confirm before it does.
      </p>
      <Callout type="tip">
        <p>
          If the same task keeps coming back to Review, it is probably too big
          to start. <strong>Make Smaller</strong> turns it into steps you can
          begin today.
        </p>
      </Callout>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Does archiving delete the task?">
        <p>
          No. Archived tasks move to the <strong>Archived</strong> tab on your
          to-do list, and you can bring one back at any time with{" "}
          <strong>Restore</strong>. Nothing is deleted.
        </p>
      </DocsAccordion>
      <DocsAccordion title="What happens after Make Smaller?">
        <p>
          It opens the same flow described in{" "}
          <Link href="/docs/task-breakdown">Breaking down a task</Link>. When you
          save the breakdown, the task moves to today so you can start with the
          first small step.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
