import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Question1ChildComponent } from './question1-child/question1-child.component';
import { Question2ChildComponent } from './question2-child/question2-child.component';
import { Question3ChildComponent } from './question3-child/question3-child.component';
import { Question4ChildComponent } from './question4-child/question4-child.component';


// import { SecondCompComponent } from './second-comp/second-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Question1ChildComponent, Question2ChildComponent, Question3ChildComponent, Question4ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment8';
  public dataReceived:string="";
  public sendDataFromParent:string = "Hello from parent";

}
