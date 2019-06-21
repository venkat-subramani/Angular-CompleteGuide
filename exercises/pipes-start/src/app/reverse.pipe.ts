import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length) {
      const newValue = value.split('').reverse().join('');
      return newValue;
    }
  }

}
