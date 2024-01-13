import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(no:number):boolean{
    for(let i=2;i<=no/2;i++){
      if(no%i==0){
        return false;
      }
    }
    return true;
  }

}
