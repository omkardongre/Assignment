import { Component } from '@angular/core';
import { MyAddPipe } from '../my-add.pipe';
import { MyMultPipe } from '../my-mult.pipe';

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [MyAddPipe, MyMultPipe],
  templateUrl: './question2.component.html',
  styleUrl: './question2.component.css'
})
export class Question2Component {

}



