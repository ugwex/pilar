import { Page, PagedData } from '../models';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablePageService {

  page: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() {
  }

  setTablePage(page: Page) {
    this.page.next(page);
  }

  getTablePage(): Observable<Page> {
    return this.page.asObservable();
  }
}
