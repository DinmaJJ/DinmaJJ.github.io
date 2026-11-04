# Chidinma Onyeri: portfolio

Astro site, deployed to https://dinmajj.github.io by the GitHub Action in
`.github/workflows/deploy.yml` on every push to `main`.

## Adding a project (no coding needed)

You can do all of this on github.com, nothing to install.

1. Open `src/pages/work/`, open an existing project and copy its text.
2. Create a new file in the same folder (e.g. `telecom-churn.md`), paste, and
   change the top section:

   ```
   ---
   layout: ../../layouts/CaseStudy.astro
   title: Telecom Customer Churn
   order: 3
   tags: [Customer analytics, Python]
   summary: One or two sentences on the question this project answers.
   stack: [Python, Pandas, NumPy]
   live: https://link-to-a-live-dashboard
   repo: https://github.com/DinmaJJ/your-repo-name
   image: /images/work/telecom-churn.jpg
   ---
   ```

   Keep the `layout` line exactly as it is. `live`, `repo` and `image` are
   optional: leave out any line you don't have and the card still looks right.
3. Below the `---`, write the case study using `## Headings`, like the
   existing projects (the problem, the data, what you built, what it showed).
4. For a screenshot, upload it to `public/images/work/` with the same name you
   used in `image:`. A wide screenshot of the main view works best.
5. Click **Commit changes**. The site updates by itself in about two minutes.

`order` sets the position on the home page (1 is first). The first `tags`
entry gets the dark pill.

## Editing everything else

- **Profile, numbers, experience, skills:** `src/data/profile.ts`
- **Photo:** replace `src/assets/chidinma.jpg` (same name; Astro resizes it).
- **CV:** replace `public/Chidinma_Onyeri_CV.pdf` (same name).

## For developers

```bash
npm install
npm run dev       # local preview on port 4391
npm run shots     # retake the dashboard screenshots from the live Streamlit apps
```

First deploy: in the repo's Settings → Pages, set **Source** to **GitHub Actions**.
