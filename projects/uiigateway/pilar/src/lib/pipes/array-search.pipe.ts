import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySearch'
})
export class ArraySearchPipe implements PipeTransform {

  transform(values: any, args?: any): any {
    try {
      if (args) {
        const valuesFiltered = [];
        for (const value of values) {
          const field: string = value[args.field] || '';

          if (field.toLowerCase().includes(args.keyword.toLowerCase())) {
            valuesFiltered.push(value);
          }
        }
        return valuesFiltered;
      }

      return values;
    } catch (error) {
      console.log(error);
      return values;
    }
  }

}
