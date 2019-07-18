import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanYesNo'
})
export class BooleanYesNoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 1 || value === true) {
      return 'Ya';
    } else {
      return 'Tidak';
    }
  }

}
