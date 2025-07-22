import { test, expect } from '@playwright/test'
import { HomePage } from './pages/home-page';

test('box element has correct dimensions', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const elementHandle = await page.waitForSelector('#box')
  const boundingBox = await elementHandle.boundingBox()
  expect(boundingBox?.width).toBeCloseTo(100, 0)
  expect(boundingBox?.height).toBeCloseTo(100, 0)
})
