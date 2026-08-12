import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: the Analytics page. Registered in src/romi/docs/manifest.js under
 * Daily support. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "what-each-chart-shows", label: "What each chart shows" },
  { id: "choose-what-you-see", label: "Choose what you see" },
  { id: "find-a-pattern", label: "Find a pattern" },
  { id: "good-to-know", label: "Good to know" },
];

export default function AnalyticsDocs() {
  return (
    <DocsArticle slug="analytics" sections={sections}>
      <p className="docs-lead">
        The Analytics page shows your tasks, mood, routines and sleep as
        charts, built from what you already do in Romi.
      </p>

      <p>
        <strong>Analytics</strong> is in the desktop sidebar. On mobile, tap
        the menu button at the top of <strong>Home</strong> to open the{" "}
        <strong>Menu</strong>, then tap the <strong>Analytics</strong> tile.
      </p>

      <h2 id="what-each-chart-shows">What each chart shows</h2>
      <p>
        Every chart is built from things you already do in the app. There is
        nothing extra to fill in.
      </p>
      <ul>
        <li>
          <strong>Productivity</strong>: tasks completed plus Romi
          conversations each day.
        </li>
        <li>
          <strong>Organization</strong>: tasks created plus do dates set.
        </li>
        <li>
          <strong>Mood Trend</strong>: the balance of positive and negative
          moods from your mood logs.
        </li>
        <li>
          <strong>Routine Completion</strong>: how much of your{" "}
          <Link href="/docs/routines">routines</Link> you completed each day.
        </li>
        <li>
          <strong>Regulation Exercises</strong>:{" "}
          <Link href="/docs/regulate">Regulate</Link> exercises completed per day.
        </li>
        <li>
          <strong>Anxiety Rating</strong>: your average anxiety score from
          daily check-ins, out of 5.
        </li>
        <li>
          <strong>Sleep Rating</strong>: your average sleep score from
          check-ins, out of 10.
        </li>
        <li>
          <strong>Medication Consistency</strong>: the share of check-ins where
          you marked your medication as taken.
        </li>
      </ul>
      <p>
        Above the charts, a tile for each metric shows your figure for the
        selected period and how it compares with the period before. Tap a tile
        to open a detailed view.
      </p>
      <Callout type="tip">
        <p>
          The anxiety, sleep and medication charts come from your daily
          check-in, and Mood Trend comes from your mood logs. Both are quick
          daily logs; see <Link href="/docs/check-ins">Check-ins &amp;
          journalling</Link>.
        </p>
      </Callout>

      <h2 id="choose-what-you-see">Choose what you see</h2>
      <ol className="docs-steps">
        <li>
          Tap <strong>Choose what to measure</strong> above the tiles.
        </li>
        <li>
          Tick or untick a metric to show or hide its tile and chart.
        </li>
        <li>
          Next to <strong>Show:</strong>, pick <strong>7 days</strong>,{" "}
          <strong>14 days</strong> or <strong>30 days</strong> to change the
          time range for every chart.
        </li>
      </ol>

      <h2 id="find-a-pattern">Find a pattern</h2>
      <p>
        Once you have logged activity on at least 14 of the last 30 days, a
        card appears at the top of the page. Tap the refresh button on the
        card and Romi checks your recent data for connections between
        metrics, for example whether your mood is higher on days you finish a
        routine, or whether weekends look different from weekdays.
      </p>
      <p>
        Only patterns that pass statistical checks are reported. If nothing
        stands out clearly enough yet, the card says so; keep logging and try
        again in a few days. When several patterns are found, tapping the
        button again shows the next one.
      </p>
      <Callout type="note">
        <p>
          The pattern check always looks at your last 30 days, whatever time
          range the charts are set to.
        </p>
      </Callout>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="Why are my charts empty?">
        <p>
          Usually there is not enough data yet. Each chart draws from one
          source, so an empty <strong>Routine Completion</strong> chart just
          means no routines were logged in that period. If you have no activity
          at all, the page shows <strong>No data yet</strong> until you do.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Why can't I see the medication chart?">
        <p>
          If you said during onboarding that you do not take medication, Romi
          hides <strong>Medication Consistency</strong> from the picker, the
          tiles and the charts, because there is nothing to measure.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Why do some tiles and charts have different names?">
        <p>
          Two metrics carry slightly different labels in different places. The{" "}
          <strong>Mood Score</strong> tile pairs with the{" "}
          <strong>Mood Trend</strong> chart, and the{" "}
          <strong>Routine Adherence</strong> tile pairs with the{" "}
          <strong>Routine Completion</strong> chart. Each pair shows the same
          data.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
