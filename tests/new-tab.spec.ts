import { test, expect } from '@playwright/test'

test('should open new tab and interact with button', async ({ page, context }) => {
  await page.goto('http://localhost:5173')
  const pagePromise = context.waitForEvent('page')
  await page.getByText('open new tab').click()
  const newPage = await pagePromise
  await newPage.getByRole('button').click()
  expect(await newPage.title()).toBe('New Window')
})
