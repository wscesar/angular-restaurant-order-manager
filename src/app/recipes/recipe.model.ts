import { Ingredient } from '../shared/ingredient.model';

export class Recipe {

  constructor(
    public name: string,
    public desc: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
  }
}
