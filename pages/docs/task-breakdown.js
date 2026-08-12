import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: breaking down a task with Romi. Registered in src/romi/docs/manifest.js
 * under Tasks. Section ids must match the `sections` prop for the on-this-page
 * rail to highlight correctly.
 */

const sections = [
  { id: "start-a-breakdown", label: "Start a breakdown" },
  { id: "tell-romi-about-it", label: "Tell Romi about it" },
  { id: "edit-the-plan", label: "Edit the plan" },
  { id: "good-to-know", label: "Good to know" },
];

export default function TaskBreakdownDocs() {
  return (
    <DocsArticle slug="task-breakdown" sections={sections}>
      <p className="docs-lead">
        Breaking down a task asks Romi to split one big task into small,
        timed steps.
      </p>

      <h2 id="start-a-breakdown">Start a breakdown</h2>
      <p>The quickest way to start one is from the task itself:</p>
      <ol className="docs-steps">
        <li>
          Open your to-do list: <strong>To-Do List</strong> in the desktop
          sidebar, <strong>Tasks</strong> in the mobile bottom bar.
        </li>
        <li>
          Tap a task to open it, or start a new one and give it a title.
        </li>
        <li>
          Tap <strong>Break it down</strong>.
        </li>
      </ol>
      <p>
        There are two other ways to start one. In the <strong>Review</strong>{" "}
        tab, each overdue task has a <strong>Make Smaller</strong> button; see{" "}
        <Link href="/docs/review">The Review tab</Link>. And in a voice conversation
        you can ask Romi to break a task down; see{" "}
        <Link href="/docs/talk-to-romi">Talking to Romi</Link>.
      </p>

      <h2 id="tell-romi-about-it">Tell Romi about it</h2>
      <ol className="docs-steps">
        <li>
          Check the title under <strong>What do you need to do?</strong> and
          edit it if needed.
        </li>
        <li>
          Pick your <strong>Energy level</strong>: <strong>Low</strong>,{" "}
          <strong>Medium</strong> or <strong>High</strong>. Romi takes it into
          account when sizing the steps.
        </li>
        <li>
          Pick a <strong>Time frame</strong>, from <strong>Today</strong> up to{" "}
          <strong>1 Month</strong>, or tap <strong>Custom</strong> to set an
          exact deadline.
        </li>
        <li>
          Add anything useful under <strong>Add context</strong>: why you have
          been putting it off, or what the finished result needs to include.
        </li>
        <li>
          Tap <strong>Generate Breakdown</strong>.
        </li>
      </ol>
      <p>
        Romi replies with an <strong>Action Plan</strong>: a numbered list of
        steps, each with its own time estimate. When your time frame is longer
        than a day, steps can also carry a suggested date so the work is spread
        across the days you have.
      </p>
      <Callout type="tip">
        <p>On a low energy day, Romi suggests smaller, easier steps.</p>
      </Callout>

      <h2 id="edit-the-plan">Edit the plan</h2>
      <p>
        Nothing is saved until you choose to save. Tap the pencil on a step
        to edit its title, its minutes, or to{" "}
        <strong>Add date</strong>. Drag the handle on the right edge of a step
        to reorder the list; on mobile, press and hold first. Tap the cross to
        remove a step; on mobile you can also swipe it left and tap{" "}
        <strong>Delete</strong>. <strong>Add</strong> creates a new step for
        you to edit.
      </p>
      <p>
        When you are happy with the plan, tap <strong>Save Task</strong>. If
        you started from an existing task, the steps are added to that task
        as subtasks, and any subtasks it already had are kept. If you started
        from scratch, Romi creates a new task with the steps attached. Either
        way you tick the subtasks off as normal; see{" "}
        <Link href="/docs/tasks">Your to-do list</Link>.
      </p>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Is task breakdown a paid feature?">
        <p>
          It is one of Romi&apos;s AI features, included in the free trial and
          in Romi Pro. See <Link href="/docs/subscription">Romi Pro &amp; billing</Link>{" "}
          for what each plan includes.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Why does Romi ask permission before my first breakdown?">
        <p>
          The first time you use an AI feature, a screen called{" "}
          <strong>Before you use Romi&apos;s AI</strong> explains what is shared
          and who it is shared with, and asks you to tap{" "}
          <strong>Agree &amp; continue</strong>. Your task text is only sent to
          the AI service once you have agreed.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
