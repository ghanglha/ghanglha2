
# ghanglha.net

This project is a static website built with **Jekyll** and managed with **TinaCMS** as a headless CMS. It is designed for easy content editing, blogging, and publishing, with support for Markdown posts, custom collections, and visual editing via Tina Cloud.

---

## Features

- Static site generation with Jekyll
- Visual content editing with TinaCMS (headless, Tina Cloud)
- Markdown-based posts and custom collections (e.g., Women Writers)
- Media management (images, assets)
- Ready for deployment on Vercel or any static host

---

## Project Structure

- `_posts/` — Main blog posts (Markdown)
- `_womens/` — Women Writers collection (Markdown)
- `_includes/`, `_layouts/` — Jekyll templates and layouts
- `assets/` — Images, CSS, fonts, scripts
- `tina/` — TinaCMS configuration (`config.js`, `tina-lock.json`)
- `admin/` — TinaCMS admin UI (auto-generated)
- `Gemfile` — Ruby/Jekyll dependencies
- `package.json` — Node/Tina dependencies and scripts
- `_config.yml` — Jekyll site configuration

---

## Prerequisites

- Ruby (>= 3.2)
- Node.js (LTS recommended)
- Bundler (`gem install bundler`)
- NPM (Node Package Manager)

---

## Setup & Development

1. **Clone the repository:**
	```sh
	git clone git@github.com:ghanglha/ghanglha2.git
	cd ghanglha2
	```
2. **Install Ruby dependencies:**
	```sh
	bundle install
	```
3. **Install Node dependencies:**
	```sh
	npm install
	```
4. **Start local development server (Jekyll + TinaCMS):**
	```sh
	npm run dev
	```
	This runs TinaCMS in dev mode and starts Jekyll locally.

---

## TinaCMS Integration

- TinaCMS is configured in `tina/config.js` and `tina/tina-lock.json`.
- Admin UI is generated in `/admin` (do not edit manually).
- Content collections are defined for `_posts` (blog) and `_womens` (Women Writers).
- Media uploads go to `assets/images/`.
- Tina Cloud credentials (clientId, token) are required for editing via the `/admin` route.

---

## Deployment

- Build the static site for production:
  ```sh
  npm run build
  ```
- Deploy the contents of `_site/` to your static host (e.g., Vercel, Netlify, GitHub Pages).

---

## Customization

- Edit `_config.yml` for Jekyll site settings.
- Update TinaCMS schema in `tina/config.js` to add or modify collections/fields.
- Add new posts in `_posts/` or new writers in `_womens/`.

---

## Troubleshooting

- If TinaCMS admin shows "no access" or login issues, check your Tina Cloud credentials and user permissions.
- For Jekyll errors, ensure Ruby and all gems are installed and compatible.
- For TinaCMS errors, ensure Node dependencies are up to date (`npm install`).

---

## License

ISC

