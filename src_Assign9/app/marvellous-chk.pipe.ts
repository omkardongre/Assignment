import { Pipe, PipeTransform } from '@angular/core';
import { checkPrime } from 'crypto';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const operation = args[0] as string;
    const num = value as number;
    if (operation === "Prime") {
      if (num <= 1) {
        return "Not prime";
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return "Not prime";
        }
      }
      return "Prime";
    }

    if (operation === "Perfect") {
      let sum = 0;
      for (let i = 1; i < num; i++) {
        if (num % i === 0) {
          sum += i;
        }
      }
      if (sum === num) {
        return "Perfect";
      }
      return "Not perfect";
    }

    if (operation === "Even") {
      if (num % 2 === 0) {
        return "Even";
      }
      return "Not even";
    }

    if (operation === "Odd") {
      if (num % 2 !== 0) {
        return "Odd";
      }
      return "Not odd";
    }

    return null
  }

}
