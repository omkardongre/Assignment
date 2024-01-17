import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {
  technologyArray = ["Angular", "Nodejs", "Artificial Intelligence", "Machine Learning", "Blockchain"];
}
