/*
 * Docs manifest — the single source of truth for the /docs section. The sidebar,
 * the docs hub page, per-article prev/next links and the sitemap entries all
 * read from this list, so adding an article is: create pages/docs/<slug>.js,
 * add its entry here, append the URL to public/sitemap.xml.
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
      },
      {
        slug: "talk-to-romi",
        title: "Talking to Romi",
        description: "Talk or type about anything and let Romi sort it into tasks, routines, notes and more.",
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
      },
      {
        slug: "task-breakdown",
        title: "Breaking down a task",
        description: "Let Romi split a big task into small, doable subtasks.",
      },
      {
        slug: "review",
        title: "The Review tab",
        description: "Clear overdue tasks without guilt: reschedule or archive in bulk.",
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
      },
      {
        slug: "google-calendar",
        title: "Google Calendar sync",
        description: "Connect your Google account and keep both calendars in step.",
      },
      {
        slug: "reminders",
        title: "Reminders & notifications",
        description: "Task reminders, notification intensity, and turning Romi down.",
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
      },
      {
        slug: "regulate",
        title: "Regulate",
        description: "Breathwork, meditations and soundscapes for when your brain is loud.",
      },
      {
        slug: "check-ins",
        title: "Check-ins & journalling",
        description: "Daily check-ins, mood logs and guided journals.",
      },
      {
        slug: "notes",
        title: "Notes",
        description: "Capture notes, organise them into folders, and search everything.",
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
      },
      {
        slug: "promo-codes",
        title: "Promo codes",
        description: "Using a code from your clinic or employer to unlock Pro.",
      },
      {
        slug: "your-data",
        title: "Your data & privacy",
        description: "Manage Romi's memory, export your data, or delete your account.",
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
