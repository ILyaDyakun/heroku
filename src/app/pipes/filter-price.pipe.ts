import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(value: any[], price: number, propName: number): any[] {
    const resultArray = [];

    for (const item of value) {
      if (item[propName] <= price) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
