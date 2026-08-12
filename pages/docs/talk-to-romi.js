import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: voice conversations with Romi. Registered in src/romi/docs/manifest.js
 * under Getting started. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "start-a-conversation", label: "Start a conversation" },
  { id: "turn-taking-mode", label: "Turn-taking mode" },
  { id: "ending-a-conversation", label: "Ending a conversation" },
  { id: "good-to-know", label: "Good to know" },
];

export default function TalkToRomiDocs() {
  return (
    <DocsArticle slug="talk-to-romi" sections={sections}>
      <p className="docs-lead">
        Tap <strong>Speak</strong> on the Home page to have a live voice
        conversation with Romi: say whatever is on your mind and it turns
        what you say into tasks, routines, notes and mood logs while you talk.
      </p>

      <h2 id="start-a-conversation">Start a conversation</h2>
      <ol className="docs-steps">
        <li>
          On the Home page, find the Romi card that asks how it can help
          today.
        </li>
        <li>
          Tap <strong>Speak</strong>. The <strong>Talk to Romi</strong> window
          opens.
        </li>
        <li>Press the mic when you&apos;re ready, then start talking.</li>
      </ol>
      <p>
        If you&apos;re not sure what to say, the window cycles through example
        openers, like{" "}
        <em>Help me plan tomorrow</em> or{" "}
        <em>Set up a morning routine for me</em>. Plans, worries and
        half-formed ideas all work. As you speak, cards appear in the window:
        tasks with dates, new routines and their steps, notes and mood logs.
        If it sounds like a breathing or grounding exercise would help, Romi
        suggests one, and you can tap <strong>Try it in Regulate</strong> to
        open it.
      </p>
      <Callout type="note">
        <p>
          The first time you use an AI feature, a screen called{" "}
          <strong>Before you use Romi&apos;s AI</strong> explains that what you
          say is sent to third-party AI services, and asks for your consent.
          More detail in <Link href="/docs/your-data">Your data &amp; privacy</Link>.
        </p>
      </Callout>

      <h2 id="turn-taking-mode">Turn-taking mode</h2>
      <p>
        Turn-taking mode is on by default. Romi stays quiet while you think:
        the status chip reads <strong>Your turn</strong> and the line under the
        mic says <em>Take your time. Pauses are fine</em>. When you want a
        reply, tap the send arrow.
      </p>
      <p>
        To have Romi reply whenever you pause instead, tap{" "}
        <strong>Conversation options</strong> at the top of the window and
        switch off <strong>Turn-taking mode</strong>. Your choice is saved for
        next time.
      </p>

      <h2 id="ending-a-conversation">Ending a conversation</h2>
      <p>
        Tap <strong>I&apos;m finished</strong> and Romi shows you everything
        it organised. If you close the window mid-call, it asks{" "}
        <strong>End the conversation?</strong> first, with the options{" "}
        <strong>Keep talking</strong> and <strong>End and review</strong>.
        Either way, everything you said is already saved.
      </p>
      <p>
        A conversation lasts up to 10 minutes. A warning appears 60 seconds
        before it ends, and everything still saves. To keep going, tap{" "}
        <strong>Add one more thing</strong> on the recap screen and a new
        conversation starts.
      </p>
      <Callout type="tip">
        <p>
          To type instead, tap <strong>Type</strong> on the same Home page
          card to do a <Link href="/docs/brain-dump">brain dump</Link> in text.
        </p>
      </Callout>

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
      <DocsAccordion title="Can I switch to chat mid-conversation?">
        <p>
          Not yet. The <strong>Switch to chat</strong> button at the top of
          the window opens a dialog for chat mode, which is coming soon. Tap{" "}
          <strong>Stay in voice for now</strong> to continue.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Do I need Romi Pro to talk to Romi?">
        <p>
          Voice conversations are one of Romi&apos;s AI features, which are
          part of <Link href="/docs/subscription">Romi Pro</Link>. Every new account
          starts with a free trial, so you can talk to Romi straight away.
        </p>
      </DocsAccordion>
      <DocsAccordion title="What happens if I bring up self-harm?">
        <p>
          Romi is a companion, and it cannot provide crisis support. If
          suicidal thoughts or self-harm come up, the call ends straight away
          and the app shows crisis helplines for your region. Please contact
          one of them, or a professional you trust.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
