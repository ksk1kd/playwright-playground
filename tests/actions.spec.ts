import { expect, test } from '@playwright/test';

test('input actions', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('textbox').fill('Peter');

  await page.getByLabel('I agree to the terms above').check();
  
  await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });

  await page.getByRole('textbox').fill('xxx');
});
