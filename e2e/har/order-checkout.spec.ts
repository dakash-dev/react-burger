import { test, expect } from '@playwright/test';

test.describe('Оформление заказа с HAR-моками', () => {
  test.beforeEach(async ({ page }) => {
    // 1. Мокирование LocalStorage перед загрузкой страницы по теории
    await page.addInitScript(() => {
      window.localStorage.setItem('accessToken', 'Bearer mock-playwright-token');
      window.localStorage.setItem('refreshToken', 'mock-playwright-refresh-token');
    });

    // 2. Включаем режим автоматической записи HAR-файла
    // true - для первоначального запуска заполнения данных.
    await page.routeFromHAR('./e2e/har/api-mocks.har', {
      update: false, // Режим записи по инструкции
    });

    // 3. Программный перехват, чтобы обмануть бэкенд во время записи и вернуть 200 OK
    await page.route('**/api/auth/user', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          user: { email: 'tester@kosmos.ru', name: 'Гагарин' },
        }),
      });
    });

    await page.route('**/api/orders', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          name: 'Космический бургер',
          order: { number: 98765 },
        }),
      });
    });

    await page.goto('/');
    await page.waitForSelector('text=Краторная булка');
  });

  test('должен открыть модальное окно заказа при клике по кнопке Оформить заказ', async ({
    page,
  }) => {
    const bunCard = page
      .getByTestId('ingredient-card')
      .filter({ hasText: 'Краторная булка' })
      .first();
    const dropTarget = page.getByTestId('constructor-drop-target');

    // Перетаскиваем булку в конструктор
    await bunCard.hover();
    await page.mouse.down();
    const targetBox = await dropTarget.boundingBox();
    if (targetBox) {
      await page.mouse.move(
        targetBox.x + targetBox.width / 2,
        targetBox.y + targetBox.height / 2,
        { steps: 5 }
      );
    }
    await page.mouse.up();

    // Нажимаем кнопку оформления заказа
    const orderButton = page.getByTestId('order-button');
    await expect(orderButton).toBeEnabled();
    await orderButton.click();

    // Проверяем появление модального окна с данными о заказе
    const orderModal = page.locator('[class*="modal__modal"]').first();
    await expect(orderModal).toBeVisible();
    await expect(orderModal).toContainText('98765');
  });
});
