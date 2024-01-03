import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Question1FirstComponent } from './question1-first/question1-first.component';
import { Question1SecondComponent } from './question1-second/question1-second.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';

// import { SecondCompComponent } from './second-comp/second-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Question1FirstComponent, Question1SecondComponent, Question2Component, Question3Component, Question4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment7';
}
