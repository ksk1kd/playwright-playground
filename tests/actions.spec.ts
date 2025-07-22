import { expect, test } from '@playwright/test';
import { HomePage } from './pages/home-page';

test('input actions', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  await page.getByRole('textbox').fill('Peter');
  await page.getByLabel('I agree to the terms above').check();
  await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });
  await page.getByRole('textbox').fill('xxx');
});
