import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private el : ElementRef) { 
    this.el.nativeElement.style.color = 'yellow';
    this.el.nativeElement.style.fontWeight = 'bold';
  }


}
