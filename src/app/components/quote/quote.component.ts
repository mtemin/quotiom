import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  @Input({required:true}) id!: number;
  @Input({required:true}) text!: string;
  @Input({required:true}) author?: string;
  @Input({required:true}) likes!: number;



}
