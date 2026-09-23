import { test, expect } from '@playwright/test';

test('example', async ({ page }): Promise<void> => {
  await page.goto('/');
  // Ищем конкретный h1 с текстом "бургер" вместо абстрактного getByText
  const mainHeader = page.locator('h1', { hasText: /бургер/i });
  // Playwright сам ждет 10 секунд, пока элемент станет видимым
  await expect(mainHeader).toBeVisible({ timeout: 10000 });
});
