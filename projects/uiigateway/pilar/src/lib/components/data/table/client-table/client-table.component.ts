import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Page } from '../../../../models/';
import { TablePageService } from '../../../../services/table-page.service';

@Component({
  selector: 'uii-client-table',
  templateUrl: './client-table.component.html'
})
export class ClientTableComponent implements OnInit, OnDestroy {
  @Input() actionColumn: boolean;
  @Input() actionTitle: string;
  @Input() actionInValidation: boolean;
  @Input() checkboxColumn: boolean;
  @Input() footerInfo: boolean;
  @Input() footerOptions: boolean;
  @Input() limitOptions: boolean;
  @Input() paginationOptions: boolean;
  @Input() radioColumn: boolean;
  @Input() searchOptions: boolean;
  @Input()
  set columns(data: any) {
    data.forEach((column: any) => {
      column.sort = '';
    });
    this._columns = data;
  }
  @Input()
  set rows(data: any) {
    this._rowsCollection = data;
    this._rowsTemp = data;
    this.page.totalElements = data.length;
    this._rows = this.getDataOfCurrentPage(data);
  }

  @Output() editClicked = new EventEmitter();
  @Output() deleteClicked = new EventEmitter();
  @Output() detailClicked = new EventEmitter();
  @Output() inValidateClicked =  new EventEmitter();
  @Output() pageChanged = new EventEmitter();
  @Output() printClicked = new EventEmitter();
  @Output() publishClicked = new EventEmitter();
  @Output() radioSelect = new EventEmitter();
  @Output() reloadClicked = new EventEmitter();
  @Output() selectedRows = new EventEmitter();
  @Output() switchChanged = new EventEmitter();
  @Output() validateClicked = new EventEmitter();
  @Output() verifyClicked = new EventEmitter();
  @Output() limitChanged = new EventEmitter();

  page = new Page();
  selectAllRows = false;
  sortTimerInterval: any;
  _columns: Array<any> = [];
  _rows: Array<any> = [];
  _rowsCollection: Array<any> = [];
  _rowsTemp: Array<any> = [];
  _selectedRows: Array<any> = [];

  constructor(private _tablePageSvc: TablePageService) { }

  ngOnInit() {
    this.page.size = 10;
    this.page.totalElements = this._rowsCollection.length;
    this._rows = this.getDataOfCurrentPage(this._rowsCollection);
    this._tablePageSvc.setTablePage(this.page);
  }

  ngOnDestroy(): void {
    clearInterval(this.sortTimerInterval);
  }

  getDataOfCurrentPage(colleciton: any) {
    const data = colleciton.slice(
      (this.getStartPage(this.page) - 1), this.getEndPage(this.page)
    );

    data.forEach((element: any, i: number) => {
      element.number = this.getStartPage(this.page) + i;
    });

    return data;
  }

  getEndPage(page: Page): number {
    let end = (page.pageNumber * page.size) + page.size;
    end = end > page.totalElements ? page.totalElements : end;
    return end;
  }

  getStartPage(page: Page) {
    return page.pageNumber * page.size + 1;
  }

  mapActions(prop: any) {
    const data = this.getDataOfCurrentPage(this._rowsTemp)[prop.index];
    switch (prop.type) {
      case 'update':
        this.editClicked.emit(data);
      break;
      case 'delete':
        this.deleteClicked.emit(data);
      break;
      case 'detail':
        this.detailClicked.emit(data);
      break;
      case 'print':
        this.printClicked.emit(data);
      break;
      case 'reload':
        this.reloadClicked.emit(data);
      break;
      case 'verify':
        this.verifyClicked.emit(data);
      break;
      case 'validate':
        this.validateClicked.emit(data);
      break;
      case 'invalidate':
        this.inValidateClicked.emit(data);
      break;
      case 'publish':
        this.publishClicked.emit(data);
      break;
      case 'activate':
        this.switchChanged.emit(data);
      break;
    }
  }

  onLimitChange(limit: number) {
    this.page.size = Number(limit);
    this.page.pageNumber = 0;
    this._rows = this.getDataOfCurrentPage(this._rowsCollection);
    this._tablePageSvc.setTablePage(this.page);
  }

  onPageChange($event: any) {
    this.page.pageNumber = $event.page;
    this._rows = this.getDataOfCurrentPage(this._rowsTemp);
    this._tablePageSvc.setTablePage(this.page);
  }

  onRadioSelect(data: any) {
    this.reloadClicked.emit(data);
  }

  onRowSelect(type: string, $event: any, data?: any) {
    if ($event.target.checked) {
      (type === 'single') ? this._selectedRows.push(data) : this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
    } else {
      this._selectedRows = (type === 'single') ?  this._selectedRows.filter(item => item.number !== data.number) : [];
    }
    this.selectedRows.emit(this._selectedRows);
  }

  onRowSelectMobile($event) {
    if ($event.target.checked) {
      this.selectAllRows = true;
      this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
    } else {
      this.selectAllRows = false;
      this._selectedRows = [];
    }
    this.selectedRows.emit(this._selectedRows);
  }

  onSearchChange(keyword: string) {
    const filteredKeyword = keyword.toLowerCase();
    const columnsFiltered = this._columns;

    let tempFiltered = [];
    if (!filteredKeyword) {
      tempFiltered = this._rowsCollection;
    } else {
      tempFiltered = this._rowsCollection.filter(function (item) {
        for (const key in columnsFiltered) {
          if (columnsFiltered.hasOwnProperty(key)) {
            const value = item[columnsFiltered[key].prop];
            if (value !== undefined && String(value).toLowerCase().includes(filteredKeyword)) {
              return true;
            }
          }
        }
        return false;
      });
    }
    this._rowsTemp = tempFiltered;
    this.page.pageNumber = 0;
    this.page.totalElements = this._rowsTemp.length;
    this._tablePageSvc.setTablePage(this.page);
    this._rows = this.getDataOfCurrentPage(this._rowsTemp);
  }

  setColumnSortDirection(column: any, index: number) {
    clearInterval(this.sortTimerInterval);
    this._columns.forEach((item: any, idx: number) => {
      if (idx !== index) { item.sort = ''; }
    });
    column.sort = (column.sort === 'asc') ? 'desc' : 'asc';
    this.sortTimerInterval = setTimeout(() => {
      column.sort = '';
    }, 2000);
  }

  sortTableColumn(column: any, index: number) {
    this.setColumnSortDirection(column, index);

    this._rows.sort(this.sortColumValue(column));
  }

  sortTableColumnMobile(column: any) {
    this._rows.sort(this.sortColumValue(column));
    column.sort = '';
  }

  sortColumValue(data: any) {
    let sortOrder = 1;
    if (data.prop[0] === '-') {
        sortOrder = -1;
        data.prop = data.prop.substr(1);
    }
    return function (currentValue: any, nextValue: any) {
      let result;
      if (data.sort === 'asc') {
        result = (currentValue[data.prop] < nextValue[data.prop]) ? -1 : (currentValue[data.prop] > nextValue[data.prop]) ? 1 : 0;
      } else {
        result = (currentValue[data.prop] > nextValue[data.prop]) ? -1 : (currentValue[data.prop] < nextValue[data.prop]) ? 1 : 0;
      }
      return result * sortOrder;
    };
  }

}
