import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sayNumber'
})
export class SayNumberPipe implements PipeTransform {

  /**
   *
   * @param value: Number
   * @param args: [{number: 0, word: 'Zero'},{number: 1, word: 'One'}]
   */
  transform(value: any, args?: any): any {
    try {
      if (args) {
        const object = args.filter(data => data.number === value);
        if (object.length > 0) {
          return object[0].word;
        } else {
          return value;
        }
      }

      return value;
    } catch (error) {
      console.log(error);
      return value;
    }
  }

}
