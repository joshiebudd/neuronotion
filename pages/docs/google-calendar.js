import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: Google Calendar sync. Registered in src/romi/docs/manifest.js under
 * Calendar. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "connect-your-account", label: "Connect your account" },
  { id: "what-syncs", label: "What syncs" },
  { id: "multiple-accounts", label: "Multiple accounts" },
  { id: "good-to-know", label: "Good to know" },
];

export default function GoogleCalendarDocs() {
  return (
    <DocsArticle slug="google-calendar" sections={sections}>
      <p className="docs-lead">
        Connect your Google account once and both calendars stay in sync: tasks
        you schedule in Romi appear in Google Calendar, and your Google events
        show up on your <Link href="/docs/schedule">Schedule page</Link>.
      </p>

      <h2 id="connect-your-account">Connect your account</h2>
      <ol className="docs-steps">
        <li>
          Open <strong>Settings</strong> and go to the <strong>Extras</strong>{" "}
          tab.
        </li>
        <li>
          Under <strong>Integrations</strong>, tap{" "}
          <strong>Google Calendar sync</strong>.
        </li>
        <li>
          Tap <strong>Connect Google Calendar</strong> and sign in. Any Google
          account works.
        </li>
        <li>
          Turn on <strong>Enable task sync</strong>.
        </li>
      </ol>
      <Callout type="note">
        <p>
          You can also get there from the Schedule page (called{" "}
          <strong>Calendar</strong> in the desktop sidebar). Tap the three-dot
          button at the top right, then <strong>Calendar sync</strong>. If
          nothing is connected yet, <strong>Connect a calendar</strong> takes
          you straight to Settings.
        </p>
      </Callout>

      <h2 id="what-syncs">What syncs</h2>
      <p>
        With <strong>Enable task sync</strong> on, every task you schedule in
        Romi is written to your Google Calendar. Only main tasks sync; subtasks
        stay inside Romi. In the other direction, your Google events appear on
        the Schedule page alongside your Romi blocks.
      </p>
      <p>
        Tap a Google event in Romi to see its details. From there,{" "}
        <strong>Edit event</strong> lets you change the title, start and end,
        or delete the event, and your changes save back to Google. Two limits:
        for an all-day event only the title can be edited, and edits to a
        repeating event apply to that occurrence only.
      </p>
      <Callout type="tip">
        <p>
          Once connected, your Google events and your Romi tasks both show on
          the Schedule page.
        </p>
      </Callout>

      <h2 id="multiple-accounts">Multiple accounts</h2>
      <p>
        You can link more than one Google account, for example work and
        personal. In <strong>Settings</strong> then <strong>Extras</strong>,
        open <strong>Google Calendar sync</strong> and tap{" "}
        <strong>Add account</strong>.
      </p>
      <p>
        With more than one account linked, a <strong>Tasks sync to</strong>{" "}
        picker appears in the same section. New tasks are written to the
        account you pick; tasks you have already scheduled stay where they are.
        On the Schedule page, the <strong>Calendar sync</strong> menu lists
        each connected calendar with its own toggle, so you can hide or show
        its events without disconnecting anything. Your primary account is
        marked <strong>Your tasks sync here</strong>.
      </p>
      <p>
        To unlink an extra account, tap <strong>Remove</strong> next to it. To
        remove the primary connection, tap <strong>Disconnect</strong>.
      </p>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Can I pause syncing without disconnecting?">
        <p>
          Yes. Turn off <strong>Enable task sync</strong> in Settings to stop
          new tasks going to Google, or use the per-calendar toggles on the
          Schedule page to hide a calendar&apos;s events. Your connection stays in
          place either way.
        </p>
      </DocsAccordion>
      <DocsAccordion title="What about Outlook or Apple Calendar?">
        <p>
          Google Calendar is the only calendar integration right now. Outlook
          and iCal are listed under <strong>Coming soon</strong> in the{" "}
          <strong>Extras</strong> tab of Settings.
        </p>
      </DocsAccordion>
      <DocsAccordion title="My sync stopped working">
        <p>
          Sometimes Google asks you to sign in again. When that happens, the{" "}
          <strong>Google Calendar sync</strong> section in Settings shows a{" "}
          <strong>Reconnect Google Calendar</strong> button. Tap it, sign in,
          and sync carries on from there.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
