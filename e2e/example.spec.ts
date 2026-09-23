import { test, expect } from '@playwright/test';

test('example', async ({ page }): Promise<void> => {
  await page.goto('/');
  await expect(page.getByText('Соберите бургер')).toBeVisible();
});
