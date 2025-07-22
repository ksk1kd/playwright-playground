import { expect, test } from '@playwright/test';
import { HomePage } from './pages/home-page';

test('should show correct time when manipulating system clock', async ({ page }) => {
  await page.clock.install({ time: new Date('2024-02-02T08:00:00') });
  const homePage = new HomePage(page);
  await homePage.goto();

  await page.clock.pauseAt(new Date('2024-02-02T10:00:00'));
  await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');

  await page.clock.fastForward('30:00');
  await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:30:00 AM');
});