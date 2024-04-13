import {Component, effect, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatList, MatListItem} from "@angular/material/list";
import {RecipeService} from "./recipe.service";
import {Recipe} from "./core/models/recipe";
import {RecipeComponent} from "./recipe/recipe.component";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, MatCard, MatCardTitle, MatFormField, MatInput, MatCardSubtitle, MatList, MatListItem, RecipeComponent, ButtonModule, ChipsModule],
  providers: [RecipeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private recipeService = inject(RecipeService);
  recipes = signal<Recipe[] | undefined>(undefined)
  title = 'recipe-book';

  constructor() {
    effect(() => {
      this.recipeService.get().subscribe(recipes => {
        this.recipes.set(recipes);
      });
    });
  }

  showDetail() {

  }
}
