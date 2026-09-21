import { test, expect } from '@playwright/test';

test.describe('Компонент BurgerIngredients E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('text=Краторная булка');
  });

  test('должен открывать модальное окно с деталями при клике на ингредиент', async ({
    page,
  }) => {
    // Используем добавленный data-testid="ingredient-card"
    const ingredient = page
      .getByTestId('ingredient-card')
      .filter({ hasText: 'Краторная булка' })
      .first();
    await ingredient.click();

    const modalHeader = page.locator('text=Детали ингредиента');
    await expect(modalHeader).toBeVisible();

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

    const closeButton = page.locator('[class*="modal"]').locator('button').first();
    await closeButton.click();

    await expect(modalHeader).not.toBeVisible();
  });
});
