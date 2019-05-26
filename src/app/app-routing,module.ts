import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/receitas', pathMatch: 'full' },

  { path: 'receitas', component: RecipesComponent, children:
    [
      { path: '', component: RecipeStartComponent },
      { path: 'criar', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/editar', component: RecipeEditComponent },
    ]
  },

  { path: 'lista-de-compras', component: ShoppingListComponent, children:
    [
      { path: 'editar', component: ShoppingEditComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
