# Personal Portfolio Website

A clean, modern portfolio website built for a career transition into **data analytics**, **fintech**, and **technical product management**.

Built with React, Tailwind CSS, and an Express.js backend API.

---

## Live Demo

> TODO: Add your deployed URL here — e.g. `https://your-portfolio.vercel.app`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Fonts | Inter (Google Fonts) |
| Deployment | Vercel (frontend + API) |

---

## Project Structure

```
portfolio/
├── client/                         # React frontend
│   ├── public/
│   │   └── cv/                     # Place your CV PDF here
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Sticky navigation bar
│   │   │   ├── Hero.jsx            # Hero section with CTA buttons
│   │   │   ├── About.jsx           # About me section
│   │   │   ├── Skills.jsx          # Skills grouped by category
│   │   │   ├── Projects.jsx        # Project cards
│   │   │   ├── Experience.jsx      # Work experience timeline
│   │   │   ├── Contact.jsx         # Contact form + links
│   │   │   └── Footer.jsx          # Footer with nav and socials
│   │   ├── data/
│   │   │   ├── projects.js         # Edit to update project cards
│   │   │   ├── skills.js           # Edit to update skill groups
│   │   │   └── experience.js       # Edit to update experience cards
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                         # Express backend
│   ├── routes/
│   │   └── contact.js              # POST /api/contact handler
│   ├── index.js                    # Server entry point
│   └── package.json
│
├── package.json                    # Root monorepo config
├── vercel.json                     # Vercel deployment config
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Install dependencies

```bash
npm install
```

This installs dependencies for both the client and server workspaces.

### Run in development

```bash
npm run dev
```

- Frontend runs at `http://localhost:3000`
- API runs at `http://localhost:5000`

Vite proxies all `/api` requests from the frontend to the Express server automatically.

### Build for production

```bash
npm run build
```

Outputs the built frontend to `client/dist/`.

---

## Personalisation

Search for `TODO:` in the codebase to find every placeholder. Key things to update:

| What | File |
|---|---|
| Your name | `Navbar.jsx`, `Hero.jsx`, `Footer.jsx`, `index.html` |
| Email address | `Contact.jsx`, `Footer.jsx` |
| LinkedIn URL | `Hero.jsx`, `Contact.jsx`, `Footer.jsx` |
| GitHub URL | `Hero.jsx`, `Contact.jsx`, `Footer.jsx` |
| CV file | Add PDF to `client/public/cv/` and update path in `Hero.jsx` |
| Project GitHub links | `src/data/projects.js` |
| University name & dates | `src/data/experience.js` |
| Work experience dates | `src/data/experience.js` |

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submits the contact form |

### POST `/api/contact`

**Request body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "Hello!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thanks for reaching out! I'll get back to you soon."
}
```

To enable real email delivery, follow the instructions in `server/routes/contact.js` to configure Nodemailer.

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect the config from `vercel.json`
4. Set any environment variables (e.g. `EMAIL_USER`, `EMAIL_PASS`) in the Vercel dashboard
5. Deploy

The `vercel.json` routes all `/api/*` requests to the Express server and everything else to the React build.

---

## Sections

- **Hero** — Name, headline, intro, and CTA buttons (View Projects, Download CV, LinkedIn, GitHub)
- **About** — Background summary and highlight cards
- **Skills** — Grouped by Data & Analytics, Finance & FinTech, Product & Business, and Tools
- **Projects** — Cards with description, problem solved, tools used, and GitHub links
- **Experience** — Timeline of work history with role highlights
- **Contact** — Contact form (posts to the API) and direct contact links

---

## Colour Palette

| Name | Hex |
|---|---|
| Navy | `#1e3a5f` |
| Soft Blue | `#3b82f6` |
| Light Blue | `#60a5fa` |
| Light Grey | `#f8fafc` |
| Mid Grey | `#e2e8f0` |
| White | `#ffffff` |
