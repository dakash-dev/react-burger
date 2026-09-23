import { expect, type Locator, type Page } from '@playwright/test';

export class BurgerIngredientsPage {
  readonly page: Page;
  readonly ingredientCard: Locator;
  readonly modalHeader: Locator;
  readonly ingredientTitle: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.ingredientCard = page
      .getByTestId('ingredient-card')
      .filter({ hasText: 'Краторная булка' })
      .first();

    this.modalHeader = page.locator('text=Детали ингредиента');

    this.ingredientTitle = page
      .locator('[class*="ingredient-details"]')
      .locator('text=Краторная булка N-200i');

    this.closeButton = page.locator('[class*="modal"]').locator('button').first();
  }

  async openIngredientModal(): Promise<void> {
    await this.ingredientCard.click();
    await expect(this.modalHeader).toBeVisible();
  }

  async verifyIngredientDetails(): Promise<void> {
    await expect(this.ingredientTitle).toBeVisible();
  }

  async closeIngredientModal(): Promise<void> {
    await this.closeButton.click();
    await expect(this.modalHeader).not.toBeVisible();
  }
}
