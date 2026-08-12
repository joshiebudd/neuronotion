import { DocsArticle } from "../../src/romi";
import Link from "next/link";
import { Callout } from "../../src/romi";
import { DocsAccordion } from "../../src/romi";

/*
 * Docs: the Notes page. Registered in src/romi/docs/manifest.js under
 * Daily support. Section ids must match the `sections` prop for the
 * on-this-page rail to highlight correctly.
 */

const sections = [
  { id: "find-and-search", label: "Find and search" },
  { id: "create-a-note", label: "Create a note" },
  { id: "folders", label: "Organise with folders" },
  { id: "good-to-know", label: "Good to know" },
];

export default function NotesDocs() {
  return (
    <DocsArticle slug="notes" sections={sections}>
      <p className="docs-lead">
        Notes is where you keep thoughts, plans, or anything else you write
        down. Create a note, search it later, and file it into a folder if
        you want structure.
      </p>

      <h2 id="find-and-search">Find and search your notes</h2>
      <p>
        Open the page from <strong>Note Docs</strong> in the desktop sidebar.
        On mobile, tap the menu button at the top of <strong>Home</strong> to
        open the <strong>Menu</strong>, then tap the <strong>Notes</strong>{" "}
        tile. At the top there are two tabs: <strong>Notes</strong>, which
        lists every note you have with the most recently updated first, and{" "}
        <strong>Folders</strong>.
      </p>
      <p>
        On the <strong>Notes</strong> tab, tap the search icon and start
        typing. Search looks through both titles and note content, and it
        always covers all your notes, including ones filed in folders. The
        list shows your six most recent notes; tap <strong>Show more</strong>{" "}
        to see the rest.
      </p>

      <h2 id="create-a-note">Create a note</h2>
      <ol className="docs-steps">
        <li>Tap <strong>New note</strong>.</li>
        <li>
          Give it a title. This is the only required part. You can also pick
          an emoji, add a tag, or choose a folder.
        </li>
        <li>Write whatever you like in the body.</li>
        <li>Tap <strong>Save note</strong>.</li>
      </ol>
      <p>
        Tap any note to open it. From there you can{" "}
        <strong>Edit note</strong>, <strong>Move</strong> it to a folder, or{" "}
        <strong>Delete</strong> it.
      </p>
      <Callout type="tip">
        <p>
          You do not always have to type notes yourself. During a{" "}
          <Link href="/docs/brain-dump">brain dump</Link>, Romi can save ideas as
          notes as well as tasks, and they appear on this page like any other.
        </p>
      </Callout>

      <h2 id="folders">Organise with folders</h2>
      <p>
        Folders are optional. A note does not need to be in a folder, and the{" "}
        <strong>Notes</strong> tab always shows everything in one list. When
        you do want structure:
      </p>
      <ol className="docs-steps">
        <li>
          Go to the <strong>Folders</strong> tab and tap{" "}
          <strong>New folder</strong>.
        </li>
        <li>
          Name it, pick a colour, then tap <strong>Create folder</strong>.
        </li>
        <li>
          Tap the folder to see what is inside. A note created here goes
          straight into this folder.
        </li>
      </ol>
      <p>
        To file an existing note, open it and tap <strong>Move</strong>, then
        choose a folder in the <strong>Move to folder</strong> panel. Pick{" "}
        <strong>No folder</strong> to take it back out again.
      </p>

      <h2 id="good-to-know">Good to know</h2>
      <DocsAccordion title="What happens if I delete a folder?">
        <p>
          Only the folder disappears. Any notes inside it are kept and move
          back to the main <strong>Notes</strong> list, so deleting a folder
          never deletes a note.
        </p>
      </DocsAccordion>
      <DocsAccordion title="Can I get a deleted note back?">
        <p>
          No. Deleting a note asks you to confirm first, and once you confirm
          it cannot be undone. If you are unsure, move the note to a folder
          instead of deleting it.
        </p>
      </DocsAccordion>
    </DocsArticle>
  );
}
