import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: Brain dumps. Registered in src/romi/docs/manifest.js under
 * Getting started. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "start-a-brain-dump", label: "Start a brain dump" },
  { id: "review-created-items", label: "Review created items" },
  { id: "good-to-know", label: "Good to know" },
];

export default function BrainDumpDocs() {
  return (
    <DocsArticle slug="brain-dump" sections={sections}>
      <p className="docs-lead">
        Type whatever you are thinking, in any order. Romi sorts it into
        tasks, mood logs, routines and notes.
      </p>

      <h2 id="start-a-brain-dump">Start a brain dump</h2>
      <p>
        The quickest way in is the Romi card at the top of the Home page.
      </p>
      <ol className="docs-steps">
        <li>
          On the Home page, tap <strong>Type</strong> on the Romi card. If the
          app shows you a chooser instead, pick{" "}
          <strong>You write. Romi Organizes.</strong>
        </li>
        <li>
          Tap <strong>Get Started</strong>.
        </li>
        <li>
          Type whatever is on your mind, up to 2,000 characters. Structure and
          order do not matter; tasks, worries and half-formed plans all work.
        </li>
        <li>
          Stuck for a first line? Tap{" "}
          <strong>Everything I need to do</strong> or{" "}
          <strong>Things stressing me out</strong> to add starter text to the
          box, or tell Romi how you feel with <strong>Overwhelmed</strong>,{" "}
          <strong>Scattered</strong> or <strong>Frustrated</strong>.
        </li>
        <li>
          Tap <strong>Organize Thought</strong> and give Romi a few seconds.
        </li>
      </ol>
      <Callout type="tip">
        <p>
          You can paste as well as type. Drop in messy meeting notes, add{" "}
          <kbd className="docs-kbd">Create tasks from these notes</kbd>, and
          Romi pulls the actions out.
        </p>
      </Callout>

      <h2 id="review-created-items">Review created items</h2>
      <p>
        When Romi finishes, your dump comes back as a list of{" "}
        <strong>Created Items</strong>. Each one is a task, a mood log, a
        routine or a note. Tasks often have a do date, the day you plan
        to work on them, and a due date, the day they must be finished. The
        difference between the two is explained in{" "}
        <Link href="/docs/tasks">Your to-do list</Link>.
      </p>
      <p>
        Check the list before you close. Tap the pencil icon on a task to
        change its title, <strong>Do date</strong> or <strong>Due date</strong>
        . Tap the bin icon to remove anything Romi got wrong. When the list
        looks right, tap <strong>Save and Close</strong>.
      </p>
      <p>
        Tasks go to your to-do list. Mood logs go to your check-in history in{" "}
        <Link href="/docs/check-ins">Check-ins &amp; journalling</Link>. Routines go
        to <Link href="/docs/routines">Routines</Link>, and notes go to{" "}
        <Link href="/docs/notes">Notes</Link>.
      </p>
      <Callout type="note">
        <p>
          Romi saves items to your account as it creates them, so delete
          anything you do not want before you close the window.
        </p>
      </Callout>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Is there a length limit?">
        <p>
          One dump holds up to 2,000 characters, and the counter at the bottom
          of the box shows where you are. If you have more to write, save the
          first batch and run another dump straight after.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Can I speak instead of typing?">
        <p>
          Yes. Tap <strong>Speak</strong> on the Romi card to have the same
          kind of session out loud. How voice conversations work is covered in{" "}
          <Link href="/docs/talk-to-romi">Talking to Romi</Link>.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Is Brain Dump included in my plan?">
        <p>
          Brain Dump is part of Romi Pro and the free trial. On the free plan,
          the app asks you to choose a plan before you can start one. Plans and
          the trial are covered in{" "}
          <Link href="/docs/subscription">Romi Pro &amp; billing</Link>.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
