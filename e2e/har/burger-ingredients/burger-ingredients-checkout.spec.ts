import { test } from '@playwright/test';

import { BurgerIngredientsPage } from './burger-ingredients.page';

test.describe('Тесты ингредиентов с HAR и POM', () => {
  let ingredientsPage: BurgerIngredientsPage;

  test.beforeEach(async ({ page }): Promise<void> => {
    // Включаем HAR-мокирование для каталога ингредиентов
    // Путь пишется относительно корня проекта, создадим har-файл рядом с тестом
    await page.routeFromHAR('./e2e/har/burger-ingredients/burger-ingredients.har', {
      url: '**/api/**',
      update: false, // true для первой автоматической записи всех данных
    });

    // перехват для стабильного рендеринга карточки в любом окружении
    await page.route('**/api/ingredients', async (route): Promise<void> => {
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

    ingredientsPage = new BurgerIngredientsPage(page);

    await page.goto('/');
    await page.waitForSelector('text=Краторная булка');
  });

  test('должен открывать модальное окно с описанием и данными ингредиента', async (): Promise<void> => {
    await ingredientsPage.openIngredientModal();
    await ingredientsPage.verifyIngredientDetails();
  });

  test('должен успешно закрывать модальное окно при клике на крестик', async (): Promise<void> => {
    await ingredientsPage.openIngredientModal();
    await ingredientsPage.closeIngredientModal();
  });
});
