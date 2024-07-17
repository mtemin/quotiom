import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink

  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  url:string='';
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.url = window.location.href;
  }
}
