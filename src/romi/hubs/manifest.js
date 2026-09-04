/*
 * Hub (pillar) pages. Each hub is a rankable page in its own right, targeting a
 * broad query, and it is also the structural fix for the site's weakest signal:
 * before this, 16 posts had exactly one internal link pointing at them (the
 * /blogs index), so nothing accumulated internal authority.
 *
 * Every one of the 46 blog posts belongs to exactly one hub. `npm run build`
 * will fail loudly via the assertion at the bottom if a post is ever added
 * without being assigned, so this cannot silently drift.
 *
 * Structure per hub: query-shaped title/H1, a real intro that answers the broad
 * question (not just a list of links), posts grouped into sections with a
 * one-line "what this answers" for each, an FAQ block with FAQPage schema, and
 * sibling links across to the other hubs.
 *
 * EDITORIAL RULE, NON-NEGOTIABLE (Josh, 19 Aug 2026)
 * -------------------------------------------------
 * Romi is a wellbeing tool, not a medical device. The line sits at DIAGNOSIS and
 * SELF-ASSESSMENT, not at clinical subject matter generally (narrowed 19 Aug 2026
 * after Josh clarified). In anything authored here, do NOT write:
 *   - "the signs of ADHD", symptom lists, checklists, or diagnostic criteria
 *   - "do I have ADHD", "am I ADHD", quizzes, or anything inviting self-diagnosis
 *   - anything telling a reader whether they have ADHD or what a diagnosis means
 *     for them personally
 *
 * Allowed: cited research and science, emotional dysregulation, RSD, executive
 * function, medication as context rather than advice, and the realities of
 * assessment and waiting lists.
 *
 * This applies to copy WE author (intros, section titles, FAQs). It does not
 * apply to the titles of existing blog posts surfaced as cards here; those are
 * pre-existing editorial and Josh has confirmed they stay.
 *
 * Context: Romi's MHRA position turns on having no medical purpose. See the
 * MHRA medical-device memory before writing anything near this line.
 */

export const HUBS = [
  {
    slug: "understanding-adhd",
    query: "understanding adhd in adults",
    title: "Understanding ADHD in Adults: A Plain-English Guide | Romi",
    shortLabel: "Understanding ADHD",
    h1: "Understanding ADHD in Adults",
    description:
      "What living with ADHD as an adult actually feels like day to day, why it affects far more than focus, and where to start if you want things to feel easier.",
    kicker: "Start here",
    intro: [
      "Living with ADHD is not a problem of laziness, willpower or caring too little, and it rarely stays neatly inside work or study. It shows up in how the day gets planned, how time slips, how much energy small things cost and how much is left over afterwards.",
      "This is the starting point if you want to understand your own experience better. Everything here is written for adults, in plain English, by a team who live with ADHD themselves. It is about day-to-day life, not clinical advice.",
    ],
    sections: [
      {
        title: "What ADHD actually is",
        posts: [
          "adhd-is-not-what-you-think",
          "everyone-isnt-a-little-adhd",
          "how-adhd-affects-every-part-of-your-life",
          "is-adhd-a-superpower",
          "adhd-is-rising-why",
        ],
      },
      {
        title: "Making sense of it",
        posts: [
          "undiagnosed-adhd",
          "while-waiting-for-adhd-assessment",
          "adhd-diagnosis-not-symptom-reduction",
          "adhd-and-medication",
        ],
      },
      {
        title: "One person's story",
        posts: ["my-adhd-journey-story"],
      },
    ],
    faqs: [
      {
        q: "Why does ADHD affect so much more than focus?",
        a: "Because attention is only one part of it. The same difficulty holding things in mind also shapes how you plan a day, judge how long something will take, hold on to an intention, and recover after a hard afternoon. That is why it can show up in your washing-up, your friendships and your sleep, not only in your work.",
      },
      {
        q: "Why is it so tiring even when I have not done much?",
        a: "A lot of the effort is invisible. Holding things in your head, re-reading the same paragraph, deciding what to do next and keeping yourself on track all take energy, and none of it shows up as output. Many people finish the day exhausted with very little to point at, then feel guilty about it, which costs more energy again.",
      },
      {
        q: "Is ADHD the same for everybody?",
        a: "No, and comparing rarely helps. Two people can share the same broad experience and find completely different parts of it hard. Some struggle most with starting, others with stopping, others with the emotional swings. What matters is which parts are expensive for you, because that tells you where support is worth putting.",
      },
      {
        q: "Why do people say everybody is a little bit like this?",
        a: "Because most people occasionally lose their keys or put something off, so the words sound familiar. The difference is frequency and cost. Occasionally forgetting something is not the same as building a life around the assumption that you will, and the throwaway comparison can leave people feeling unreasonable for finding it genuinely hard.",
      },
      {
        q: "Where should I start if all of this feels overwhelming?",
        a: "Pick the one thing costing you the most and start there, rather than trying to fix everything at once. For most people that is sleep, or getting things out of their head and somewhere reliable. Both make everything else cheaper, and neither requires you to overhaul your life first.",
      },
    ],
  },

  {
    slug: "adhd-productivity",
    query: "adhd productivity and focus",
    title: "ADHD Productivity: How to Start, Focus and Finish | Romi",
    shortLabel: "Focus & getting things done",
    h1: "ADHD Productivity, Focus and Getting Things Done",
    description:
      "Why ordinary productivity advice fails ADHD brains, and what works instead: task paralysis, breaking work down, and systems that survive bad days.",
    kicker: "The biggest topic",
    intro: [
      "Most productivity advice was written for brains that respond to importance. ADHD brains respond to interest, urgency, novelty and challenge, which is why a task can be genuinely important to you and still be impossible to start.",
      "Nothing here asks you to try harder. These are the approaches that work with an ADHD brain rather than against it: reducing the cost of starting, getting things out of your head, protecting the few decisions that matter, and building systems that keep working on the days you cannot.",
    ],
    sections: [
      {
        title: "When you cannot start",
        posts: [
          "adhd-task-paralysis",
          "i-can-do-the-thing-but-my-brain-says-no",
          "something-for-when-your-brain-says-i-cant",
          "how-to-reduce-adhd-procrastination",
          "adhd-brains-dont-do-small",
          "why-simple-things-feel-impossible-with-adhd",
        ],
      },
      {
        title: "Deciding what to do",
        posts: [
          "adhd-prioritization-daily-non-negotiables",
          "adhd-the-hidden-cost-of-choice-the-gold-dust-theory",
          "why-adhd-task-breakdown-works",
          "adhd-idea-overwhelm-capture-system",
        ],
      },
      {
        title: "Systems that hold",
        posts: [
          "adhd-systems-not-goals",
          "do-your-systems-still-work-when-adhd-is-hitting-you-hard",
          "how-to-take-control-of-your-adhd",
          "adhd-wasting-time-disorganization",
          "how-to-make-adhd-motivation-useful",
          "23-ways-to-make-living-with-adhd-easier",
        ],
      },
      {
        title: "Your environment",
        posts: ["adhd-and-study-music", "adhd-fear-of-trying-new-things", "how-to-use-adhd-hyperfocus", "adhd-boredom"],
      },
    ],
    faqs: [
      {
        q: "Why can I not start things even when I want to?",
        a: "Starting is its own separate task. Before any work happens your brain has to work out what the first step is, roughly how long it will take and where to begin, and it has to produce the push to move. Wanting to do it does not supply any of that. Making the first step small enough that it feels almost silly is usually what breaks the deadlock.",
      },
      {
        q: "What kind of system actually lasts?",
        a: "The one that survives your worst week. Most systems fail because they quietly assume a consistent version of you that does not exist. Something that lasts needs an external memory so nothing depends on remembering, a small number of protected priorities, and a stripped-back version you can still manage on a bad day.",
      },
      {
        q: "How small should I break a task down?",
        a: "Until the first step is something you could do without thinking about it, and until it is a physical action rather than an outcome. \"Write the report\" is not a step. \"Open the document and write one bad sentence\" is. The aim is not a tidy plan, it is lowering the cost of starting.",
      },
      {
        q: "Why do I have loads of energy for new things and none for finishing?",
        a: "Because novelty is doing the work, and it runs out at exactly the point the boring middle begins. This is extremely common and it is not a character flaw. The practical answer is to turn the enthusiasm into a concrete plan while you still have it, and to lean on structure rather than motivation once it fades.",
      },
      {
        q: "Does music actually help, or am I kidding myself?",
        a: "For a lot of people it genuinely helps. Silence can leave too much room for your own thoughts, so something steady, familiar and fairly unchanging can occupy the part of your attention that would otherwise wander off. Music with lyrics or unpredictable structure tends to compete with the work rather than support it.",
      },
    ],
  },

  {
    slug: "adhd-emotional-regulation",
    query: "adhd emotional regulation",
    title: "ADHD and Emotions: Regulation, RSD and Overwhelm | Romi",
    shortLabel: "Emotions & regulation",
    h1: "ADHD, Emotions and Emotional Regulation",
    description:
      "Emotional dysregulation is a core part of ADHD, not a personality flaw. Rejection sensitivity, anxiety, burnout and overwhelm, and what actually helps.",
    kicker: "The half nobody warns you about",
    intro: [
      "Most descriptions of ADHD stop at attention. For a great many adults the harder part is emotional: reactions that arrive faster and louder than the situation warrants, criticism that lands like a physical blow, and a nervous system that seems stuck between overdrive and shutdown.",
      "This is not a personality flaw and it is not immaturity. The same brain systems that regulate attention also regulate emotion, which is why the two go together. Understanding that is usually the point where people stop blaming themselves.",
    ],
    sections: [
      {
        title: "Why emotions hit harder",
        posts: [
          "adhd-and-being-too-emotional",
          "rejection-sensitive-dysphoria-adhd",
          "stuck-in-fight-flight-or-scroll",
        ],
      },
      {
        title: "Anxiety and burnout",
        posts: ["adhd-and-anxiety-gang-up", "exhausted-again-do-differently"],
      },
      {
        title: "Being understood",
        posts: ["you-just-get-me", "want-a-chance-at-a-clearer-calmer-version-of-you"],
      },
    ],
    faqs: [
      {
        q: "Why do my reactions feel so much bigger than the situation?",
        a: "Because the feeling arrives at full volume before any of the reasoning catches up. Knowing perfectly well that a reaction is out of proportion does very little in the moment, which is the part people find most frustrating about themselves. It often passes as quickly as it arrived, leaving embarrassment behind it.",
      },
      {
        q: "Why does criticism land so hard?",
        a: "For many people a small piece of feedback does not feel small. It can land physically, like a drop in the stomach, and it can take hours to come back from something that was said in passing. If you have spent years being told you are too much or not trying hard enough, there is also a lot of history sitting underneath the comment.",
      },
      {
        q: "Why do I feel wound up and exhausted at the same time?",
        a: "It is a very common combination: too activated to rest, too depleted to do anything useful. It often follows a long stretch of pushing through, and it tends not to respond to willpower, because the part of you that would apply willpower is the part that has run out.",
      },
      {
        q: "What actually helps when I am already overwhelmed?",
        a: "Physical things usually work faster than thinking things. Slowing your out-breath, moving, cold water on your hands or face and firm pressure all act on the body directly. Trying to reason yourself out of the feeling tends to fail while you are in it, because reasoning is exactly what has gone offline.",
      },
      {
        q: "Why is masking so exhausting?",
        a: "Because it is continuous, unpaid work. Monitoring how you are coming across, editing yourself in real time and holding it together all day costs an enormous amount, and none of it is visible to anyone else. That is why the crash usually arrives afterwards, when you are finally somewhere you can stop.",
      },
    ],
  },

  {
    slug: "adhd-at-work",
    query: "adhd at work",
    title: "ADHD at Work: Rights, Disclosure and Support (UK) | Romi",
    shortLabel: "ADHD at work",
    h1: "ADHD at Work",
    description:
      "Whether to tell your employer, your rights under the Equality Act 2010, the adjustments that actually help, and what employers get wrong.",
    kicker: "For employees and employers",
    intro: [
      "Work is where ADHD gets expensive. Open-plan noise, unclear priorities, back-to-back meetings and unwritten expectations all press on exactly the functions ADHD makes harder, and most people compensate by masking until they burn out.",
      "This section covers both sides: what you can ask for and how to decide whether to say anything at all, and what employers should be doing regardless of what anyone has told them. UK-focused, including your rights under the Equality Act 2010.",
    ],
    sections: [
      {
        title: "If you have ADHD at work",
        posts: [
          "should-i-tell-my-employer-i-have-adhd",
          "reasonable-adjustments-for-adhd",
          "neurodivergent-graduate-first-job",
          "adhd-masking-and-imposter-syndrome",
        ],
      },
      {
        title: "If you employ neurodivergent people",
        posts: [
          "neurodiversity-in-the-workplace",
          "how-to-support-neurodivergent-employees-at-work",
          "neurodivergent-employees-risk-or-asset",
        ],
      },
      {
        title: "Working for yourself",
        posts: ["adhd-and-entrepreneurship"],
      },
    ],
    faqs: [
      {
        q: "Do I have to tell my employer I have ADHD?",
        a: "No. Disclosure is always your choice and there is no obligation to tell an employer anything. The trade-off is practical: an employer only has a duty to make reasonable adjustments once they know, or could reasonably be expected to know. Plenty of people ask for the adjustment they need without naming anything at all.",
      },
      {
        q: "Is ADHD covered by the Equality Act 2010?",
        a: "It can be. Under the Equality Act a condition counts as a disability where it has a substantial and long-term adverse effect on normal day-to-day activities, which brings protection from discrimination and a right to reasonable adjustments. It turns on individual impact rather than a label. This is general information, not legal advice.",
      },
      {
        q: "What adjustments actually make a difference?",
        a: "The most effective ones tend to be free. Written follow-ups after verbal instructions, one clear priority instead of a long undifferentiated list, flexibility over start times, a quieter space or noise-cancelling headphones, and permission to break long meetings up. Access to Work funding can cover coaching and equipment.",
      },
      {
        q: "Can I be dismissed over ADHD-related performance issues?",
        a: "Not straightforwardly, where the Equality Act applies and your employer is aware. They would be expected to have made reasonable adjustments first. Employment tribunals citing neurodivergent conditions have risen sharply, and failure to adjust is a common reason employers lose. General information, not legal advice.",
      },
      {
        q: "Should employers support people who have no formal paperwork?",
        a: "Yes, and it is usually the pragmatic choice. Waits are long, so a policy that requires paperwork first leaves people unsupported for a long time. Most useful adjustments are cheap, help everyone in the team, and do not require anyone to explain anything personal to receive them.",
      },
    ],
  },

  {
    slug: "adhd-daily-life",
    query: "adhd routines habits and sleep",
    title: "ADHD Daily Life: Sleep, Routines and Habits | Romi",
    shortLabel: "Sleep, routines & habits",
    h1: "ADHD Daily Life: Sleep, Routines and Habits",
    description:
      "Sleep, routines, habits and the basics that make everything else with ADHD easier, and how to build structure you can actually keep.",
    kicker: "The foundations",
    intro: [
      "Everything else in ADHD management sits on top of a small number of unglamorous basics. Sleep in particular is not one tip among many: when it goes, focus, emotional regulation and impulse control all go with it.",
      "The difficulty is that standard advice about routines and habits assumes consistency, which is the exact thing ADHD makes unreliable. These are approaches built for a brain that will not do the same thing at the same time every day, and that does not need to.",
    ],
    sections: [
      {
        title: "Sleep",
        posts: ["adhd-sleep-foundation", "how-i-fixed-my-sleep-with-adhd"],
      },
      {
        title: "Routines and habits",
        posts: [
          "adhd-and-routines",
          "building-habits-that-stick-4-laws",
          "the-adhd-goldilocks-zone",
        ],
      },
      {
        title: "The basics underneath",
        posts: ["three-pillars-adhd-control"],
      },
    ],
    faqs: [
      {
        q: "Why does my brain switch on the moment I get into bed?",
        a: "Usually because bedtime is the first point all day with nothing else coming in, so your head fills the gap itself and everything you did not finish arrives at once. Getting it all out onto paper or into an app before bed tends to help more than most standard sleep advice, because thoughts stop circling once they are safely somewhere else.",
      },
      {
        q: "Why does everything feel harder after a bad night?",
        a: "Because sleep sits underneath everything else. After a poor night, focus, patience, appetite and decision-making all get worse together, which is why one bad night can turn an ordinary day into a write-off. It is also why sleep is usually the highest-value thing to work on first.",
      },
      {
        q: "Why do my routines stop working after a few weeks?",
        a: "Usually because the routine was running on novelty or motivation, and both fade. A routine that survives needs a trigger in the world rather than a remembered intention, and a reduced version you can still do on a bad day. Anything all-or-nothing eventually becomes nothing.",
      },
      {
        q: "How do I build a habit that actually sticks?",
        a: "Attach it to something that already reliably happens, make the first action almost effortless, and make it visible so it does not rely on memory. The biggest single change is letting an imperfect version still count, because the usual failure point is abandoning it entirely the first time the streak breaks.",
      },
      {
        q: "How much structure is the right amount?",
        a: "Enough to take decisions off your plate, not so much that it becomes another thing to fail at. Rigid hour-by-hour plans usually collapse on the first disrupted day and take your confidence with them. A few fixed anchor points with slack in between tends to survive contact with real life.",
      },
    ],
  },
];

export const HUB_BY_SLUG = Object.fromEntries(HUBS.map((h) => [h.slug, h]));

/** Every post slug that belongs to a hub, flattened. */
export const HUBBED_POSTS = HUBS.flatMap((h) => h.sections.flatMap((s) => s.posts));

/** post slug -> hub, so a post can link up to its parent. */
export const HUB_FOR_POST = Object.fromEntries(
  HUBS.flatMap((h) => h.sections.flatMap((s) => s.posts.map((p) => [p, h])))
);

// A post assigned to two hubs would split its own internal-link signal, which is
// the exact problem hubs exist to fix. Fail the build rather than let it happen.
const seen = new Set();
for (const slug of HUBBED_POSTS) {
  if (seen.has(slug)) {
    throw new Error(`Hub manifest: "${slug}" is assigned to more than one hub.`);
  }
  seen.add(slug);
}
