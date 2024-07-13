import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import topics from "../../mockDB/topics";
import categories from "../../mockDB/categories";
import famousPeople from "../../mockDB/famousPeople";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NavbarComponent,
    // topics,
    // categories,
    // famousPeople,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
