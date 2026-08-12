import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: promo codes. Registered in src/romi/docs/manifest.js under
 * Account & billing. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "apply-your-code", label: "Apply your code" },
  { id: "while-active", label: "While it's active" },
  { id: "when-it-expires", label: "When it expires" },
  { id: "good-to-know", label: "Good to know" },
];

export default function PromoCodesDocs() {
  return (
    <DocsArticle slug="promo-codes" sections={sections}>
      <p className="docs-lead">
        A promo code, usually given to you by your clinic or employer, unlocks
        Romi Pro without a subscription: enter it once in Settings and Pro stays
        on until the code runs out.
      </p>

      <h2 id="apply-your-code">Apply your code</h2>
      <ol className="docs-steps">
        <li>
          Open Settings: tap <strong>Settings</strong> in the desktop sidebar,
          or open the Menu on your phone and tap <strong>Settings</strong>.
        </li>
        <li>
          Go to the <strong>Billing</strong> tab.
        </li>
        <li>
          Under <strong>Promo</strong>, tap <strong>Promo code</strong> to
          expand it.
        </li>
        <li>
          Type your code into the <strong>Have a code?</strong> field.
        </li>
        <li>
          Tap <strong>Apply code</strong>. A confirmation appears and PRO access
          switches on straight away.
        </li>
      </ol>
      <Callout type="tip">
        <p>
          Capital letters do not matter. Whatever you type is converted to
          capitals for you, so <kbd className="docs-kbd">romi26</kbd> and{" "}
          <kbd className="docs-kbd">ROMI26</kbd> are the same code.
        </p>
      </Callout>

      <h2 id="while-active">While your code is active</h2>
      <p>
        The <strong>Promo code</strong> section in <strong>Billing</strong> now
        shows an <strong>Active</strong> badge, your code, and how long is left,
        for example <strong>Expires in 12 days</strong>. Codes without an end
        date show <strong>No expiration</strong>.
      </p>
      <p>
        If your code came from a clinic, the <strong>Account</strong> tab also
        gains an <strong>Associated with</strong> field showing which clinic
        your account is linked to.
      </p>
      <p>You can only have one promo code applied at a time.</p>

      <h2 id="when-it-expires">When your code expires</h2>
      <p>
        On the day your code expires, or the day before, Romi shows a{" "}
        <strong>Subscription Expiring</strong> warning with the exact date and
        time. You can upgrade from there, or tap{" "}
        <strong>Remind me later</strong>.
      </p>
      <p>
        Once the code has expired, a <strong>Subscription Expired</strong>{" "}
        message confirms your account has moved to the free plan and the code
        has been cleared. From here you can upgrade like any other user; see{" "}
        <Link href="/docs/subscription">Romi Pro &amp; billing</Link> for plans and
        prices.
      </p>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Can I apply a second code?">
        <p>
          Not while one is active. Once your current code expires and is
          cleared, you can apply a new one.
        </p>
      </DocsAccordion>
      <DocsAccordion title="I already pay for Pro. Can I use a code?">
        <p>
          No. Promo codes are for new or trial users only, so the app will not
          accept a code on a paid subscription. This stops you spending a code
          on access you already have.
        </p>
      </DocsAccordion>
      <DocsAccordion title="My code will not apply">
        <p>
          Check every character first. If the code is typed correctly, it may
          have expired or reached its usage limit. Codes are managed by whoever
          issued them, so ask your clinic or employer for a replacement.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
