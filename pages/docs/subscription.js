import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: Romi Pro & billing. Registered in src/romi/docs/manifest.js under
 * Account & billing. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "your-free-trial", label: "Your free trial" },
  { id: "upgrade-to-pro", label: "Upgrade to Pro" },
  { id: "cancel-or-resume", label: "Cancel or resume" },
  { id: "good-to-know", label: "Good to know" },
];

export default function SubscriptionDocs() {
  return (
    <DocsArticle slug="subscription" sections={sections}>
      <p className="docs-lead">
        Romi has one paid plan, Romi Pro at US$19 a month: this page covers the
        free trial, how to upgrade, and how to cancel on the web or through
        Apple.
      </p>

      <h2 id="your-free-trial">Your free trial</h2>
      <p>
        Every new account starts with a free trial of Romi Pro. The{" "}
        <strong>Free Trial Active!</strong> window that appears after sign-up
        lists what is unlocked while it runs:{" "}
        <strong>Unlimited Conversations</strong>, <strong>Brain Dump</strong>,{" "}
        <strong>Task Breakdown</strong>, <strong>Automatic Scheduling</strong>,{" "}
        <strong>Deep Analytics</strong> and <strong>Auto Mood Detection</strong>.
        It also shows how many days you have left, and you can check the same
        countdown any time in <strong>Settings</strong> under{" "}
        <strong>Billing</strong>.
      </p>
      <Callout type="tip">
        <p>
          The trial needs no credit card and you will not be charged after it
          ends. You move to the free plan, which limits how much you can talk
          to Romi, and you can upgrade any time.
        </p>
      </Callout>

      <h2 id="upgrade-to-pro">Upgrade to Pro</h2>
      <p>
        Pro is a monthly subscription: US$19 per month. If you are outside the
        US, the plan sheet also shows an approximate price in your local
        currency. Pro renews automatically each month unless you cancel at
        least 24 hours before the period ends, and you can cancel anytime.
      </p>
      <ol className="docs-steps">
        <li>
          Open <strong>Settings</strong> and go to the <strong>Billing</strong>{" "}
          tab.
        </li>
        <li>
          Tap <strong>Upgrade to PRO</strong>. The same button is also in the
          sidebar.
        </li>
        <li>
          The plan sheet opens. Check the plan and price, then tap{" "}
          <strong>Get Started</strong>.
        </li>
        <li>
          On the web you are taken to Stripe&apos;s checkout page. In the iPhone
          app, Apple&apos;s payment sheet appears instead and the purchase is
          charged to your Apple Account.
        </li>
      </ol>
      <p>Access unlocks straight after payment.</p>

      <h2 id="cancel-or-resume">Cancel or resume</h2>
      <p>If you subscribed on the web, you cancel inside Romi:</p>
      <ol className="docs-steps">
        <li>
          Open <strong>Settings</strong> and go to <strong>Billing</strong>.
        </li>
        <li>
          Open <strong>Subscription status</strong>.
        </li>
        <li>
          Tap <strong>Cancel subscription</strong>.
        </li>
      </ol>
      <p>
        You keep Pro until the end of the billing period you have already paid
        for, and the tab shows the exact end date. If you change your mind
        before then, a <strong>Resume subscription</strong> button appears in
        the same place.
      </p>
      <Callout type="note">
        <p>
          Subscribed in the iPhone app? Apple handles your billing, so
          cancelling happens in your Apple settings: open{" "}
          <strong>Settings</strong> on your iPhone, tap your name, then{" "}
          <strong>Subscriptions</strong>, then <strong>Romi</strong>. The{" "}
          <strong>Billing</strong> tab&apos;s <strong>Manage Subscription</strong>{" "}
          button (<strong>Manage on Apple</strong> on the web) takes you to the
          right place. Apple subscriptions cannot be cancelled from Android or
          from Romi&apos;s website.
        </p>
      </Callout>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="What happens when my trial ends?">
        <p>
          You move to the free plan automatically and nothing is charged. All
          your tasks, notes and history stay exactly where they are. The free
          plan limits your AI conversations, and you can upgrade any time from{" "}
          <strong>Settings</strong>.
        </p>
      </DocsAccordion>
      <DocsAccordion title="I reinstalled the app and Pro is missing">
        <p>
          On iPhone, open the plan sheet and tap{" "}
          <strong>Restore Purchases</strong> at the bottom. Make sure you are
          signed in with the same Apple Account you used to subscribe.
        </p>
      </DocsAccordion>
      <DocsAccordion title="I have a code from my clinic or employer">
        <p>
          A promo code unlocks Pro without a card. How to redeem one is covered
          in <Link href="/docs/promo-codes">Promo codes</Link>.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
