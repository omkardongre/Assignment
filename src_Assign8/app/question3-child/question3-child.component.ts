import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-question3-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './question3-child.component.html',
  styleUrl: './question3-child.component.css'
})
export class Question3ChildComponent {
    public word:string="";
}
