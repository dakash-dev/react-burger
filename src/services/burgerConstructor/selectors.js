import { createSelector } from '@reduxjs/toolkit';

const selectBurgerConstructorState = (state) => state.burgerConstructor;

export const selectConstructorBun = (state) => state.burgerConstructor.bun;
export const selectConstructorIngredients = (state) =>
  state.burgerConstructor.ingredients;

// Мемоизированный селектор для расчета общей стоимости бургера
export const selectTotalPrice = createSelector(
  [selectConstructorBun, selectConstructorIngredients],
  (bun, ingredients) => {
    // Стоимость начинок и соусов (складываем цены через reduce).
    const ingredientsPrice = ingredients.reduce((sum, item) => sum + item.price, 0);
    // Стоимость булки (умножаем на 2, - так как булки всегда две — верх и низ).
    const bunPrice = bun ? bun.price * 2 : 0;
    return ingredientsPrice + bunPrice;
  }
);

// Мемоизированный селектор для подсчета количества конкретного ингредиента.
// здесь id нужного ингредиента передается в качестве аргумента.
export const selectIngredientCount = (ingredientId) =>
  createSelector([selectBurgerConstructorState], (constructorState) => {
    const { bun, ingredients } = constructorState;
    let count = 0;

    // Если запрашиваемый ID совпадает с выбранной булкой, счетчик всегда равен 2.
    if (bun && bun._id === ingredientId) {
      return 2;
    }

    // Считаем, сколько раз ID начинки/соуса встречается в конструкторе.
    ingredients.forEach((item) => {
      if (item._id === ingredientId) {
        count += 1;
      }
    });
    return count;
  });
