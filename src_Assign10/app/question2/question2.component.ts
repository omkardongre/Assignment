import { Component } from '@angular/core';
import { CustomStyleDirective } from '../custom-style.directive';

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [CustomStyleDirective],
  templateUrl: './question2.component.html',
  styleUrl: './question2.component.css'
})
export class Question2Component {

}
