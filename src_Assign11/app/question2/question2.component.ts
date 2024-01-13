import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [],
  templateUrl: './question2.component.html',
  styleUrl: './question2.component.css',
  providers:[StringService, NumberService]
})
export class Question2Component {
  
  public countCapitalLetters:number=0;
  public isPrime:boolean=true;
  constructor(private stringService:StringService, private numberService:NumberService){
    
    this.countCapitalLetters=this.stringService.CountCapital("Jai Ganesh");
    this.isPrime=this.numberService.ChkPrime(11);
  }
}
