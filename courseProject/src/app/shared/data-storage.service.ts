import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    // const token = this.authService.getToken();
    /* const headers = new HttpHeaders().set('Authorization', 'Bearer xsaxaxaca').append('content-type', 'application/json');

    return this.httpClient.put('https://ng7-recipe-book.firebaseio.com/recipes.json',     this.recipeService.getRecipes(), {
      observe: 'body',
      params: new HttpParams().set('auth', token),
      headers: headers
    }); */

    // tslint:disable-next-line:max-line-length
    const req = new HttpRequest('PUT', 'https://ng7-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true});

    return this.httpClient.request(req);
  }

  getRecipes() {
    // const token = this.authService.getToken();

    return this.httpClient.get<Recipe[]>('https://ng7-recipe-book.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
