import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-question2-child',
  standalone: true,
  imports: [],
  templateUrl: './question2-child.component.html',
  styleUrl: './question2-child.component.css'
})
export class Question2ChildComponent {

  @Input() public recieveData:string="";
  @Output() public eventEmitter:EventEmitter<string>=new EventEmitter();

  emitEvent() {
    this.eventEmitter.emit("Hello from child")
  }
  
}
