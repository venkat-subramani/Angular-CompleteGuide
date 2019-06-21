import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterString: string, propName: string): any {
    if (!filterString) {
      return items;
    }
    let resultArray = [];
    resultArray = items.filter((item) => {
      if (propName === 'averageRating') {
        return Number(item[propName]) >= Number(filterString);
      } else {
        const property = item[propName].toLowerCase();
        return property.includes(filterString.toLowerCase());
      }
    });
    return resultArray;
  }

}
