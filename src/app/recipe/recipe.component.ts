import {Component, input} from '@angular/core';
import {MatCard, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {Recipe} from "../core/models/recipe";
import {NgOptimizedImage} from "@angular/common";
import {CardModule} from "primeng/card";
import {OrderListModule} from "primeng/orderlist";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    MatCard,
    MatCardSubtitle,
    MatCardTitle,
    MatList,
    MatListItem,
    NgOptimizedImage,
    CardModule,
    OrderListModule
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  recipe = input.required<Recipe>()
}
