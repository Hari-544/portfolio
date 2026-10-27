# Hari Krishna — Portfolio

A responsive personal portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, **Framer Motion**, and **Three.js / React Three Fiber**. It introduces my background, skills, selected projects, education, certifications, and contact links.

## Portfolio sections

- Responsive hero with animated role text and 3D background
- About and education
- Skills and certifications
- Project cards with repository links and available live demo
- Contact links and footer

## Run locally

Requirements: Node.js compatible with the installed Next.js version and npm.

```bash
git clone https://github.com/Hari-544/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production app |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Update portfolio content

Most profile content is centralized in [`data/portfolioData.js`](data/portfolioData.js):

- `personalInfo`: bio, links, education, and hero copy
- `skills`: technologies to display
- `certifications`: learning and certification list
- `projects`: descriptions, stack labels, source links, and optional `live` demo links

Only add technologies and project claims that accurately reflect the current implementation. The unfinished Village API concept is intentionally not featured.

## Main stack

- Next.js 16 and React 19
- Tailwind CSS 4
- Framer Motion
- Three.js, React Three Fiber, and Drei
- Lucide React

## Deploy

The repository is structured as a standard Next.js app and can be imported into [Vercel](https://vercel.com/new). Use the repository root as the project root.
