import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class DateService {

    constructor(
        private datePipe: DatePipe
    ) { }

    dateToString(format: string, date: Date): string {
        return this.datePipe.transform(date, format);
    }
}
