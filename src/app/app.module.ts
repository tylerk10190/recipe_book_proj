import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import { ShoppingEditComponent } from './shoppingEdit/shoppingEdit.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './theRecipeBook/recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipeDetails/recipeDetails.component';
import { RecipeItemComponent } from './recipeItem/recipeItem.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
