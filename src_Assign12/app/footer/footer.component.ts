import { Component, Output } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers:[PersonalInfoComponent]
})

export class FooterComponent {

  constructor(private router: Router, private dataService:DataService, private personalInfo:PersonalInfoComponent) {  }

  @Output() submitForm:EventEmitter<void>=new EventEmitter<void>();

  triggerSubmitForm() {

    // Get the form data from PersonalInfoComponent
    const personalInfoData = this.personalInfo.getPersonalInfoData();
    // Set the personal information in the DataService
    this.dataService.setPersonInfo(personalInfoData);
    this.submitForm.emit();
    this.router.navigate(['/display']);
  
  }


}
