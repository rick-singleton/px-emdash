/**
 * @flash/block-library — Curated block type library for Flash sites
 *
 * Registers all standard Portable Text block types with EmDash.
 * Each block type has an Astro rendering component + admin editor fields.
 *
 * This plugin ships with every Flash site. It IS the design system.
 * AI agents use the block type catalog for assembly and editing.
 */

import { definePlugin } from "emdash";

export function flashBlockLibrary() {
	return definePlugin({
		id: "flash-block-library",
		version: "0.1.0",
		admin: {
			portableTextBlocks: [
				// Block types will be registered here as they are built in P3.
				// Each entry: { type, label, icon, description, fields }
				// See /root/FLASH_BLOCK_ARCHITECTURE.md for the full tier list.
			],
		},
	});
}
