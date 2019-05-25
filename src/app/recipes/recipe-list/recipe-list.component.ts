import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}

