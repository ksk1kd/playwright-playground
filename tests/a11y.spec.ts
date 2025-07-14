import { test, expect } from "./a11y-test"

test.describe('top-page', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page, makeAxeBuilder }) => {
    await page.goto('http://localhost:5173/');

    const accessibilityScanResults = await makeAxeBuilder().analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});