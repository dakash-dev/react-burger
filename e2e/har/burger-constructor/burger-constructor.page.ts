import { expect, type Locator, type Page } from '@playwright/test';

export class BurgerConstructorPage {
  readonly page: Page;
  readonly bunCard: Locator;
  readonly dropTarget: Locator;
  readonly orderButton: Locator;
  readonly orderModal: Locator;

  constructor(page: Page) {
    this.page = page;

    // Инкапсулируем локаторы элементов конструктора
    this.bunCard = page
      .getByTestId('ingredient-card')
      .filter({ hasText: 'Краторная булка' })
      .first();
    this.dropTarget = page.getByTestId('constructor-drop-target');
    this.orderButton = page.getByTestId('order-button');
    this.orderModal = page.locator('[class*="modal__modal"]').first();
  }

  // Метод имитации перетаскивания (Drag and Drop) булки в конструктор
  async dragBunToConstructor(): Promise<void> {
    await this.bunCard.hover();
    await this.page.mouse.down();
    const targetBox = await this.dropTarget.boundingBox();
    if (targetBox) {
      await this.page.mouse.move(
        targetBox.x + targetBox.width / 2,
        targetBox.y + targetBox.height / 2,
        { steps: 5 }
      );
    }
    await this.page.mouse.up();
  }

  // Метод оформления заказа
  async clickOrderButton(): Promise<void> {
    await expect(this.orderButton).toBeEnabled();
    await this.orderButton.click();
  }

  // Метод валидации открывшейся модалки с номером заказа
  async verifyOrderNumber(expectedNumber: string): Promise<void> {
    await expect(this.orderModal).toBeVisible();
    await expect(this.orderModal).toContainText(expectedNumber);
  }
}
