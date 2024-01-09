import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let name = value;
    return name.split('').reverse().join('')
  }
}
