import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'roomSearch'
})
export class CbtRoomSearchPipe implements PipeTransform {

  constructor(private translateSvc: TranslateService) {}

  transform(rooms: any, keyword: any): any {
    if (keyword === undefined) { return rooms; }

    const roomsFiltered = [];
    for (const room of rooms) {
        const name = this.translateSvc.instant(room.nama);
        const no_upcm = this.translateSvc.instant(room.no_upcm);

        if (name.toLowerCase().includes(keyword.toLowerCase()) || no_upcm.toLowerCase().includes(keyword.toLowerCase())) {
            roomsFiltered.push(room);
        }
    }

    return roomsFiltered;
  }

}
