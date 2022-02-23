import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filteredGames: string, propName: string): any[] {
    const resultArray = [];

    if (value.length === 0 || filteredGames === '' || propName === '') {
      return value;
    }

    for (const item of value) {
      if (item[propName].toLowerCase().includes(filteredGames.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}