import { test, expect } from "./a11y-test"
import { HomePage } from './pages/home-page';

test.describe('top-page', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page, makeAxeBuilder }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    const accessibilityScanResults = await makeAxeBuilder().analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});