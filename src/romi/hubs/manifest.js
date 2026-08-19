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
 */

export const HUBS = [
  {
    slug: "understanding-adhd",
    query: "understanding adhd in adults",
    title: "Understanding ADHD in Adults: A Plain-English Guide | Romi",
    h1: "Understanding ADHD in Adults",
    description:
      "What adult ADHD actually is, why diagnoses are rising, what a diagnosis does and does not change, and what to do while you wait for an assessment.",
    kicker: "Start here",
    intro: [
      "ADHD in adults is not a problem of laziness, willpower or caring too little. It is a difference in how the brain manages attention, motivation, emotion and time, and it shows up across the whole of life rather than only at a desk.",
      "This is the starting point if you are newly diagnosed, waiting for an assessment, or still working out whether any of this applies to you. Everything here is written for adults, in plain English, by a team that lives with ADHD.",
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
        title: "Diagnosis, assessment and medication",
        posts: [
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
        q: "What are the main signs of ADHD in adults?",
        a: "The most common adult signs are difficulty starting tasks even when they matter, losing track of time, forgetting things you have just been told, intense emotional reactions that pass quickly, restlessness, and a pattern of underperforming relative to your own ability. Adults are often better at masking than children, so ADHD frequently shows up as exhaustion and self-criticism rather than obvious hyperactivity.",
      },
      {
        q: "Is ADHD actually becoming more common?",
        a: "Diagnoses are rising sharply, but the evidence suggests the underlying rate is fairly stable. What has changed is recognition. Adults who were missed as children, particularly women and anyone who was academically able, are now being identified. Modern life also makes existing symptoms more visible by removing the external structure that used to hold people up.",
      },
      {
        q: "Does an ADHD diagnosis reduce your symptoms?",
        a: "No. A diagnosis explains your symptoms, it does not treat them. It gives you an accurate framework, access to treatment options and legal protection under the Equality Act 2010, but the day after diagnosis your brain works exactly as it did the day before. What reduces symptoms is treatment, structure and support built around how your brain actually functions.",
      },
      {
        q: "Can you manage ADHD without medication?",
        a: "Many adults do, and many combine both. Sleep, exercise, external memory systems, reduced decision load and honest structure all have real effects. Medication is not a moral question and it is not a failure to take it or to stop. The useful question is what actually improves your life.",
      },
      {
        q: "How long is the NHS ADHD assessment waiting list?",
        a: "Waits vary enormously by area and many adults wait years rather than months. Right to Choose can shorten it in some regions. You do not have to wait passively: sleep, structure, external memory and support all help regardless of whether you have a formal diagnosis yet.",
      },
    ],
  },

  {
    slug: "adhd-productivity",
    query: "adhd productivity and focus",
    title: "ADHD Productivity: How to Start, Focus and Finish | Romi",
    h1: "ADHD Productivity, Focus and Getting Things Done",
    description:
      "Why ordinary productivity advice fails ADHD brains, and what works instead: beating task paralysis, breaking work down, prioritising, and building systems that survive bad days.",
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
        posts: ["adhd-and-study-music", "adhd-fear-of-trying-new-things"],
      },
    ],
    faqs: [
      {
        q: "Why can't I start tasks even when I want to?",
        a: "That is task paralysis, and it is an executive function problem rather than a motivation problem. Starting a task requires your brain to sequence it, estimate it and generate the initial push, and ADHD makes each of those harder. The task being important is not enough, because ADHD brains are not reliably activated by importance. Shrinking the first step until it feels almost trivial is the most effective way through.",
      },
      {
        q: "What is the best productivity system for ADHD?",
        a: "The one that survives your worst week. Most systems fail not because they are badly designed but because they assume a consistent version of you that does not exist. A system that works for ADHD needs an external memory so nothing depends on remembering, a small number of protected priorities, and a low-effort mode for bad days.",
      },
      {
        q: "How do you break down a task with ADHD?",
        a: "Break it down until the first step is small enough that starting feels almost silly, and make each step a physical action rather than an outcome. \"Write the report\" is not a step. \"Open the document and write one bad sentence\" is. The point is not planning, it is lowering the cost of starting.",
      },
      {
        q: "Why do I have so much energy for new projects and none for finishing?",
        a: "Novelty is one of the few reliable triggers for ADHD attention, and it fades exactly when the boring middle begins. This is normal and it is not a character flaw. The fix is to capture the enthusiasm as a concrete plan while you have it, and to build in external structure that carries the work once the novelty has gone.",
      },
      {
        q: "Does listening to music actually help ADHD focus?",
        a: "For many people, yes. Silence leaves too much room for internal distraction, so a steady, familiar and largely unchanging soundtrack can occupy the part of your attention that would otherwise wander. Music with lyrics or unpredictable structure tends to compete with focus rather than support it.",
      },
    ],
  },

  {
    slug: "adhd-emotional-regulation",
    query: "adhd emotional regulation",
    title: "ADHD and Emotions: Regulation, RSD and Overwhelm | Romi",
    h1: "ADHD, Emotions and Emotional Regulation",
    description:
      "Emotional dysregulation is a core part of ADHD, not a personality flaw. Rejection sensitivity, anxiety, burnout and nervous system overwhelm, and what actually helps.",
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
        q: "Is emotional dysregulation part of ADHD?",
        a: "Yes. Although it is not in the formal diagnostic criteria, emotional dysregulation is recognised as a core feature of ADHD by most clinicians and researchers working with adults. The brain systems that manage attention also manage emotional response, so difficulty regulating one usually means difficulty regulating the other.",
      },
      {
        q: "What is rejection sensitive dysphoria?",
        a: "RSD is the intense, sometimes physically painful response to real or perceived rejection, criticism or failure that many people with ADHD experience. It is not an official diagnosis, but it describes something very real: the reaction is disproportionate, it arrives instantly, and knowing it is disproportionate does not reduce it in the moment.",
      },
      {
        q: "Why does ADHD so often come with anxiety?",
        a: "Partly because they genuinely co-occur, and partly because ADHD manufactures anxiety. Missed deadlines, forgotten commitments and years of unpredictable performance create a well-founded fear of being caught out. The two then feed each other: anxiety makes starting harder, which creates more to be anxious about.",
      },
      {
        q: "What does ADHD burnout feel like?",
        a: "It is usually described as running out of the capacity to mask and compensate, rather than ordinary tiredness. Tasks you normally manage become impossible, emotional regulation collapses first, and rest does not seem to fix it. It tends to follow long periods of working in ways that fight your brain rather than simply working too much.",
      },
      {
        q: "How do you calm down an ADHD nervous system?",
        a: "Physical approaches usually work faster than cognitive ones when you are already dysregulated. Slowing the out-breath, movement, cold water and pressure all act on the body directly. Talking yourself out of the feeling tends to fail in the moment, because the thinking part of the brain is the part that has gone offline.",
      },
    ],
  },

  {
    slug: "adhd-at-work",
    query: "adhd at work",
    title: "ADHD at Work: Rights, Disclosure and Support (UK) | Romi",
    h1: "ADHD at Work",
    description:
      "Whether to tell your employer, your rights under the Equality Act 2010, the adjustments that actually help, and what employers get wrong about neurodivergent staff.",
    kicker: "For employees and employers",
    intro: [
      "Work is where ADHD gets expensive. Open-plan noise, unclear priorities, back-to-back meetings and unwritten expectations all press on exactly the functions ADHD makes harder, and most people compensate by masking until they burn out.",
      "This section covers both sides: what you can ask for and how to decide whether to disclose, and what employers should be doing regardless of whether anyone has a diagnosis. UK-focused, including your rights under the Equality Act 2010.",
    ],
    sections: [
      {
        title: "If you have ADHD at work",
        posts: [
          "should-i-tell-my-employer-i-have-adhd",
          "neurodivergent-graduate-first-job",
          "adhd-masking-and-imposter-syndrome",
        ],
      },
      {
        title: "If you employ neurodivergent people",
        posts: [
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
        a: "No. Disclosure is always your choice and there is no legal obligation to tell an employer about a diagnosis. The trade-off is that an employer only has a duty to make reasonable adjustments once they know, or could reasonably be expected to know, about your condition.",
      },
      {
        q: "Is ADHD a disability under UK law?",
        a: "It can be. Under the Equality Act 2010 a condition counts as a disability if it has a substantial and long-term adverse effect on your ability to carry out normal day-to-day activities. ADHD frequently meets that test, which brings protection from discrimination and a right to reasonable adjustments. It depends on individual impact rather than the diagnosis label alone.",
      },
      {
        q: "What reasonable adjustments help someone with ADHD?",
        a: "The most effective ones are usually free: written follow-ups after verbal instructions, clear single priorities rather than long undifferentiated lists, flexibility over start times, noise-cancelling headphones or a quieter space, and permission to break long meetings up. Access to Work funding can cover coaching and equipment.",
      },
      {
        q: "Can I be dismissed for ADHD-related performance issues?",
        a: "Not straightforwardly, if your ADHD meets the Equality Act definition of disability and your employer knows about it. They would first need to have made reasonable adjustments. Employment tribunals citing neurodivergent conditions have risen sharply, and failure to adjust is a common reason employers lose. This is general information rather than legal advice.",
      },
      {
        q: "Should employers support staff who have no formal diagnosis?",
        a: "Yes, and it is usually the pragmatic choice. UK assessment waits run to years, so a diagnosis-gated policy leaves people unsupported for a long time. Most effective adjustments are cheap, benefit everyone, and do not require anyone to disclose a medical condition to receive them.",
      },
    ],
  },

  {
    slug: "adhd-daily-life",
    query: "adhd routines habits and sleep",
    title: "ADHD Daily Life: Sleep, Routines and Habits | Romi",
    h1: "ADHD Daily Life: Sleep, Routines and Habits",
    description:
      "Sleep, routines, habits and the basics that make everything else with ADHD easier. Why standard habit advice fails, and how to build structure you can actually keep.",
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
        q: "Why can't I fall asleep with ADHD?",
        a: "The most common reason is that bedtime is the first moment all day without external stimulation, so your brain starts generating its own. Delayed circadian rhythm is also more common in ADHD, meaning your body genuinely is not ready to sleep at a conventional hour. Getting everything out of your head onto paper or into an app before bed helps more than most sleep hygiene advice.",
      },
      {
        q: "How does sleep affect ADHD symptoms?",
        a: "Substantially, and in both directions. Poor sleep worsens attention, emotional regulation, impulse control and decision-making, which are the same functions ADHD already affects, so the effect compounds. ADHD then makes sleep harder, which is what makes it a cycle rather than a one-off problem.",
      },
      {
        q: "Why do ADHD routines stop working after a few weeks?",
        a: "Usually because the routine depended on novelty or motivation, and both fade. A routine that lasts needs an external trigger rather than a remembered intention, and it needs a reduced version you can still do on a bad day. An all-or-nothing routine will become nothing.",
      },
      {
        q: "How do you build a habit when you have ADHD?",
        a: "Attach it to something that already reliably happens, make the first action almost effortless, and make it visible so it does not depend on memory. The most important adjustment is allowing an imperfect version to still count, because ADHD brains tend to abandon a habit entirely once the streak breaks.",
      },
      {
        q: "How much structure does an ADHD brain need?",
        a: "Enough to remove decisions, not so much that it becomes another thing to fail at. Rigid hour-by-hour schedules usually collapse on the first disrupted day and take your confidence with them. A small number of fixed anchor points with flexibility in between tends to survive contact with real life.",
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
