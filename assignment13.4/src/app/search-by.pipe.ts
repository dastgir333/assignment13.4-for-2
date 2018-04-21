import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy',
  pure:false
})
export class SearchByPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (value.length !== 0) {
      console.log(value )
      return value.filter((item) => item.lastName.startsWith(args));
    } else {
      return [];
    }
  };
}
