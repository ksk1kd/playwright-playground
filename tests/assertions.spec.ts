import { expect, test } from '@playwright/test';
import { HomePage } from './pages/home-page';

test('should fill textbox with Peter', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const textbox = page.getByRole('textbox');
  await textbox.fill('Peter');
  await expect(textbox).toHaveValue('Peter');
});

test('should check the agreement checkbox', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const checkbox = page.getByLabel('I agree to the terms above');
  await checkbox.check();
  await expect(checkbox).toBeChecked();
});

test('should select Blue from color dropdown', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const select = page.getByLabel('Choose a color');
  await select.selectOption({ label: 'Blue' });
  await expect(select).toHaveValue('blue');
});
