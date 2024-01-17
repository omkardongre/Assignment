import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {

  constructor(private dataService:DataService) {
  }

  public Name:string="";
  public Email:string="";

  @Output() submitPersonal: EventEmitter<any> = new EventEmitter<any>();
  getPersonalInfoData() {
    return {
      name: this.Name,
      email: this.Email
    };
  }

}
