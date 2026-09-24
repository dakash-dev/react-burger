// Сквозные E2E-тесты для страницы общедоступной ленты заказов (FeedPage)
import { test, expect } from '@playwright/test';

test.describe('Страница Ленты заказов E2E', (): void => {
  test('должна успешно загружаться и отображать базовый интерфейс ленты', async ({
    page,
  }): Promise<void> => {
    // 1. Arrange: Переходим на страницу ленты заказов
    await page.goto('/feed');

    // 2. Assert: Проверяем, что главный заголовок страницы виден на экране
    const mainHeader = page.locator('h1', { hasText: 'Лента заказов' });
    await expect(mainHeader).toBeVisible({ timeout: 10000 });

    // 3. Assert: Проверяем наличие ключевых блоков статистики (компонент FeedStatus)
    const totalOrdersHeader = page.locator('text=Выполнено за все время:');
    const todayOrdersHeader = page.locator('text=Выполнено за сегодня:');

    await expect(totalOrdersHeader).toBeVisible();
    await expect(todayOrdersHeader).toBeVisible();
  });
});
