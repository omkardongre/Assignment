import { Component } from '@angular/core';

@Component({
  selector: 'app-question1-first',
  standalone: true,
  imports: [],
  templateUrl: './question1-first.component.html',
  styleUrl: './question1-first.component.css'
})
export class Question1FirstComponent {
  public text:string="This is my first component";
}
