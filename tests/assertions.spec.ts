import { expect, test } from '@playwright/test';

test('should fill textbox with Peter', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const textbox = page.getByRole('textbox');
  await textbox.fill('Peter');
  await expect(textbox).toHaveValue('Peter');
});

test('should check the agreement checkbox', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const checkbox = page.getByLabel('I agree to the terms above');
  await checkbox.check();
  await expect(checkbox).toBeChecked();
});

test('should select Blue from color dropdown', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const select = page.getByLabel('Choose a color');
  await select.selectOption({ label: 'Blue' });
  await expect(select).toHaveValue('blue');
});
