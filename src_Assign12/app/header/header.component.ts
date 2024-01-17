import { Component } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() {
    console.log('HeaderComponent constructor');
  }
  
  // like constructore calls once but this ensure your component is fully initialized 
  // and ready for Angular-specific operations.
  ngOnInit() {
    console.log('HeaderComponent ngOnInit');
  }
}
