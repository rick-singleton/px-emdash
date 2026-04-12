/**
 * @flash/block-library — Curated block type library for Flash sites
 *
 * Two exports:
 * - flashBlockLibrary() — PluginDescriptor for astro.config (build-time metadata)
 * - createPlugin() — ResolvedPlugin via definePlugin() (runtime implementation)
 */

import { definePlugin } from "emdash";

/**
 * Build-time descriptor — goes into plugins: [] in astro.config.mjs.
 * Returns metadata only. No definePlugin() call.
 */
export function flashBlockLibrary() {
	return {
		id: "flash-block-library",
		version: "0.1.0",
		entrypoint: "@flash/block-library",
		componentsEntry: "@flash/block-library/block-components",
	};
}

/**
 * Runtime implementation — imported by the virtual module at build time.
 * Called as createPlugin({}) by the generated code.
 */
export function createPlugin(_options: Record<string, unknown> = {}) {
	return definePlugin({
		id: "flash-block-library",
		version: "0.1.0",
		admin: {
			portableTextBlocks: [
				{
					type: "flash.hero",
					label: "Hero Section",
					icon: "layout",
					description: "Full-width hero with headline, CTA, and optional background image",
					fields: [
						{ type: "text_input", action_id: "headline", label: "Headline" },
						{ type: "text_input", action_id: "subheadline", label: "Subheadline" },
						{ type: "text_input", action_id: "primaryCta.label", label: "Primary CTA Label" },
						{ type: "text_input", action_id: "primaryCta.url", label: "Primary CTA URL", placeholder: "https://... or tel:..." },
						{ type: "text_input", action_id: "secondaryCta.label", label: "Secondary CTA Label" },
						{ type: "text_input", action_id: "secondaryCta.url", label: "Secondary CTA URL" },
						{ type: "text_input", action_id: "backgroundImage", label: "Background Image URL" },
					],
				},
				{
					type: "flash.services-grid",
					label: "Services Grid",
					icon: "grid-four",
					description: "Card grid with icons, titles, and descriptions",
					fields: [
						{ type: "text_input", action_id: "headline", label: "Headline" },
						{ type: "text_input", action_id: "subheadline", label: "Subheadline" },
					],
				},
				{
					type: "flash.image-text",
					label: "Image + Text",
					icon: "columns",
					description: "Split section with image on one side and text on the other",
					fields: [
						{ type: "text_input", action_id: "headline", label: "Headline" },
						{ type: "text_input", action_id: "body", label: "Body Text", multiline: true },
						{ type: "text_input", action_id: "image", label: "Image URL" },
						{ type: "select", action_id: "imagePosition", label: "Image Position", options: [
							{ label: "Left", value: "left" },
							{ label: "Right", value: "right" },
						]},
						{ type: "text_input", action_id: "cta.label", label: "CTA Label" },
						{ type: "text_input", action_id: "cta.url", label: "CTA URL" },
					],
				},
				{
					type: "flash.contact-form",
					label: "Contact Form",
					icon: "envelope",
					description: "Contact section with phone, email, address, and form",
					fields: [
						{ type: "text_input", action_id: "headline", label: "Headline" },
						{ type: "text_input", action_id: "subheadline", label: "Subheadline" },
						{ type: "text_input", action_id: "phone", label: "Phone Number" },
						{ type: "text_input", action_id: "email", label: "Email Address" },
						{ type: "text_input", action_id: "address", label: "Address", multiline: true },
						{ type: "text_input", action_id: "formId", label: "EmDash Form ID" },
					],
				},
				{
					type: "flash.cta-banner",
					label: "CTA Banner",
					icon: "megaphone",
					description: "Full-width call-to-action strip with gradient background",
					fields: [
						{ type: "text_input", action_id: "headline", label: "Headline" },
						{ type: "text_input", action_id: "subheadline", label: "Subheadline" },
						{ type: "text_input", action_id: "cta.label", label: "CTA Label" },
						{ type: "text_input", action_id: "cta.url", label: "CTA URL" },
					],
				},
				{
					type: "flash.stats-row",
					label: "Stats Row",
					icon: "chart-bar",
					description: "Number counters for key metrics",
					fields: [],
				},
			],
		},
	});
}
