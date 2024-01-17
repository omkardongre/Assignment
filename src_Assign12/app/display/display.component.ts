import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  
  personalInfo: any = {};


    constructor(private dataService:DataService){

    }

    ngOnInit() {
      // Subscribing to the Observable to get latest updated data in BehaviorSubject
      this.dataService.personInfo$.subscribe(data => {
        this.personalInfo = data;
      });
    }


}
