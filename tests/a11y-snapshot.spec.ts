import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home-page';

test('should match accessibility snapshot', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('heading')).toMatchAriaSnapshot({ name: 'heading.aria.yml' });
});
