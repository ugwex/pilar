import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'showActiveFlag'
})
export class ShowActiveFlagPipe implements PipeTransform {

  constructor(private translateSvc: TranslateService) {}

  transform(value: any, args?: any): any {
    try {
      let activeFlag = '';
      let i = 0;
      for (const key in value) {
        if (key.indexOf('flag_') !== -1 && key !== 'flag_aktif') {
          if (value[key] === 1) {
            const flag = key.replace('flag_', '');
            if (i > 0) {
              activeFlag = activeFlag + ' &#9679; ' + this.translateSvc.instant(flag);
            } else {
              activeFlag += this.translateSvc.instant(flag);
            }
            i++;
          }
        }
      }
      return activeFlag;
    } catch (error) {
      console.log(error);
      return '';
    }
  }

}
