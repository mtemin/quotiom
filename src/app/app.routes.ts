import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {CategoriesComponent} from "./pages/categories/categories.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Quotium | Home Page'
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Quote Categories'
  },
];
