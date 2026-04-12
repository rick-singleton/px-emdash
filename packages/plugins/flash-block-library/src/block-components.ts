/**
 * Block type rendering components for the Flash block library.
 * Exported via the plugin componentsEntry — EmDash merges these
 * into the PortableText component map at build time.
 */

import FlashHero from "./components/FlashHero.astro";
import FlashServicesGrid from "./components/FlashServicesGrid.astro";
import FlashImageText from "./components/FlashImageText.astro";
import FlashContactForm from "./components/FlashContactForm.astro";
import FlashCtaBanner from "./components/FlashCtaBanner.astro";
import FlashStatsRow from "./components/FlashStatsRow.astro";

export const blockComponents = {
	"flash.hero": FlashHero,
	"flash.services-grid": FlashServicesGrid,
	"flash.image-text": FlashImageText,
	"flash.contact-form": FlashContactForm,
	"flash.cta-banner": FlashCtaBanner,
	"flash.stats-row": FlashStatsRow,
};
