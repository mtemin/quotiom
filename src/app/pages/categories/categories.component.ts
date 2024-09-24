import { Component, } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoryCardComponent } from "../../components/category-card/category-card.component";
import categories from "../../mockDB/categories";
import {CommonModule, NgClass, NgForOf} from "@angular/common";
import { Category } from "../../models/Category";
import { Observable } from "rxjs";
import { SubcategoryListComponent } from "../../components/subcategory-list/subcategory-list.component";
import { Store } from "@ngrx/store";
import { increment, decrement, reset } from "../../state/counter/counter.actions"; // Import action creators

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    CommonModule,
    NavbarComponent,
    CategoryCardComponent,
    SubcategoryListComponent,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  host: { 'class': 'categories-component' }
})
export class CategoriesComponent {

  categories: Category[] = categories;
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment()); // Use action creators
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  solagit(category: string) {
    let categoryCard = document.querySelector(`#${category}-topic`);
    if (categoryCard) {
      categoryCard.classList.toggle('soldayim-abi');
    } else {
      console.log("btn is null");
    }
  }

  setSelectedCategory(category: string) {
    console.log(category);
  }
}
