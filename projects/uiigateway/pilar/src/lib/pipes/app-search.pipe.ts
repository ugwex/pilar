import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'appSearch'
})
export class AppsearchPipe implements PipeTransform {

  constructor(private translateSvc: TranslateService) {}

  transform(apps: any, keyword: any): any {
    if (keyword === undefined) { return apps; }

    const appsFiltered = [];
    for (const app of apps) {
        const name = this.translateSvc.instant(app.nama_aplikasi);
        const desc = this.translateSvc.instant(app.deskripsi);

        if (name.toLowerCase().includes(keyword.toLowerCase()) || desc.toLowerCase().includes(keyword.toLowerCase())) {
            appsFiltered.push(app);
        }
    }

    return appsFiltered;
  }

}
