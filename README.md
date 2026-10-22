# portfolio

The personal site of Rudra Prasadh Ganesh, software engineer in robotics and AI:
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

## Editing

All text, links and numbers live in [`src/content.ts`](src/content.ts). Change that one file;
the components only lay it out. Images go in `public/img` as WebP with their width and height
recorded next to them in `content.ts`.

The social card is `public/og.png`, rendered from `scripts/og-card.html` with
`python3 scripts/render-og.py` (needs Python Playwright with Chromium). Re-render it only when
the text on the card changes.

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
npm ci
npm run dev        # http://localhost:5173/portfolio/
npm run build      # typecheck, then build to dist/
npm run preview    # serve dist/ at http://localhost:4173/portfolio/
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`: it builds the site and publishes
`dist/` to the `gh-pages` branch, which GitHub Pages serves.
