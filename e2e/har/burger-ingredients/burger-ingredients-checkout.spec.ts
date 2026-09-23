import { test, expect } from '@playwright/test';

test.describe('Тесты ингредиентов с HAR', () => {
  test.beforeEach(async ({ page }) => {
    // Включаем HAR-мокирование для каталога ингредиентов
    // Путь пишется относительно корня проекта, создадим har-файл рядом с тестом
    await page.routeFromHAR('./e2e/har/burger-ingredients/burger-ingredients.har', {
      url: '**/api/**',
      update: false, // true для первой автоматической записи всех данных
    });

    // перехват для стабильного рендеринга карточки в любом окружении
    await page.route('**/api/ingredients', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          data: [
            {
              _id: '643d69a5c3b7490027fa3aca',
              name: 'Краторная булка N-200i',
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
    await page.waitForSelector('text=Краторная булка');
  });

  test('должен открывать модальное окно с описанием и данными ингредиента', async ({
    page,
  }) => {
    const ingredient = page
      .getByTestId('ingredient-card')
      .filter({ hasText: 'Краторная булка' })
      .first();
    await ingredient.click();

    // Проверка открытия модалки
    const modalHeader = page.locator('text=Детали ингредиента');
    await expect(modalHeader).toBeVisible();

    // Проверка отображения данных ингредиента внутри модалки
    const ingredientTitle = page
      .locator('[class*="ingredient-details"]')
      .locator('text=Краторная булка N-200i');
    await expect(ingredientTitle).toBeVisible();
  });

  test('должен успешно закрывать модальное окно при клике на крестик', async ({
    page,
  }) => {
    const ingredient = page
      .getByTestId('ingredient-card')
      .filter({ hasText: 'Краторная булка' })
      .first();
    await ingredient.click();

    const modalHeader = page.locator('text=Детали ингредиента');
    await expect(modalHeader).toBeVisible();

    // Клик по крестику
    const closeButton = page.locator('[class*="modal"]').locator('button').first();
    await closeButton.click();

    // Проверка закрытия
    await expect(modalHeader).not.toBeVisible();
  });
});
