import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-question1',
  standalone: true,
  imports: [],
  templateUrl: './question1.component.html',
  styleUrl: './question1.component.css',
  providers: [ArithmaticService]
})
export class Question1Component {

    addResult:number=0;
    subResult:number=0;
    constructor(private arithmatic:ArithmaticService) {
      this.addResult=arithmatic.Add(2,3);
      this.subResult=arithmatic.Sub(5,2);
    }
}
