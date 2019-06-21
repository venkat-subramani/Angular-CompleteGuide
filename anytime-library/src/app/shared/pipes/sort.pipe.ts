import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], propName: string, reverse: boolean): any {
    if (!propName || !items || !items.length) {
      return items;
    }
    const resultArray = items.sort((a, b) => {
      if (reverse) {
        [a, b] = [b, a];
      }
      if (propName === 'averageRating') {
        return Number(a[propName]) - Number(b[propName]);
      } else {
        if (a[propName] < b[propName]) {
          return -1 ;
        }
        if (a[propName] > b[propName]) {
          return 1;
        }
        return 0;
      }
    });
    return resultArray;
  }

}
