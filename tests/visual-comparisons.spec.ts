import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home-page';

test('visual comparisons', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page).toHaveScreenshot();
});
