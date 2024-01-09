import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const num1 = value as number;
    const num2 = args[0] as number;
    return num1 + num2;
  }

}
