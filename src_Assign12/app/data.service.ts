import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //"BehaviorSubject" -maintaining and broadcasting the current or "behavior" value to new subscribers.
  private personInfoSource = new BehaviorSubject<any>({});

  //The use of asObservable is particularly useful when exposing an observable from a service to 
  // external components. It ensures that components can only subscribe to changes but not modify
  // the underlying BehaviorSubject.

  // Creating an observable from the BehaviorSubject
  personInfo$ = this.personInfoSource.asObservable();

  setPersonInfo(data:any) {
    // Updating the value BehaviorSubject
    this.personInfoSource.next(data)
  }

  public pp:any;


}
