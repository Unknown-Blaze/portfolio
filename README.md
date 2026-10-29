# portfolio

The personal site of Rudra Prasadh Ganesh, software engineer working across AI, full-stack and robotics:
<https://unknown-blaze.github.io/portfolio/>

![The site's opening sheet: name, role, and a robot laying a grout line across a tile grid](public/og.png)

The page is drawn as an engineering sheet. Each section opens with a title block, sections are
separated by dimension lines, key numbers carry annotation callouts, and the hero shows a small
robot driving tile joints and laying a grout line. Light and dark themes follow the system and
can be switched by hand. Nothing is taken from a template.

## Stack

- Vite, React 18, TypeScript (strict)
- One plain stylesheet with custom properties (`src/styles.css`); no CSS framework or UI kit
- Inter and JetBrains Mono, self-hosted Latin subsets (`src/fonts`, SIL Open Font License)
- No router, no analytics, no cookies

## Content

All text, links and numbers live in [`src/content.ts`](src/content.ts). Change that one file;
the components only lay it out. Images go in `public/img` as WebP with their width and height
recorded next to them in `content.ts`.

The structured data (schema.org JSON-LD: a `Person`, the `WebSite`, and a `CreativeWork` for each
of the first six projects in `work` that has a public link) is generated from `content.ts` at
build by [`scripts/structured-data.mjs`](scripts/structured-data.mjs). The build inlines it in
`index.html` and also writes `dist/structured-data.json`. Print it with
`npm run structured-data`. Never put a phone number or an address in it.

## Design language

Keep new sections consistent with the drawing-sheet conventions:

- **Sheet numbers.** Each section is a numbered sheet (`sheets` in `content.ts`): `01 Now` to
  `09 Contact`, with the hero as sheet `00`. A section opens with `SheetHead` (title block
  `SHT nn · LABEL · REV yyyy-mm`; the revision is `REVISION` in `content.ts`) and sheets are
  separated by a `Dim` dimension line labelled `nn → nn`. A new section takes the next number
  and needs its entry in `sheets`, its `SheetHead` and the `Dim` lines either side.
- **Plates.** Work with no public screenshot gets a drawn plate instead: a system diagram as a
  pair of SVGs, `public/plates/<name>-light.svg` and `<name>-dark.svg`, named in the work
  entry's `system` field, or a drawn React plate (`RobotPlate`; `Beyond code` uses `PianoPlate`,
  `CubePlate` and `KnightTour` the same way). Plates use only the palette below and the same line weights as the existing ones.
- **Colour code.** One kind of work, one colour, on every sheet (`KINDS` in `content.ts`,
  `[data-kind]` in `src/styles.css`): industry teal, research amber, own venture ink (drawn
  hollow), campus muted. Tag a role or a number with its `kind`; do not invent new colours.
  The palette is the custom properties at the top of `src/styles.css`, with a light and a dark
  set; anything new must work in both themes.

## Résumé PDF

The Contact section links `public/Rudra_Prasadh_Ganesh_Resume.pdf`, the two-page general
résumé (`software.tex` in the private LaTeX résumé sources). To refresh it:

1. Copy the LaTeX folder somewhere temporary; never edit the originals for the web copy.
2. In the copy, remove the phone number: drop `\cvPhone\ ·` from the header in
   `resume-preamble.tex` and set `\cvPhone` to empty.
3. Run `pdflatex software.tex` twice (one pass leaves a wrong page count).
4. Check the text has no phone number, then replace the file in `public/`.

The public PDF must never contain a phone number or a home address.

## Run

```sh
npm ci                # Node 22.18 or later
npm run dev           # http://localhost:5173/portfolio/
npm run build         # typecheck, then build to dist/
npm run preview       # serve dist/ at http://localhost:4173/portfolio/
npm run check         # typecheck + lint + format:check + build: what CI runs
npm run lint          # ESLint (typescript-eslint, react-hooks, jsx-a11y): eslint.config.js
npm run format:check  # Prettier, 120 columns: .prettierrc.json
```

## Images and icons

- The social card is `public/og.png`, rendered from `scripts/og-card.html` with
  `python3 scripts/render-og.py`. Re-render it only when the text on the card changes.
- `public/apple-touch-icon.png` and the web manifest's PNG icons are rendered from the
  `public/favicon.svg` monogram with `python3 scripts/render-icons.py`. Re-render them only when
  the monogram changes.

Both scripts need Python Playwright with Chromium.

## SEO and security

- `index.html` carries the canonical URL, Open Graph and Twitter card tags, both `theme-color`s,
  the apple-touch-icon and `public/site.webmanifest`.
- `public/sitemap.xml` lists the one page; update its `lastmod` when the content changes.
  `public/robots.txt` points at it. Crawlers only read `robots.txt` at a host's root, so on a
  project site it is advisory; submit the sitemap in Search Console instead.
- `public/404.html` is a self-contained page in both themes; GitHub Pages serves it for any
  missing path, so its links are absolute.
- GitHub Pages cannot send response headers, so the build adds a Content-Security-Policy
  `<meta>` to `index.html` (see `vite.config.ts`): same-origin scripts only, the inline theme
  script allowed by its SHA-256 hash (computed at build, so editing it needs no manual step),
  inline styles, and `data:` images. No third-party script, font or image can load. Adding one
  means changing the policy there.

## CI and deploy

- `.github/workflows/deploy.yml` runs `npm run check` on every push and pull request. A push
  to `main` then builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub
  Pages serves. Nothing deploys if the check fails.
- `.github/workflows/link-check.yml` runs every Monday (and by hand): it builds the site and
  runs lychee over `dist/**/*.html` and `src/content.ts`, skipping LinkedIn (it answers bots
  with status 999). A broken link shows as a failed run; it opens no issue.
- Every action is pinned to a full commit SHA, with the version in a comment.
