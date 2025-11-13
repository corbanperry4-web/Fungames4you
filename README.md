# Fungames4you — Static Game Site Template

This repository scaffold provides a simple static site to list and play HTML5 games.

How it works
- index.html loads `games.json`.
- Each entry in `games.json` should have: id, title, description, thumbnail, url, type.
- Local games live under the `games/` folder (recommended). Example: `games/snake.html`.
- The site opens games in a modal iframe. External sites may refuse to be embedded (X-Frame-Options).

Adding a new game
1. Create a folder under `games/`, e.g. `games/my-game/`.
2. Place your game's playable HTML file as `games/my-game/index.html`.
3. Add/update an entry in `games.json`:
   {
     "id": "my-game",
     "title": "My Game",
     "description": "Short blurb",
     "thumbnail": "games/my-game/thumb.png",
     "url": "games/my-game/index.html",
     "tags": ["shooter","multiplayer"],
     "type": "local"
   }

Roblox-like / "knock-off" games — important legal guidance
- You can create games inspired by popular mechanics (e.g., obby, tycoon) but do NOT copy Roblox's or any other platform's proprietary code, assets, or branding.
- Avoid using any trademarks, copyrighted models, or stolen assets.
- If you want user-submitted games, collect explicit permission and host only content you are allowed to redistribute.
- Embedding Roblox itself or rehosting its content is not allowed.

Deployment
- Publish this repo to GitHub Pages (Settings → Pages → select branch main / root) or use any static host (Netlify, Vercel, Firebase).
- For best "unblocked" behavior in school/work environments, host your own games locally in the repo rather than framing external hosts that may be blocked.

Security notes
- Iframes are sandboxed with `allow-scripts allow-same-origin allow-forms`. Review sandbox attributes for your needs.
- If you embed external URLs, you may open users to third-party trackers or XSS; prefer hosting games you control.

If you'd like, I can:
- Add more example games (multiplayer templates, platformers).
- Add user-upload functionality (requires a backend).
- Configure a GitHub Actions workflow to build or validate assets.
