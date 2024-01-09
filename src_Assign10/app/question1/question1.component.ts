import { Component } from '@angular/core';
import { CompSuccessDirective } from '../comp-success.directive';
import { CompFailureDirective } from '../comp-failure.directive';

@Component({
  selector: 'app-question1',
  standalone: true,
  imports: [CompSuccessDirective, CompFailureDirective],
  templateUrl: './question1.component.html',
  styleUrl: './question1.component.css'
})
export class Question1Component {

}
