import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: Your data & privacy. Registered in src/romi/docs/manifest.js under
 * Account & billing. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "romis-memory", label: "Romi's memory" },
  { id: "ai-consent", label: "AI consent" },
  { id: "export-or-delete", label: "Export or delete" },
  { id: "good-to-know", label: "Good to know" },
];

export default function YourDataDocs() {
  return (
    <DocsArticle slug="your-data" sections={sections}>
      <p className="docs-lead">
        You can see and edit what Romi remembers about you, choose whether AI
        features can process your input, download a copy of everything, or
        delete your account entirely.
      </p>

      <h2 id="romis-memory">What Romi remembers</h2>
      <p>
        Romi saves details from your conversations and uses them in later
        sessions. You can review, edit or delete anything it has saved:
      </p>
      <ol className="docs-steps">
        <li>
          Open <strong>Settings</strong> and go to the{" "}
          <strong>Preferences</strong> tab.
        </li>
        <li>
          Tap <strong>Memory</strong> (labelled &ldquo;What Romi remembers
          about you&rdquo;).
        </li>
        <li>
          Tap <strong>Manage memories</strong>.
        </li>
      </ol>
      <p>
        You can search your memories, edit any entry, or tap{" "}
        <strong>Add memory</strong> to store something yourself. Before a
        delete, Romi shows you exactly what it will forget and asks you to
        confirm. Deleting a memory can&apos;t be undone.
      </p>
      <Callout type="tip">
        <p>
          If Romi keeps bringing up something you would rather it dropped,
          delete that memory here.
        </p>
      </Callout>

      <h2 id="ai-consent">AI features and consent</h2>
      <p>
        The first time you use an AI feature, such as{" "}
        <Link href="/docs/talk-to-romi">talking to Romi</Link>, breaking down
        a task, or journalling help, a screen called{" "}
        <strong>Before you use Romi&apos;s AI</strong> asks you to agree that
        your input is sent to a third-party AI service before it can process
        it.
      </p>
      <p>
        Tap <strong>Agree &amp; continue</strong> to switch AI features on, or{" "}
        <strong>Not now</strong> to decline. Declining still lets you use the
        rest of Romi; only the AI features are unavailable. A decline is not
        stored, so the next time you try an AI feature the same screen
        appears again.
      </p>

      <h2 id="export-or-delete">Export or delete your data</h2>
      <p>
        Both tools are in <strong>Settings</strong> on the{" "}
        <strong>Danger</strong> tab. To download a copy of everything:
      </p>
      <ol className="docs-steps">
        <li>
          Open <strong>Settings</strong> and go to the <strong>Danger</strong>{" "}
          tab.
        </li>
        <li>
          Tap <strong>Export your data</strong>.
        </li>
        <li>
          Tap <strong>Download my data (JSON)</strong> to download everything
          as a single JSON file.
        </li>
      </ol>
      <p>To delete your account:</p>
      <ol className="docs-steps">
        <li>
          On the same <strong>Danger</strong> tab, turn on the{" "}
          <strong>Delete my account</strong> toggle.
        </li>
        <li>
          Read the warning, then type{" "}
          <kbd className="docs-kbd">DELETE MY ACCOUNT</kbd> into the
          confirmation box.
        </li>
        <li>
          Tap <strong>Yes, Delete My Account</strong> on the final warning.
          Romi permanently erases your account and all data, then signs you
          out.
        </li>
      </ol>
      <Callout type="warning">
        <p>
          Deletion is permanent and cannot be undone. It also does not cancel
          an active Romi Pro subscription by itself, so cancel first. This
          matters most if you subscribed in the iPhone app, because Apple
          handles that billing. How to cancel on web or iPhone is covered in{" "}
          <Link href="/docs/subscription">Romi Pro &amp; billing</Link>.
        </p>
      </Callout>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Where are my cookie preferences?">
        <p>
          Open <strong>Settings</strong>, go to the <strong>Account</strong>{" "}
          tab and tap <strong>Cookie &amp; privacy preferences</strong>. These
          are the same choices as the cookie banner: essential cookies stay on
          so the app works, and you can turn optional categories on or off.
          While you are signed in, your choices are stored on your account.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Who do I contact about privacy?">
        <p>
          Email <a href="mailto:josh@romiadhd.com">josh@romiadhd.com</a> with
          any question about your personal data, including anything the
          export and deletion tools do not cover.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
