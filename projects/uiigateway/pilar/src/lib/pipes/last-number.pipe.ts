import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastNumber'
})
export class LastnumberPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (value > 9) {
      const valString = value.toString();
      return valString.substr(-1);
    } else {
      return value;
    }
  }

}
