import { test, expect } from '@playwright/test';

test('example', async ({ page }): Promise<void> => {
  // Включаем мокирование ингредиентов для полной автономности от реального API
  // (под виртаульный  Linux не успевает по времени)
  await page.route('**/api/ingredients', async (route): Promise<void> => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        success: true,
        data: [
          {
            _id: '643d69a5c3b7490027fa3aca',
            name: 'Краторная булка',
            type: 'bun',
            proteins: 80,
            fat: 24,
            carbohydrates: 53,
            calories: 420,
            price: 1255,
            image: 'https://yandex.net',
            image_mobile: 'https://yandex.net',
            image_large: 'https://yandex.net',
            __v: 0,
          },
        ],
      }),
    });
  });

  await page.goto('/');

  // Ищем конкретный тег h1 на странице, содержащий слово "бургер"
  const mainHeader = page.locator('h1', { hasText: /бургер/i });
  await expect(mainHeader).toBeVisible({ timeout: 10000 });
});
