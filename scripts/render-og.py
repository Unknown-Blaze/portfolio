"""Renders scripts/og-card.html to public/og.png at 1200x630. Needs Python Playwright with Chromium."""
from pathlib import Path

from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent.parent
card = root / "scripts" / "og-card.html"
out = root / "public" / "og.png"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
    page.goto(card.as_uri(), wait_until="networkidle")
    page.evaluate("document.fonts.ready")
    page.wait_for_timeout(300)
    page.screenshot(path=str(out))
    browser.close()
print(f"wrote {out}")
