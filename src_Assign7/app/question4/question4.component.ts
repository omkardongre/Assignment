import { Component } from '@angular/core';

@Component({
  selector: 'app-question4',
  standalone: true,
  imports: [],
  templateUrl: './question4.component.html',
  styleUrl: './question4.component.css'
})
export class Question4Component {
  public text:string="Marvellous Infosystem";

  public getUpperCase() {
    this.text=this.text.toUpperCase();
  }
  public getLowerCase() {
    this.text=this.text.toLowerCase();
  }
}


