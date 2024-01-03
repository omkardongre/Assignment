import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MarvellousFirstAppComponent } from './marvellous-first-app/marvellous-first-app.component';
import { MarvellousLabelComponent } from './marvellous-label/marvellous-label.component';
import { DemoComponent } from './demo/demo.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
// import { SecondCompComponent } from './second-comp/second-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MarvellousFirstAppComponent, MarvellousLabelComponent,
    DemoComponent, FirstCompComponent /*SecondCompComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment4';
}
