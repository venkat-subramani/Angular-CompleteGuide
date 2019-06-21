import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipesChanged = new Subject();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test 1', 'Test Description 1', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Test 2', 'Test Description 2', 'https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/lemon-dessert-ww-2-points-for-entire-recipe-177581_14491.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 2)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ings: Ingredient[]) {
    this.slService.addIngredients(ings);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
