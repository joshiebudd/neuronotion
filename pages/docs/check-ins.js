import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: Check-ins & journalling. Registered in src/romi/docs/manifest.js.
 * Covers the Daily Check in, Log mood, guided journals and the monthly
 * symptom check-in. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "daily-check-in", label: "The daily check-in" },
  { id: "journalling", label: "Guided journalling" },
  { id: "symptom-check-in", label: "Monthly symptom check-in" },
  { id: "good-to-know", label: "Good to know" },
];

export default function CheckInsDocs() {
  return (
    <DocsArticle slug="check-ins" sections={sections}>
      <p className="docs-lead">
        The <strong>Regulate</strong> page has three ways to track how you
        feel: a daily check-in that can suggest an exercise afterwards,
        guided journals, and a one-tap mood log.
      </p>

      <h2 id="daily-check-in">The daily check-in</h2>
      <p>
        Tap <strong>Check in</strong> at the top of the <strong>Regulate</strong>{" "}
        page to open the <strong>Daily Check in</strong>. It is a short set of
        questions covering your anxiety, sleep, medication, mood and
        anything else affecting your day; the mood question is optional, so
        tap <strong>Skip mood logging</strong> if you would rather not
        answer it. Your answers are saved to your logs, so you can look back
        on how you have been doing. If they suggest you could use one, Romi
        offers a matching Regulate protocol to start straight away.
      </p>
      <Callout type="tip">
        <p>
          Short on time? Tap <strong>Log mood</strong> instead. It opens just
          the mood step with a <strong>Submit</strong> button, so you can
          record how you feel in a few seconds.
        </p>
      </Callout>

      <h2 id="journalling">Guided journalling</h2>
      <p>
        Tap <strong>Journal</strong> on the <strong>Regulate</strong> page and
        pick a type: <strong>Daily ADHD Journal</strong> to reflect on your day,{" "}
        <strong>ADHD Symptom Journal</strong> to track how symptoms affect
        you, <strong>Processing Negative Events</strong> to work through hard
        situations, or <strong>Journal from Scratch</strong> to write freely
        without prompts.
      </p>
      <p>
        You can also build your own. Tap{" "}
        <strong>Your Custom Journals</strong>, then{" "}
        <strong>Create New Template</strong> to write a template with up to 9
        of your own questions.
      </p>
      <p>
        After choosing a type, pick <strong>Voice Mode</strong> to talk to
        Romi, or <strong>Text Mode</strong> for guided prompts to write
        against. Voice Mode needs a PRO plan; see{" "}
        <Link href="/docs/subscription">Plans &amp; billing</Link>.
      </p>

      <h2 id="symptom-check-in">Monthly symptom check-in</h2>
      <p>
        Now and then Romi asks a longer questionnaire about your ADHD
        symptoms over recent weeks. The first time it is called{" "}
        <strong>Personalise your experience</strong> and sets your baseline.
        After that it returns as the <strong>Monthly Check-in</strong> so Romi
        can compare each month with the last.
      </p>
      <p>
        A second section is optional: tap{" "}
        <strong>Continue to Section 2</strong> or <strong>Skip for now</strong>.
        If you close part-way through, your answers so far are saved. Not the
        right moment? Tap <strong>Snooze</strong> on the prompt to put it off
        for a week.
      </p>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Where do my entries go?">
        <p>
          Everything is saved in <strong>Your logs</strong> on the{" "}
          <strong>Regulate</strong> page. Tap the history icon next to{" "}
          <strong>Protocols</strong>, then filter by{" "}
          <strong>Daily Check-Ins</strong>, <strong>Journals</strong> or{" "}
          <strong>Moods</strong>.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Can I add my own emotions?">
        <p>
          Yes. On the mood step, tap <strong>Add custom emotion</strong>, then
          give it a name, an emoji and a category. Use{" "}
          <strong>Manage custom emotions</strong> to remove ones you no longer
          need.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Is any of this shared with anyone?">
        <p>
          Your answers are private. If you joined through a clinic, it only
          ever sees anonymised averages across all patients, never your
          individual answers. More detail in{" "}
          <Link href="/docs/your-data">Your data &amp; privacy</Link>.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
