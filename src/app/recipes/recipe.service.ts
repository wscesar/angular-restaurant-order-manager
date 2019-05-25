import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'X-Burger',
      'Delicioso X-Burger caseiro',
      'http://painel.perdigao.com.br/panel/sites/default/files/styles/is_product_cover_mob_750_823/public/recipes-images/duplo-x-burger.png?itok=RnHhGv5Y',
      [
        new Ingredient('Pão', 1),
        new Ingredient('Hamburger', 2),
        new Ingredient('Queijo', 3),
        new Ingredient('Maionese', 1)
      ]
    )
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
