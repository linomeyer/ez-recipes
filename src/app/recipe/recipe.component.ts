import {Component, input, signal} from '@angular/core';
import {MatCard, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {Recipe} from "../core/models/recipe";
import {NgOptimizedImage} from "@angular/common";
import {CardModule} from "primeng/card";
import {OrderListModule} from "primeng/orderlist";
import {RecipeDetailComponent} from "../recipe-detail/recipe-detail.component";

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
    OrderListModule,
    RecipeDetailComponent
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  recipe = input.required<Recipe>()
  showDetail = signal(false);

  toggleShowDetail() {
    this.showDetail.set(!this.showDetail());
  }
}
