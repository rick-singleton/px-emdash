/**
 * @flash/site-blocks — Per-site custom block types
 *
 * This plugin is a TEMPLATE. On deploy, Flash writes custom block type
 * registrations here if the page builder designed novel types for this site.
 * For assembly-mode deploys (all standard types), this plugin stays empty.
 *
 * Custom types that prove useful across sites get promoted to @flash/block-library.
 */

import { definePlugin } from "emdash";

export function flashSiteBlocks() {
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
