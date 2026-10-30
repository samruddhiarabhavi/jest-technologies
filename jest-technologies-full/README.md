# JEST Technologies website

Light, premium, animated marketing site for a software company.

- **client/**: React + Vite + TypeScript + Tailwind CSS + Framer Motion
- **server/**: Node.js + Express + TypeScript + MongoDB (contact form API, optional JWT admin read access)

## Run locally
    # terminal 1: API
    cd server && cp .env.example .env   # fill in MONGO_URI etc.
    npm install && npm run dev

    # terminal 2: website
    cd client && npm install && npm run dev

Open http://localhost:5173. The Vite dev server proxies `/api` to `http://localhost:5000`.

## Type-check and build
    cd client && npm run build      # runs tsc --noEmit, then vite build
    cd server && npm run typecheck  # tsc --noEmit
    cd server && npm run build && npm start   # compiles to dist/, then runs it

The server dev command (`npm run dev`) uses `tsx watch`. Shared client types live in `client/src/types.ts`.

## API
| Method | Route | Notes |
|---|---|---|
| POST | /api/contact | Public. Validates and stores a contact form submission. |
| POST | /api/auth/login | Body `{email, password}` matching `ADMIN_EMAIL` / `ADMIN_PASSWORD`. Returns a JWT (8h). |
| GET | /api/contact | Requires `Authorization: Bearer <token>`. Lists submissions. |
| GET | /api/health | Health check. |

## Deploy on Render
Push the repo to GitHub, then Render > New > **Blueprint** and select it (`render.yaml` creates both services).
1. Fill the prompted env vars for **jest-api**: `MONGO_URI` (MongoDB Atlas), `CLIENT_URL` (your site URL), `ADMIN_EMAIL`, `ADMIN_PASSWORD`.
2. After the API is live, set `VITE_API_URL` on **jest-site** to the API URL, then redeploy the site.
3. In MongoDB Atlas, allow Render's outbound IPs (or 0.0.0.0/0 for a first test).

## Replace before going live
All editable content is in `client/src/data/`:
- `site.ts`: email, phone, location, social links, **stats**, **testimonials**. The stats and testimonials are placeholders, not real achievements or quotes.
- `content.ts`: services, projects, case study and its metrics. Projects and metrics are **sample concepts**.
- Colours and fonts: `client/tailwind.config.js`.
- Privacy and Terms pages are template text. Get them reviewed.
