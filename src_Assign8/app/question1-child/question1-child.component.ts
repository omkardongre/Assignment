import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-question1-child',
  standalone: true,
  imports: [],
  templateUrl: './question1-child.component.html',
  styleUrl: './question1-child.component.css'
})
export class Question1ChildComponent {

  @Output() public eventEmitter = new EventEmitter();

  public sendMessage(value:any) {
    this.eventEmitter.emit(value);
  }
}
