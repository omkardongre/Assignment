import { Component } from '@angular/core';

@Component({
  selector: 'app-question4-child',
  standalone: true,
  imports: [],
  templateUrl: './question4-child.component.html',
  styleUrl: './question4-child.component.css'
})
export class Question4ChildComponent {
  public word:string="";
  public length:number=0;

  public getLength(name:string) {
    this.length=name.length;
  }
}
