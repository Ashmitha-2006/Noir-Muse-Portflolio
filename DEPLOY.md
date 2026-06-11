# Noir Muse — Vercel Deployment

## One-click deploy
1. Push this folder to a GitHub repo
2. Import to Vercel → it auto-detects Vite
3. Set build settings:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy ✓

## Local dev
```bash
npm install
npm run dev
```

## Video files
All clips live in `/public/clips/` and are served as static assets.
Vercel caches them with `Cache-Control: immutable` (see vercel.json).

## Notes
- No environment variables needed
- No SSR — pure SPA, works on Vercel's free tier
- Contact form shows success state only (wire up to Formspree/Resend for real emails)
