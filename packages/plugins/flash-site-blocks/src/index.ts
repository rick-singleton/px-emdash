/**
 * @flash/site-blocks — Per-site custom block types
 *
 * Two exports:
 * - flashSiteBlocks() — PluginDescriptor for astro.config (build-time metadata)
 * - createPlugin() — ResolvedPlugin via definePlugin() (runtime implementation)
 *
 * This plugin is a TEMPLATE. At deploy time, Flash populates the
 * portableTextBlocks array with custom types for the specific site.
 * For assembly-mode deploys (all standard types), this stays empty.
 */

import { definePlugin } from "emdash";

/**
 * Build-time descriptor — goes into plugins: [] in astro.config.mjs.
 */
export function flashSiteBlocks() {
	return {
		id: "flash-site-blocks",
		version: "0.1.0",
		entrypoint: "@flash/site-blocks",
	};
}

/**
 * Runtime implementation — imported by the virtual module at build time.
 */
export function createPlugin(_options: Record<string, unknown> = {}) {
	return definePlugin({
		id: "flash-site-blocks",
		version: "0.1.0",
		admin: {
			portableTextBlocks: [
				// Populated at deploy time by assemble.emdash-project module.
				// Empty in the repo — custom types are per-site.
			],
		},
	});
}
