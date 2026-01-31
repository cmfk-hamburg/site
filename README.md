# CMFK Website

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Project structure

- `src/pages/` - Astro routes; localized under `src/pages/en` and `src/pages/cn`.
- `src/components/` - Reusable Astro components (navigation, program cards, footers, etc.).
- `src/layouts/` - Page layouts for programs, films, and articles.
- `src/content/` - Markdown content for programs, films, staff, and site copy.
- `src/styles/` - Global styles, variables, fonts, and utility Sass.
- `src/i18n/` - Locale strings and helpers.
- `public/` - Static assets (images, PDFs, fonts, admin config, videos).

## Content workflow

- Add a program file in `src/content/en/programs/<date>/<program-slug>.md`, following the frontmatter fields used in existing program files.
- Add film entries under a program folder like `src/content/en/programs/<date>/<program-folder>/<nn>-<film-slug>.md`.
- Keep filenames and `info` slugs consistent with their routes, and add any referenced images under `public/images/film/`.
- Required frontmatter keys (programs and films share the same schema): `title`, `overline`, `intro`, `image`, `info`, `ticket`, `cinema`, `length`, `time`, `date`, `language`, `subtitle`, `origin`, `director`, `genre`, `year`, `resolution`, `qa`, `imageSrcS`, `imageSrcM`, `imageSrcL`. Values can be empty strings when not applicable.

## Tech stack

- Astro 3 with Vite build pipeline
- TypeScript for typed config and helpers
- Sass for styling
- normalize.css for baseline styles
- @fontsource/noto-sans-sc and @fontsource/roboto for fonts
