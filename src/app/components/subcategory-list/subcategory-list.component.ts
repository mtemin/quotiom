import { Component } from '@angular/core';
import topics from "../../mockDB/topics";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-subcategory-list',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './subcategory-list.component.html',
  styleUrl: './subcategory-list.component.scss'
})
export class SubcategoryListComponent {

  protected readonly topics:string[] = topics;
}
