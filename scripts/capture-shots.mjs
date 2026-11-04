// Takes the dashboard screenshots in public/images/work/ from the live Streamlit apps.
// Rerun after a dashboard changes:  npm run shots

import { chromium } from '@playwright/test';

const OUT = 'public/images/work';
const apps = [
  { slug: 'sp500-insight', url: 'https://s-p500-insights-dashboard.streamlit.app/' },
  // `focus` scrolls to a heading first, when the top of the app is less visual than a section further down.
  { slug: 'ecommerce-insights', url: 'https://ecommerce-business-insights-project.streamlit.app/', focus: 'Customer Engagement & Churn Overview' },
];
const only = process.argv[2];

// Uses the Chrome installed on this machine, so no Playwright browser download is needed.
const browser = await chromium.launch({ channel: 'chrome' });
for (const app of apps.filter((a) => !only || a.slug === only)) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await page.goto(app.url, { waitUntil: 'domcontentloaded' });

  // Streamlit Community Cloud puts idle apps to sleep behind a wake-up button.
  const wake = page.getByRole('button', { name: /get this app back up/i });
  if (await wake.isVisible({ timeout: 5000 }).catch(() => false)) {
    await wake.click();
    console.log(app.slug, 'was asleep, waking it');
  }

  // The app itself renders inside an iframe; wait until it has drawn real content.
  const frame = page.frameLocator('iframe[title="streamlitApp"]');
  await frame.locator('h1').first().waitFor({ timeout: 180000 });
  // The toolbar shows "Stop" while the script is still running.
  await frame.getByRole('button', { name: 'Stop' }).waitFor({ state: 'hidden', timeout: 180000 }).catch(() => {});
  await page.waitForTimeout(4000);

  if (app.focus) {
    await frame.getByText(app.focus, { exact: false }).first().evaluate((el) => el.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(2500);
  }

  // Crop off the filters sidebar so the shot opens on the dashboard itself.
  const sidebar = await frame.locator('[data-testid="stSidebar"]').boundingBox().catch(() => null);
  const left = sidebar && sidebar.width < 500 ? Math.round(sidebar.x + sidebar.width) : 0;

  // Hide the host badge and other floating corner widgets.
  await page.addStyleTag({ content: '[class*="viewerBadge"], [data-testid*="Badge"], a[href*="streamlit.io"] { display: none !important; }' });
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('body *')) {
      if (getComputedStyle(el).position !== 'fixed') continue;
      const box = el.getBoundingClientRect();
      if (box.top > innerHeight / 2 && box.width < innerWidth / 2) el.style.visibility = 'hidden';
    }
  });

  const path = `${OUT}/${app.slug}.jpg`;
  await page.screenshot({ path, type: 'jpeg', quality: 85, clip: { x: left, y: 0, width: 1440 - left, height: 900 } });
  console.log('saved', path);
  await page.close();
}
await browser.close();
