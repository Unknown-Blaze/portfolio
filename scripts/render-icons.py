"""Renders public/favicon.svg to the PNG icons in public/: apple-touch-icon.png (180 px) and the web manifest's
icon-192.png, icon-512.png and icon-maskable-512.png. Needs Python Playwright with Chromium.
Re-run only when the monogram in favicon.svg changes."""
from pathlib import Path

from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent.parent
public = root / "public"
svg = (public / "favicon.svg").read_text()
PAPER = "#F6F8FA"  # The light theme's --paper; home-screen icons are opaque, so the rounded corners sit on it.

# (file, size in px, share of the canvas the monogram fills). Maskable icons keep the art inside the 80% safe zone.
ICONS = [
    ("apple-touch-icon.png", 180, 1.0),
    ("icon-192.png", 192, 1.0),
    ("icon-512.png", 512, 1.0),
    ("icon-maskable-512.png", 512, 0.72),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for name, size, share in ICONS:
        page = browser.new_page(viewport={"width": size, "height": size}, color_scheme="light")
        art = round(size * share)
        page.set_content(
            f"""<!doctype html><html><body style="margin:0;width:{size}px;height:{size}px;display:grid;
            place-items:center;background:{PAPER}"><div style="width:{art}px;height:{art}px">{svg}</div></body></html>"""
        )
        page.add_style_tag(content="svg{width:100%;height:100%;display:block}")
        page.screenshot(path=str(public / name), omit_background=False)
        page.close()
        print(f"wrote public/{name}")
    browser.close()
