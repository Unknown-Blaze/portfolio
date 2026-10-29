// Builds the page's JSON-LD (schema.org) from src/content.ts, so the structured data never drifts from the text.
// The Vite build calls buildStructuredData() (see vite.config.ts): it inlines the result in index.html and writes
// dist/structured-data.json. Run `node scripts/structured-data.mjs` to print it (Node 22.18+ reads the .ts directly).
// Never add a phone number or an address here.

export const SITE_URL = "https://unknown-blaze.github.io/portfolio/";

/** The most CreativeWork nodes to emit: the first projects in `work` that have a public link. */
const MAX_WORKS = 6;

/** Drops the no-break spaces and word joiners the page uses for line breaking. */
const plain = (text) => text.replaceAll("\u2060", "").replaceAll("\u00a0", " ");

/** Absolute URL for a file in public/. */
const abs = (path) => new URL(path, SITE_URL).href;

/**
 * @param {typeof import("../src/content.ts")} content
 * @returns {Record<string, unknown>}
 */
export function buildStructuredData(content) {
  const { person, now, education, work } = content;
  const personId = `${SITE_URL}#person`;
  const siteId = `${SITE_URL}#website`;
  const current = now[0];
  const school = education[0];

  const personNode = {
    "@type": "Person",
    "@id": personId,
    name: person.name,
    description: plain(person.breadth),
    ...(current ? { jobTitle: current.role, worksFor: { "@type": "Organization", name: current.org } } : {}),
    ...(school ? { alumniOf: { "@type": "CollegeOrUniversity", name: school.name } } : {}),
    email: `mailto:${person.email}`,
    url: SITE_URL,
    image: abs(person.photo.src),
    sameAs: [person.github, person.linkedin],
  };

  const siteNode = {
    "@type": "WebSite",
    "@id": siteId,
    name: person.name,
    url: SITE_URL,
    inLanguage: "en",
    author: { "@id": personId },
  };

  const workNodes = work
    .filter((w) => w.links.length > 0)
    .slice(0, MAX_WORKS)
    .map((w) => {
      const links = w.links.filter((l) => l.href.startsWith("https://"));
      // The live product is the work's URL; code and store pages are other places the same work lives.
      const live = links.find((l) => l.label.startsWith("Live")) ?? links[0];
      const others = links.filter((l) => l !== live).map((l) => l.href);
      const image = w.image ?? w.gallery?.[0];
      return {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}#work-${w.id}`,
        name: plain(w.name),
        description: plain(w.summary),
        ...(live ? { url: live.href } : {}),
        ...(others.length > 0 ? { sameAs: others } : {}),
        ...(image ? { image: abs(image.src) } : {}),
        ...(w.domains.length > 0 ? { keywords: w.domains.join(", ") } : {}),
        author: { "@id": personId },
        isPartOf: { "@id": siteId },
      };
    });

  return { "@context": "https://schema.org", "@graph": [personNode, siteNode, ...workNodes] };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const content = await import("../src/content.ts");
  process.stdout.write(`${JSON.stringify(buildStructuredData(content), null, 2)}\n`);
}
