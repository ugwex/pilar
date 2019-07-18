import { Injectable } from '@angular/core';
import { Paginate, Alert } from './../models';
import { TranslateService } from './translate.service';

@Injectable()
export class ConfigService {

    constructor(
        private translateSvc: TranslateService
    ) { }

    paginateConfig(): Paginate {
      return {
        previous: this.translateSvc.instant('previous'),
        next: this.translateSvc.instant('next'),
        cancel: this.translateSvc.instant('cancel'),
        done: this.translateSvc.instant('done')
      };
    }
}
