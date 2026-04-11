# Trinity New Zealand Immigration — marketing site

**Repository:** [github.com/Markissss-23/trinity-nz-immigration](https://github.com/Markissss-23/trinity-nz-immigration)

Single-page React application (Vite + TypeScript + Tailwind CSS) for **Trinity New Zealand Immigration Services Ltd.**, ready to deploy on [Netlify](https://www.netlify.com/).

## Development

```bash
npm install
npm run dev
```

Build and preview production output:

```bash
npm run build
npm run preview
```

## Netlify deployment

1. Connect this repository (or drag-and-drop the `dist` folder after `npm run build`) to a Netlify site.
2. Build settings are defined in [`netlify.toml`](netlify.toml): build command `npm run build`, publish directory `dist`.
3. **Forms:** The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). A hidden static form in `index.html` registers field names at deploy time; the visible form in the app submits as `POST` with `application/x-www-form-urlencoded` to `/`.
4. In the Netlify UI, open **Site configuration → Forms** and confirm the **contact** form appears after the first successful deploy. Configure **Notifications** if you want submission emails.
5. Optional: set a custom domain and enable HTTPS (Netlify default).

## Imagery and logo

The header logo loads from `siteMeta.logoUrl` (default: Trinity’s own `logo.png` on trinitynzimmigration.co.nz). Hero photography is from Unsplash in [`src/content/site.ts`](src/content/site.ts); replace with client-provided assets when available.

## Visa copy

Service summaries are aligned with public Immigration New Zealand pathways (for example AEWV, NZeTA, Green List, SMC) and link to official pages. Requirements change — the in-app notice points visitors to INZ for authoritative criteria.

## Content

Editable copy and structure live in [`src/content/site.ts`](src/content/site.ts).
