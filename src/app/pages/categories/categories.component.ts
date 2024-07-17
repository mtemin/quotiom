import {Component, signal, WritableSignal} from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {CategoryCardComponent} from "../../components/category-card/category-card.component";
import categories from "../../mockDB/categories";
import {NgForOf} from "@angular/common";
import {Category} from "../../../types";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NavbarComponent,
    CategoryCardComponent,
    NgForOf,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  host: {'class': 'categories-component'}
})
export class CategoriesComponent {
  categories:Category[] = categories;

}
