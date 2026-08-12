import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: the Routines page. Registered in src/romi/docs/manifest.js under
 * Daily support. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "create-a-routine", label: "Create a routine" },
  { id: "run-a-routine", label: "Run a routine" },
  { id: "edit-reorder-delete", label: "Edit, reorder, delete" },
  { id: "good-to-know", label: "Good to know" },
];

export default function RoutinesDocs() {
  return (
    <DocsArticle slug="routines" sections={sections}>
      <p className="docs-lead">
        A routine is a saved set of steps you repeat, such as getting ready in
        the morning. Build it once, then tap play to open a focus session
        that shows one step at a time.
      </p>

      <h2 id="create-a-routine">Create a routine</h2>
      <p>
        On mobile, tap <strong>Regulate</strong> in the bottom bar, then tap{" "}
        <strong>Routines</strong> when it appears beside it. On desktop, pick{" "}
        <strong>Routines</strong> in the sidebar.
      </p>
      <ol className="docs-steps">
        <li>
          Tap <strong>New routine</strong> (<strong>Create a routine</strong>{" "}
          on an empty page).
        </li>
        <li>
          Type a <strong>Title</strong>.
        </li>
        <li>
          Tap <strong>Add a description</strong> if you want to note what the
          routine is for.
        </li>
        <li>
          Under <strong>Steps</strong>, write each step in order and tap{" "}
          <strong>Add step</strong> for more.
        </li>
        <li>
          Tap <strong>Create Routine</strong>.
        </li>
      </ol>
      <p>
        Romi Pro also offers <strong>Romi builds it</strong>. Switch to it,
        describe what the routine should accomplish, optionally set a{" "}
        <strong>Routine type</strong> and <strong>Number of steps</strong>,
        then tap <strong>Generate Routine</strong>. Romi drafts the title and
        steps for you to adjust before saving. Plans are covered in{" "}
        <Link href="/docs/subscription">Romi Pro &amp; billing</Link>.
      </p>
      <Callout type="tip">
        <p>
          Start with two or three steps. You can always add more later with{" "}
          <strong>Edit</strong>.
        </p>
      </Callout>

      <h2 id="run-a-routine">Run a routine</h2>
      <p>
        Tap the round play button on a routine card to start a focus session.
        Tap <strong>Mark step done</strong> to tick the current step and move
        on.
      </p>
      <p>
        Tap the timer at the top to pause, and tap it again to resume. The
        circular arrow restarts the session from step one, and your progress so
        far is logged first. Closing the session pauses it and keeps your
        progress: the play button on the card then shows the paused time, and
        tapping it resumes where you left off.
      </p>
      <p>
        You can also tap a card to expand its steps and tick them off directly,
        without starting a session.
      </p>

      <h2 id="edit-reorder-delete">Edit, reorder, delete</h2>
      <p>
        Long-press a routine card on mobile, or right-click it on desktop, to
        open its menu.
      </p>
      <ul>
        <li>
          <strong>Edit</strong> opens the routine so you can change the title,
          description or steps.
        </li>
        <li>
          <strong>Reorder</strong> turns the page into a drag list. Drag the
          cards into the order you want, then tap <strong>Done</strong>.
        </li>
        <li>
          <strong>Delete</strong> removes the routine and all of its steps. The
          app asks you to confirm first, because this cannot be undone.
        </li>
      </ul>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Why are my ticked steps unchecked this morning?">
        <p>
          Every routine resets at the start of each new day, so it is ready to
          run again. Nothing is lost: past progress is kept in{" "}
          <strong>History</strong>, and a routine you completed today shows a
          small green tick beside its title.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Where can I see past runs?">
        <p>
          Tap the clock icon beside the <strong>Routines</strong> toggle at the
          top of the page to open <strong>History</strong>. Runs are grouped by
          day and marked <strong>Completed</strong> or <strong>Partial</strong>.
          Open one to see which steps you ticked and how long the session took.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Can I put a routine on my Schedule?">
        <p>
          Yes. On the Schedule page, tap an empty time slot and pick the{" "}
          <strong>Routines</strong> tab to drop a routine into your day. See{" "}
          <Link href="/docs/schedule">The Schedule page</Link>.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Routines is missing from my desktop sidebar">
        <p>
          Open your profile settings and turn <strong>Routines</strong> on
          under <strong>Sidebar</strong>. On mobile it always appears after you
          tap <strong>Regulate</strong>.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
