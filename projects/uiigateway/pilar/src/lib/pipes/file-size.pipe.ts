import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    try {
      if (args) {
        let size: string;
        switch (args) {
          case 'KB':
            if (value >= 1024) {
              size = (value / 1024) + 'KB';
            } else {
              size = value + 'B';
            }
            break;

          case 'MB':
            if (value >= (1024 * 1024)) {
              size = (value / (1024 * 1024)) + 'MB';
            } else {
              size = value + 'B';
            }
            break;

          default:
            break;
        }

        return size;
      }

      return value;
    } catch (error) {
      console.log(error);
      return value;
    }
  }

}
