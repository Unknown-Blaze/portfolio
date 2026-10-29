import { createHash } from "node:crypto";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import * as content from "./src/content.ts";
import { buildStructuredData } from "./scripts/structured-data.mjs";

// Preload the body font so text does not reflow (and shift the hero figure) when it swaps in.
function preloadBodyFont(): Plugin {
  return {
    name: "preload-body-font",
    apply: "build",
    transformIndexHtml(_html, ctx) {
      const file = Object.keys(ctx.bundle ?? {}).find((f) => /inter-latin-wght-.*\.woff2$/.test(f));
      if (!file) return [];
      return [
        {
          tag: "link",
          attrs: { rel: "preload", href: `/portfolio/${file}`, as: "font", type: "font/woff2", crossorigin: "" },
          injectTo: "head",
        },
      ];
    },
  };
}

// JSON-LD built from src/content.ts: inlined in the page and also written to dist/structured-data.json.
function structuredData(): Plugin {
  const json = JSON.stringify(buildStructuredData(content));
  return {
    name: "structured-data",
    transformIndexHtml() {
      // "<" is escaped so no string in content.ts can close the script element early.
      return [
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: json.replace(/</g, "\\u003c"),
          injectTo: "head",
        },
      ];
    },
    generateBundle() {
      this.emitFile({ type: "asset", fileName: "structured-data.json", source: `${json}\n` });
    },
  };
}

// GitHub Pages cannot send headers, so the policy rides in a <meta>. Only the built page gets it: the dev server
// injects its own inline scripts. Inline scripts that run (the theme bootstrap) are allowed by their hash.
function contentSecurityPolicy(): Plugin {
  return {
    name: "content-security-policy",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        const hashes = [
          ...html.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/g),
        ]
          .map(
            (m) =>
              `'sha256-${createHash("sha256")
                .update(m[1] ?? "")
                .digest("base64")}'`,
          )
          .join(" ");
        const policy = [
          "default-src 'self'",
          `script-src 'self' ${hashes}`,
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data:",
          "font-src 'self'",
          "connect-src 'self'",
          "manifest-src 'self'",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join("; ");
        return html.replace(
          /(<meta charset="UTF-8" \/>)/,
          `$1\n    <meta http-equiv="Content-Security-Policy" content="${policy}" />`,
        );
      },
    },
  };
}

// Served from https://unknown-blaze.github.io/portfolio/, so every asset URL needs the repo prefix.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), preloadBodyFont(), structuredData(), contentSecurityPolicy()],
  build: { target: "es2020", cssMinify: true },
});
