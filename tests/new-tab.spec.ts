import { test, expect } from '@playwright/test'
import { HomePage } from './pages/home-page';

test('should open new tab and interact with button', async ({ page, context }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const pagePromise = context.waitForEvent('page')
  await page.getByText('open new tab').click()
  const newPage = await pagePromise
  await newPage.getByRole('button').click()
  expect(await newPage.title()).toBe('New Window')
})
