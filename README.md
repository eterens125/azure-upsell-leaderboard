# Azure Upsell Leaderboard

Period 10 to date (Sep 7 - Sep 20, 2026), stores 3116, 3802, 3882, 5161, 5166, 8604.
Ported from the claude.ai artifact "Azure Upsell Leaderboard".

- `data/upsell.json` - all figures (per-store coupon counts, team boards, people rollup)
- `template.html` - page markup, styles and rendering code; data is injected at build time
- `scripts/build.js` - `node scripts/build.js` writes `upsell-leaderboard.html`
- `upsell-leaderboard.html` - built standalone page (open directly in a browser)

To update for a new period: edit `data/upsell.json`, update the period text in `template.html`, then rebuild.
