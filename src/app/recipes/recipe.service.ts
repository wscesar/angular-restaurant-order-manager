import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Receita teste',
      'Esta é uma receita teste',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/09C2/production/_95189420_plate-1968011_1920.jpg'
    ),

    new Recipe(
      'Receita teste 02',
      'Esta é uma receita teste 02',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/09C2/production/_95189420_plate-1968011_1920.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
