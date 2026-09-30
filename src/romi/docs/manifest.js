/*
 * Docs manifest — the single source of truth for the /docs section. The sidebar,
 * the docs hub page, per-article prev/next links and the sitemap entries all
 * read from this list, so adding an article is: create pages/docs/<slug>.js,
 * add its entry here, append the URL to public/sitemap.xml.
 *
 * `description` is the one-liner shown on the docs hub cards. `metaDescription`
 * is the longer search snippet (meta description, OG, JSON-LD); keep it
 * between 110 and 160 characters so Ahrefs and Google do not flag it as short.
 *
 * Order matters: categories and articles render in the order they appear, and
 * prev/next navigation follows the flattened order below.
 */

export const DOCS_CATEGORIES = [
  {
    title: "Getting started",
    articles: [
      {
        slug: "getting-started",
        title: "Start here",
        description: "What Romi is and a few things to try after signing up.",
        metaDescription:
          "New to Romi? How your first session works: the Home screen, the setup questions, and the first few things to try in the ADHD companion app.",
      },
      {
        slug: "talk-to-romi",
        title: "Talking to Romi",
        description: "Talk or type about anything and let Romi sort it into tasks, routines, notes and more.",
        metaDescription:
          "Talk or type to Romi about anything on your mind. Romi turns it into tasks, routines, notes, mood logs or a Regulate exercise, and you review before saving.",
      },
    ],
  },
  {
    title: "Tasks",
    articles: [
      {
        slug: "tasks",
        title: "Your to-do list",
        description: "Tabs, Do Days, priorities, repeating tasks and archiving.",
        metaDescription:
          "How the Romi to-do list works: tabs that filter to today or this week, adding tasks, Do Days, priorities, repeating tasks and archiving what is done.",
      },
      {
        slug: "task-breakdown",
        title: "Breaking down a task",
        description: "Let Romi split a big task into small, doable subtasks.",
        metaDescription:
          "Stuck on a big task? Ask Romi to break it down into small, timed steps, tell it what the task involves, then edit the plan until it feels doable.",
      },
      {
        slug: "review",
        title: "The Review tab",
        description: "Clear overdue tasks without guilt: reschedule or archive in bulk.",
        metaDescription:
          "The Review tab gathers every overdue task in one place. Reschedule or archive each one, or clear the whole queue at once.",
      },
    ],
  },
  {
    title: "Calendar",
    articles: [
      {
        slug: "schedule",
        title: "The Schedule page",
        description: "Day and Week views, adding blocks, and moving things around.",
        metaDescription:
          "Plan your day on Romi's Schedule page: switch between Day and Week views, tap a time slot to add a block, then drag and resize it until it fits.",
      },
      {
        slug: "google-calendar",
        title: "Google Calendar sync",
        description: "Connect your Google account and keep both calendars in step.",
        metaDescription:
          "Connect Google Calendar to Romi once and both stay in sync: tasks you schedule in Romi appear in Google, and your Google events show on your Schedule.",
      },
      {
        slug: "reminders",
        title: "Reminders & notifications",
        description: "Task reminders, notification intensity, and turning Romi down.",
        metaDescription:
          "How Romi notifications work: set one-off reminders on scheduled tasks, and use the Notification intensity dial in Settings to turn daily nudges up or down.",
      },
    ],
  },
  {
    title: "Daily support",
    articles: [
      {
        slug: "routines",
        title: "Routines",
        description: "Build step-by-step routines and run them in focus mode.",
        metaDescription:
          "Build a step-by-step routine in Romi, such as getting ready in the morning, then press play to run it in focus mode one step at a time.",
      },
      {
        slug: "regulate",
        title: "Regulate",
        description: "Breathwork, meditations and soundscapes for when your brain is loud.",
        metaDescription:
          "Romi's Regulate page has guided breathwork, mind resets, soundscapes and meditations to help you calm down, focus, or wind down for sleep.",
      },
      {
        slug: "check-ins",
        title: "Check-ins & journalling",
        description: "Daily check-ins, mood logs and guided journals.",
        metaDescription:
          "Track how you feel in Romi with a daily check-in that can suggest an exercise, guided journals, a one-tap mood log and a monthly symptom check-in.",
      },
      {
        slug: "notes",
        title: "Notes",
        description: "Capture notes, organise them into folders, and search everything.",
        metaDescription:
          "Keep thoughts and plans in Romi Notes: create a note, search everything you have written, and organise notes into folders when you want more structure.",
      },
    ],
  },
  {
    title: "Account & billing",
    articles: [
      {
        slug: "subscription",
        title: "Romi Pro & billing",
        description: "The free trial, upgrading, and how to cancel on web or iPhone.",
        metaDescription:
          "Everything about Romi Pro billing: how the free trial works, how to upgrade, and how to cancel or resume your subscription on the web or through Apple.",
      },
      {
        slug: "promo-codes",
        title: "Promo codes",
        description: "Using a code from your clinic or employer to unlock Pro.",
        metaDescription:
          "Got a promo code from your clinic or employer? Enter it once in Romi's Settings to unlock Romi Pro without a subscription until the code expires.",
      },
      {
        slug: "your-data",
        title: "Your data & privacy",
        description: "Manage Romi's memory, export your data, or delete your account.",
        metaDescription:
          "Control your data in Romi: see and edit what Romi remembers, choose whether AI features process your input, export everything, or delete your account.",
      },
    ],
  },
];

// Flattened, in reading order — powers prev/next and slug lookups.
export const DOCS_ARTICLES = DOCS_CATEGORIES.flatMap((category) =>
  category.articles.map((article) => ({ ...article, category: category.title }))
);

export function getDocsArticle(slug) {
  return DOCS_ARTICLES.find((article) => article.slug === slug);
}

export function getDocsNeighbours(slug) {
  const index = DOCS_ARTICLES.findIndex((article) => article.slug === slug);
  return {
    prev: index > 0 ? DOCS_ARTICLES[index - 1] : null,
    next: index >= 0 && index < DOCS_ARTICLES.length - 1 ? DOCS_ARTICLES[index + 1] : null,
  };
}
