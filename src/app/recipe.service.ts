import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recipe} from "./core/models/recipe";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  get() {
    let recipes: Recipe[] = [];
    return this.http.get<Recipe[]>("http://localhost:3000/recipes").pipe(
      tap((res: Recipe[]) => {
        console.log("fetched recipes");
      })
    );
  }
}
