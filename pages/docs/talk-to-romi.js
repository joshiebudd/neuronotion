import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: talking to Romi, by voice or by typing. Registered in
 * src/romi/docs/manifest.js under Getting started. Merges what used to be two
 * articles (voice conversations and text "brain dumps") into one, since both
 * are the same underlying conversation with a different input mode. Section
 * ids must match the `sections` prop for the on-this-page rail to highlight
 * correctly.
 */

const sections = [
  { id: "start-talking", label: "Start talking" },
  { id: "what-it-can-do", label: "What it can do" },
  { id: "turn-taking-mode", label: "Turn-taking mode" },
  { id: "review-and-save", label: "Review and save" },
  { id: "good-to-know", label: "Good to know" },
];

export default function TalkToRomiDocs() {
  return (
    <DocsArticle slug="talk-to-romi" sections={sections}>
      <p className="docs-lead">
        Talk or type to Romi about whatever is on your mind. There is no set
        script: it listens, then turns what you say into tasks, routines,
        notes, mood logs or a Regulate exercise, whichever fits.
      </p>

      <h2 id="start-talking">Start talking</h2>
      <ol className="docs-steps">
        <li>
          On the Home page, tap the Romi card that asks how it can help
          today.
        </li>
        <li>
          Tap <strong>Speak</strong> to talk out loud, or <strong>Type</strong>{" "}
          to write instead. Both open the same kind of conversation.
        </li>
        <li>
          Say or type whatever is on your mind, in any order. Plans, worries,
          a task, half-formed ideas all work.
        </li>
        <li>
          When you are done, tap <strong>I&apos;m finished</strong> (voice) or{" "}
          <strong>Organize Thought</strong> (text).
        </li>
      </ol>
      <Callout type="tip">
        <p>
          Not sure where to start? The voice window suggests openers like{" "}
          <em>Help me plan tomorrow</em>. When typing, you can paste in
          something messy, like meeting notes, instead of writing from
          scratch.
        </p>
      </Callout>
      <Callout type="note">
        <p>
          The first time you use an AI feature, Romi asks you to agree that
          your input is sent to a third-party AI service. More in{" "}
          <Link href="/docs/your-data">Your data &amp; privacy</Link>.
        </p>
      </Callout>

      <h2 id="what-it-can-do">What it can do</h2>
      <p>Ask for anything. Romi works out what you need and does it:</p>
      <ul>
        <li>Add or update tasks, with dates</li>
        <li><Link href="/docs/task-breakdown">Break a big task</Link> into smaller steps</li>
        <li>Build or adjust a routine</li>
        <li>Suggest a <Link href="/docs/regulate">Regulate</Link> exercise for how you are feeling</li>
        <li>Save a note</li>
        <li>Log your mood</li>
      </ul>
      <p>
        Each one appears as a card in the window as you talk or type, so you
        can see what Romi is doing as it happens.
      </p>

      <h2 id="turn-taking-mode">Turn-taking mode</h2>
      <p>
        In a voice conversation, Turn-taking mode is on by default: Romi stays
        quiet while you think. The status chip reads <strong>Your
        turn</strong> and the line under the mic says{" "}
        <em>Take your time. Pauses are fine</em>. When you want a reply, tap
        the send arrow.
      </p>
      <p>
        To have Romi reply whenever you pause instead, tap{" "}
        <strong>Conversation options</strong> at the top of the window and
        switch off <strong>Turn-taking mode</strong>. Your choice is saved for
        next time.
      </p>

      <h2 id="review-and-save">Review and save</h2>
      <p>
        When you finish, Romi shows you everything it made. Tap the pencil
        icon on anything to edit it, or the bin icon to remove it. Everything
        saves as Romi creates it, not just at the end, so delete anything you
        do not want before you close the window.
      </p>
      <p>
        A voice conversation lasts up to 10 minutes, with a warning 60 seconds
        before it ends. To keep going, tap <strong>Add one more
        thing</strong> on the recap screen and a new conversation starts.
        Typing has a 2,000 character limit per dump; if you have more to say,
        save what you have and start another.
      </p>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Can I change Romi's voice?">
        <p>
          Yes. Open <strong>Settings</strong>, go to the{" "}
          <strong>Preferences</strong> tab and open{" "}
          <strong>Romi&apos;s voice</strong>. Listen to the previews, filter by
          gender or accent, and pick one. It applies across Romi straight
          away.
        </p>
      </DocsAccordion>
      <DocsAccordion title="I closed the window mid-call by mistake">
        <p>
          Romi asks <strong>End the conversation?</strong> first, with the
          options <strong>Keep talking</strong> and <strong>End and
          review</strong>. Either way, everything you already said is saved.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Do I need Romi Pro to talk to Romi?">
        <p>
          Talking to Romi is one of Romi&apos;s AI features, part of{" "}
          <Link href="/docs/subscription">Romi Pro</Link>. Every new account
          starts with a free trial, so you can talk to Romi straight away.
        </p>
      </DocsAccordion>
      <DocsAccordion title="What happens if I bring up self-harm?">
        <p>
          Romi is a companion, and it cannot provide crisis support. If
          suicidal thoughts or self-harm come up, the conversation ends
          straight away and the app shows crisis helplines for your region.
          Please contact one of them, or a professional you trust.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
