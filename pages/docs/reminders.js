import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: Reminders & notifications. Registered in src/romi/docs/manifest.js
 * under Calendar. Covers the two separate systems: one-off task reminders
 * (the bell icon on schedule blocks) and the Notification intensity dial
 * that governs Romi's proactive nudges. Section ids must match the
 * `sections` prop for the on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "task-reminders", label: "Task reminders" },
  { id: "notification-intensity", label: "Notification intensity" },
  { id: "good-to-know", label: "Good to know" },
];

export default function RemindersDocs() {
  return (
    <DocsArticle slug="reminders" sections={sections}>
      <p className="docs-lead">
        Romi sends two kinds of notifications: one-off reminders you set on
        scheduled tasks, and Romi&apos;s own daily check-in nudges, which you
        control with the <strong>Notification intensity</strong> dial in
        Settings.
      </p>

      <h2 id="task-reminders">Task reminders</h2>
      <p>
        In <strong>Day</strong> view on the{" "}
        <Link href="/docs/schedule">Schedule page</Link>, any block with a start
        time has a bell icon. That bell is a one-off reminder for that task.
      </p>
      <ol className="docs-steps">
        <li>
          Open the Schedule page and find your task&apos;s block. On desktop
          the page is called <strong>Calendar</strong> in the sidebar.
        </li>
        <li>
          Tap the bell icon, labelled <strong>Set a reminder</strong>.
        </li>
        <li>
          The bell fills in and the label changes to{" "}
          <strong>Reminder on, tap to turn off</strong>. Tap it again at any
          time to cancel.
        </li>
      </ol>
      <p>
        Setting a reminder schedules two notifications on your phone: one 15
        minutes before the start time, and a second one at the start time
        itself.
      </p>
      <Callout type="note">
        <p>
          Task reminders always come through, even when your notification
          intensity is set to <strong>Off</strong>, and they never count
          towards your daily nudge limit.
        </p>
      </Callout>

      <h2 id="notification-intensity">Notification intensity</h2>
      <p>
        Separately from your own reminders, Romi can send proactive check-in
        nudges through the day. The intensity dial decides how many you get.
      </p>
      <ol className="docs-steps">
        <li>
          On desktop, tap <strong>Settings</strong> at the bottom of the
          sidebar. On your phone, tap the menu button at the top of the Home
          page, then tap <strong>Settings</strong>.
        </li>
        <li>
          Go to the <strong>Preferences</strong> tab.
        </li>
        <li>
          Tap <strong>Notification intensity</strong>.
        </li>
        <li>
          Pick a level on the dial: <strong>Low</strong> (1 nudge a day),{" "}
          <strong>Medium</strong> (up to 3 nudges a day) or{" "}
          <strong>High</strong> (up to 5 nudges a day).
        </li>
      </ol>
      <p>
        Changes apply right away for the rest of the day. To stop nudges
        entirely, tap <strong>Turn off notifications</strong> under the dial.
        Romi sends nothing until you tap{" "}
        <strong>Turn notifications back on</strong>.
      </p>
      <Callout type="tip">
        <p>
          The dial starts on <strong>Low</strong> unless you picked a
          different level when you first set up your account, so Romi begins
          with at most one nudge a day.
        </p>
      </Callout>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="I set a reminder but nothing arrived">
        <p>
          Reminders are delivered by your phone, so Romi needs notification
          permission. If you said no when the app first asked, allow
          notifications for Romi in your phone&apos;s settings, then set the
          reminder again.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Can I set a reminder from my computer?">
        <p>
          Yes. The bell works on desktop too. Your choice is saved to your
          account, and the Romi app on your phone schedules the notification
          the next time you open the app, so the reminder still arrives on
          your phone.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Why won't a reminder set for a task starting very soon?">
        <p>
          The first notification goes out 15 minutes before the start time. If the
          task starts in less than 15 minutes, that moment has already passed,
          so Romi cannot schedule the reminder. Move the block a little later,
          or skip the reminder and start the task.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
