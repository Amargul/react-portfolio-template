# React Portfolio Template

A feature-rich, responsive portfolio template built with React, Vite, and Tailwind CSS. Use it as a starting point to showcase your projects, skills, and experience.

> **All content in this repository is dummy data.** This repo is intended as a **portfolio template**. Names, projects, testimonials, blog posts, contact details, and pricing are sample placeholders. Replace them with your own content before publishing.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.27.5-0055FF?logo=framer&logoColor=white)

## Who This Template Is For

- Developers building a **personal or professional portfolio** site.
- Bootcamp grads or career switchers who need a **presentable, customizable** front-end to showcase projects and skills.
- Recruiters and hiring managers evaluating **code quality and structure** (this repo is a template, not an individual’s live portfolio).

This repository is **not** a live portfolio with real identity or contact data. It is a **skeleton** to fork or clone and fill with your own content.

## Features

- **Modern UI/UX** — Clean layout with smooth animations
- **Dark/Light Mode** — Theme toggle with persistent preference
- **Responsive** — Layouts for mobile, tablet, and desktop
- **Project Showcase** — Gallery with case-study style detail pages
- **Blog Section** — Article list and detail pages (data in `src/data/blogs.js`)
- **Skills & Stats** — Technical skills and impact metrics
- **Services & Pricing** — Sample services/pricing (replace with your own)
- **Contact** — Demo contact form (submissions are not sent; wire to your backend or service)
- **Accessible** — Semantic HTML and keyboard-friendly where applicable

## Tech Stack

| Category   | Technologies |
|-----------|---------------|
| **UI**    | React 19, React Router DOM 7 |
| **Build** | Vite 7 |
| **Styling** | Tailwind CSS 3, PostCSS, Autoprefixer |
| **Motion** | Framer Motion 12 |
| **Icons** | React Icons 5 |
| **Tooling** | ESLint |

## Security & Privacy Notes

- **No real data is collected.** This template does not ship with analytics, tracking, or backend storage. Any such features are your responsibility if you add them.
- **Contact form is demo-only.** Submissions are not sent anywhere. The form shows a local success message only. Before going live, wire the form to your own endpoint or service (e.g. Formspree, Netlify Forms, or your API).
- **Replace all dummy data before deployment.** Do not deploy the template as-is with sample names, emails, phone numbers, or project descriptions. Replace everything in `src/config/site.config.js`, project/blog/testimonial data, and any copy that could be mistaken for real personal or client information.

## Environment Variables & Secrets

- **No environment variables are required** to run this project. **Do I need a .env file?** No.
- **Where do I change site content?** Use **`src/config/site.config.js`** — it is the single source of truth for site identity, contact info, social links, and meta. Customize the site there; do not duplicate that config in `.env`.
- **No secrets or API keys are committed.** The app does not read `.env` by default.
- **`.env.example`** is optional and exists only for future extensibility (e.g. if you add a contact form backend or analytics and need a secret). Copy to `.env` only if you introduce such features; never commit `.env` or real secrets.

## Setup & Run

### Prerequisites

- **Node.js** v18 or higher  
- **npm** (or yarn/pnpm)

### Install and run locally

```bash
# Clone (or use "Use this template" on GitHub)
git clone https://github.com/your-username/react-portfolio-template.git
cd react-portfolio-template

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for production

```bash
npm run build
```

Output is in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## Project structure

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts
│   ├── components/
│   │   ├── layout/      # Header, Footer, PageWrapper, ScrollToTop
│   │   └── ui/         # Button, Card, Badge, Stats, Testimonials, etc.
│   ├── config/         # site.config.js (name, contact, social, meta)
│   ├── context/        # ThemeContext
│   ├── data/           # blogs.js and other static data
│   ├── pages/          # Home, About, Projects, Blog, Services, Contact
│   ├── styles/         # globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Customization

All site identity and public content are controlled by **`src/config/site.config.js`**. Edit that file first; no `.env` is needed for normal use.

1. **Site identity & contact** — Edit `src/config/site.config.js` (name, role, email, phone, location, social links, meta).
2. **Projects** — Update project lists and case studies in `src/pages/Projects.jsx`, `src/pages/ProjectDetails.jsx`, and the featured block in `src/pages/Home.jsx`.
3. **Blog** — Edit `src/data/blogs.js` for posts; author and content are currently dummy.
4. **About** — Adjust copy and experience in `src/pages/About.jsx`.
5. **Services & pricing** — Replace dummy services/pricing in `src/components/ui/WorkWithMeCTA.jsx` and `src/pages/Services.jsx`.
6. **Contact form** — The form is demo-only; connect it to your API or form service (e.g. Formspree, Netlify Forms) when you go live.
7. **Theme** — Colors and theme are configured in `tailwind.config.js` and `src/styles/globals.css`.
8. **Document head** — Site title and meta description are set from `site.config.js` (no need to edit `index.html`).

## Deployment Notes

- **Static export:** Run `npm run build` and deploy the `dist/` folder.
- **Vercel:** Connect the repo; build command `npm run build`, output directory `dist`. No extra config needed for a standard Vite SPA; add a rewrite rule for client-side routing if required (e.g. `/*` → `/index.html`).
- **Netlify:** Build command `npm run build`, publish directory `dist`. Add a `_redirects` or `netlify.toml` redirect for SPA routing if needed.
- **Other static hosts:** Serve `dist/` as static files and configure fallback to `index.html` for client-side routes.

## Contributing Guidelines (Lightweight)

- **PRs are welcome** for bugs, docs, or small improvements. Open an issue first for large or behavioral changes.
- **Do not add personal data** in examples, commit messages, or code. Keep sample content clearly dummy (e.g. "Sample User", "example@example.com").
- **Keep dummy data clearly labeled** in the codebase (comments or naming) so it is obvious what must be replaced before use as a real portfolio.

## License

This project is open source under the [MIT License](LICENSE).

## Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
