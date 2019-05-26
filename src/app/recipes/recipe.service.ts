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
      'https://www.guiabh.com.br/Repositorio/Upload/Destaque/320x320/sanduiche-em-bh-imagem.jpg',
      [
        new Ingredient('Pão', 1),
        new Ingredient('Queijo', 2),
        new Ingredient('Hamburger', 1)
      ]
    ),

    new Recipe(
      'Schnitzel',
      'Delicioso bife a milasa a moda austriaca',
      'http://palavrasesabores.com.br/wp-content/uploads/2015/10/bife-milanesa-650x516.jpg',
      [
        new Ingredient('Bife', 1),
        new Ingredient('Ovos', 2),
        new Ingredient('Farinha de Trigo', 1)
      ]
    )


  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
