import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import topics from "../../mockDB/topics";
import categories from "../../mockDB/categories";
import famousPeople from "../../mockDB/famousPeople";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    // topics,
    // categories,
    // famousPeople,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
