// Сквозные E2E-тесты для конструктора космических бургеров и модалок
import { test, expect } from '@playwright/test';

test.describe('Конструктор бургеров E2E флоу', (): void => {
  test.beforeEach(async ({ page }): Promise<void> => {
    // Перед каждым тестом переходим на главную страницу (baseURL подставляется автоматически)
    await page.goto('/');
    await page.waitForSelector('text=Краторная булка');
  });

  test('должен успешно перетаскивать булку в зону конструктора', async ({
    page,
  }): Promise<void> => {
    // 1. Arrange: Находим первую карточку булки и зону сброса конструктора
    // Ищем булку по тексту внутри секции ингредиентов
    const bunIngredient = page.locator('text=Краторная булка').first();
    const dropTarget = page.getByTestId('constructor-drop-target');

    // 2. Act: Эмулируем плавное перетаскивание мышью по координатам
    await bunIngredient.hover();
    await page.mouse.down();

    const dropTargetBox = await dropTarget.boundingBox();
    if (dropTargetBox) {
      await page.mouse.move(
        dropTargetBox.x + dropTargetBox.width / 2,
        dropTargetBox.y + dropTargetBox.height / 2,
        { steps: 5 } //  перемещение пошаговое
      );
    }
    await page.mouse.up();

    // 3. Assert: Проверяем, что в конструкторе появился текст добавленной булки (верх и низ)
    await expect(dropTarget).toContainText('Краторная булка N-200i (верх)');
    await expect(dropTarget).toContainText('Краторная булка N-200i (низ)');
  });

  test('должен открывать модальное окно с деталями при клике на ингредиент', async ({
    page,
  }): Promise<void> => {
    // 1. Act: Кликаем по карточке ингредиента
    const ingredient = page.locator('text=Краторная булка').first();
    await ingredient.click();

    // 2. Assert: Проверяем, что модалка с заголовком отрендерилась на экране
    const modalHeader = page.locator('text=Детали ингредиента');
    await expect(modalHeader).toBeVisible();

    // Проверяем, что внутри модалки есть описание БЖУ и название
    const ingredientTitle = page
      .locator('[class*="ingredient-details"]')
      .locator('text=Краторная булка N-200i');
    await expect(ingredientTitle).toBeVisible();
  });

  test('должен успешно закрывать модальное окно при клике на крестик', async ({
    page,
  }): Promise<void> => {
    // 1. Arrange: Сначала открываем модалку кликом
    const ingredient = page.locator('text=Краторная булка').first();
    await ingredient.click();

    const modalHeader = page.locator('text=Детали ингредиента');
    await expect(modalHeader).toBeVisible();

    // 2. Act: Находим кнопку-крестик закрытия внутри модалки и кликаем по ней
    // Обычно кнопка закрытия ищется по селектору или иконке, найдем её по кнопке внутри модального окна
    const closeButton = page.locator('div[class*="modal"]').locator('button').first();
    await closeButton.click();

    // 3. Assert: Убеждаемся, что модалка исчезла из DOM-дерева
    await expect(modalHeader).not.toBeVisible();
  });
});
