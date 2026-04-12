import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
			plugins: [
				import("@flash/block-library").then((m) => m.flashBlockLibrary()),
				import("@flash/site-blocks").then((m) => m.flashSiteBlocks()),
				import("@emdash-cms/plugin-forms").then((m) => m.default()),
				import("@emdash-cms/plugin-webhook-notifier").then((m) => m.default()),
			],
		}),
	],
	devToolbar: { enabled: false },
});
