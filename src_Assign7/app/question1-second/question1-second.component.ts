import { Component } from '@angular/core';

@Component({
  selector: 'app-question1-second',
  standalone: true,
  imports: [],
  templateUrl: './question1-second.component.html',
  styleUrl: './question1-second.component.css'
})
export class Question1SecondComponent {
  public text:string="This is my second component";
}
