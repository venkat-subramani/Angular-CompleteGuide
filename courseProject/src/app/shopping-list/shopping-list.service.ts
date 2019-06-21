import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients.slice()[index];
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.getIngredients().slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients().slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.getIngredients().slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.getIngredients().slice());
  }
}
