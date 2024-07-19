import {Component, Inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quote-detail',
  standalone: true,
  imports: [],
  templateUrl: './quote-detail.component.html',
  styleUrl: './quote-detail.component.scss'
})
export class QuoteDetailComponent {
  // @Input({required:true}) quoteId!: string;
  // id: string|null;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {


    let id = this.route.snapshot.paramMap.get('id');

  }
}
