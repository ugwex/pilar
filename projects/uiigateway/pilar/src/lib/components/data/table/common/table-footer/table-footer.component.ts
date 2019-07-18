import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../../../../../models';
import { TablePageService } from '../../../../../services/table-page.service';

@Component({
  selector: 'uii-table-footer',
  template: `
    <div class="table-footer" *ngIf="footerInfo && totalElements > 0">
      <span>Menampilkan {{startPage}} sampai {{endPage}} dari {{totalElements}} data</span>
    </div>
    <ng-container *ngIf="true">
      <uii-pagination
        [dataPerPage]="_page.size"
        [amountOfData]="totalElements"
        (pageChanged)="selectedPageChange($event)">
      </uii-pagination>
    </ng-container>`,
  styles: [`
    .table-footer {
      font-size: 12px;
      margin: 20px 0;
    }`]
})
export class TableFooterComponent implements OnInit {
  @Input() footerInfo: boolean;
  @Input() footerOptions: boolean;
  @Input() paginationOptions: boolean;
  @Output() pageChanged = new EventEmitter();
  @Input() totalElements: number;
  @Input() startPage: number;
  @Input() endPage: number;
  _page: Page;

  constructor(private _tablePageSvc: TablePageService) { }

  ngOnInit() {
    this.setPageInfo();
  }

  setPageInfo() {
    this._tablePageSvc.getTablePage().subscribe((page: Page) => {
      this._page = page;
    });
  }

  selectedPageChange($event: any) {
    this.pageChanged.emit($event);
  }

}
