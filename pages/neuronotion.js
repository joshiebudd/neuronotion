import ClaudiaHomepage from "./claudianewlp";
import NeuronotionRebrandBanner from "../components/NeuronotionRebrandBanner";

/*
 * The archived Neuro Notion / Claudia homepage, now served at /neuronotion
 * (it used to be the site root). Renders the original homepage plus a sticky
 * rebrand banner that carries visitors over to the new Romi landing at /.
 */
export default function NeuronotionArchive() {
  return (
    <>
      <ClaudiaHomepage />
      <NeuronotionRebrandBanner />
    </>
  );
}
