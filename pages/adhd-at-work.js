import { HubPage } from "../src/romi/components/hub/HubPage";
import { HUB_BY_SLUG } from "../src/romi/hubs/manifest";

// Hub (pillar) page. All content lives in src/romi/hubs/manifest.js.
export default function AdhdAtWorkHub() {
  return <HubPage hub={HUB_BY_SLUG["adhd-at-work"]} />;
}
