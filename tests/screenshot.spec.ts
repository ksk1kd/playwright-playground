import { test } from '@playwright/test';
import { HomePage } from './pages/home-page';

test('take screenshot', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  await page.screenshot({ path: 'test-results/screenshots/home.png' });
});
