import { Component } from '@angular/core';

@Component({
  selector: 'app-question3',
  standalone: true,
  imports: [],
  templateUrl: './question3.component.html',
  styleUrl: './question3.component.css'
})
export class Question3Component {
  public textField:string = "Dynamic text : Marvellous Infosystem";
  public myColorClass = {
    color: "blue"
  };
}
