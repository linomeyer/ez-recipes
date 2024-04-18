import {Component, input} from '@angular/core';
import {Recipe} from "../core/models/recipe";
import {DialogModule} from "primeng/dialog";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    DialogModule
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe = input.required<Recipe>();

}
