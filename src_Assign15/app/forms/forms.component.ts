import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpressServiceService } from '../express-service.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  providers: [ExpressServiceService]
})
export class FormsComponent {
  constructor(private formBuilder:FormBuilder, private expressService:ExpressServiceService){}

  SupportCenterForm = this.formBuilder.group({
  // $ needed to enforce the condition till end of characters
  firstName: ["", [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
  lastName: ["", [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
  email: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+@+[a-zA-Z]+\.[a-zA-Z]{2,}$/)]],
  phone: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
  address: ["", Validators.required],
  })

  onSubmit() {

    console.log(this.SupportCenterForm.value)

    if(this.SupportCenterForm.value) {
      const formData = this.SupportCenterForm.value;

      console.log(formData)
      this.expressService.submitFormData(formData).subscribe(
        response => {
            console.log("Form Data submitted successfully ", response);
        },
        error => {
          console.error("Error submitting form data :", error);
        })
    }
  }

}
