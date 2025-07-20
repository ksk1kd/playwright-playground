import { test, expect } from '@playwright/test'

test('box element has correct dimensions', async ({ page }) => {
  await page.goto('http://localhost:5173')
  const elementHandle = await page.waitForSelector('#box')
  const boundingBox = await elementHandle.boundingBox()
  expect(boundingBox?.width).toBeCloseTo(100, 0)
  expect(boundingBox?.height).toBeCloseTo(100, 0)
})
