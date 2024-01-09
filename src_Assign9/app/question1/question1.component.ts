import { Component } from '@angular/core';
import { MyRevPipe } from '../my-rev.pipe';

@Component({
  selector: 'app-question1',
  standalone: true,
  imports: [MyRevPipe],
  templateUrl: './question1.component.html',
  styleUrl: './question1.component.css'
})
export class Question1Component {
  public Name:string="Marvellous";
}
