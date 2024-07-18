import {Component, ViewEncapsulation} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import categories from "../../mockDB/categories";
import famousPeople from "../../mockDB/famousPeople";
import {Category} from "../../models/Category";
import {FamousPeople} from "../../models/FamousPeople";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-categories-sidebar',
  standalone: true,
  imports: [
    AccordionModule,
    NgForOf,
  ],
  templateUrl: './categories-sidebar.component.html',
  styleUrl: './categories-sidebar.component.scss',
  encapsulation: ViewEncapsulation.None
  // schemas: [NO_ERRORS_SCHEMA]

})
export class CategoriesSidebarComponent {

  protected readonly categories:Category[] = categories;
  protected readonly famousPeople:FamousPeople[] = famousPeople;
   ngOnInit(){
     console.log(famousPeople)
   }
}
