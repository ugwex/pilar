import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false // impure pipe, update value when change language
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateSvc: TranslateService) {}

  transform(value: string, args?: any[]): any {
    if (!value) { return; }

    return this.translateSvc.instant(value, args);
  }

}
