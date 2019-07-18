import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, OnChanges } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Page, OptionsSelect } from '../../../models';

@Component({
  selector: 'uii-datatable',
  templateUrl: './data-table.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./data-table.component.scss']
})


export class UiiDataTableComponent implements OnChanges, OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  @Input() serverMode = false;
  @Input() rows: Array<any> = [];
  @Input() temp: Array<any> = [];
  @Input() columns: Array<any> = [];
  @Input() totalRecords = 0;
  @Input() actionColumn = false;
  @Input() actionColumnWidth: number;
  @Input() actionRepeat = false;
  @Input() actionInValidation = false;
  @Input() btnDetail = false;
  @Input() btnEdit = false;
  @Input() btnDelete = false;
  @Input() btnSwitch = false;
  @Input() limitOptions = true;
  @Input() radioActiveOptions = false;
  @Input() searchOptions = true;
  @Input() radioSelectAllOptions = false;
  @Input() selected: Array<any> = [];
  @Input() selectAllRowsOnPage = false;
  @Input() selectionType;
  @Input() displayCheck;
  @Input() showBtnPrint = false;
  @Input() showBtnValidation = false;

  @Output() deleteClicked = new EventEmitter();
  @Output() detailClicked = new EventEmitter();
  @Output() editClicked = new EventEmitter();
  @Output() limitChanged = new EventEmitter();
  @Output() pageChanged = new EventEmitter();
  @Output() printClicked = new EventEmitter();
  @Output() publishClicked = new EventEmitter();
  @Output() searchChanged = new EventEmitter();
  @Output() radioChanged = new EventEmitter();
  @Output() reloadClicked = new EventEmitter();
  @Output() switchChanged = new EventEmitter();
  @Output() validateClicked = new EventEmitter();
  @Output() verifyClicked = new EventEmitter();
  @Output() selectedRow = new EventEmitter();
  @Output() inValidateClicked =  new EventEmitter();

  showColumnAction = false;
  page = new Page();
  pageSize = 10;
  limitOpts: OptionsSelect[] = [
    {
      label: '10',
      value: 10
    },
    {
      label: '25',
      value: 25
    },
    {
      label: '50',
      value: 50
    },
    {
      label: '100',
      value: 100
    }
  ];

  constructor() { }

  ngOnInit() {
    this.page.size = this.pageSize;
    this.pageChange({ offset: 0 });
    this.checkActionItems();
  }

  ngOnChanges() {
    this.temp = this.rows;
  }

  checkActionItems() {
    if (this.btnDetail || this.btnEdit || this.btnDelete || this.btnSwitch) {
      this.showColumnAction = true;
    } else {
      this.showColumnAction = false;
    }
  }

  deleteClick(data) {
    this.deleteClicked.emit(data);
  }

  detailClick(data) {
    this.detailClicked.emit(data);
  }

  editClick(data) {
    this.editClicked.emit(data);
  }

  getPageStart(page: any): string {
    const start = page.totalElements > 0 ? (page.pageNumber * page.size) + 1 : 0;
    return start.toLocaleString();
  }

  getPageEnd(page: any): string {
    let end = (page.pageNumber * page.size) + page.size;
    end = end > page.totalElements ? page.totalElements : end;

    return end.toLocaleString();
  }

  getTotalCount(page: any): string {
    return page.totalElements.toLocaleString();
  }

  limitChange($event) {
    const limit = Number($event.target.value);
    this.page.size = limit;
    this.page.pageNumber = 0;
    this.limitChanged.emit(this.page);
  }

  pageChange(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.pageChanged.emit(this.page);
  }

  printClick(data) {
    this.printClicked.emit(data);
  }

  publishClick(data) {
    this.publishClicked.emit(data);
  }

  reloadClick(data) {
    this.reloadClicked.emit(data);
  }

  radioChange(data) {
    this.radioChanged.emit(data);
  }

  searchChange(keyword) {
    this.page.keyword = keyword;
    this.searchChanged.emit(this.page);
  }

  sort() {
    console.log('on sort');
  }

  switchChange($event, data) {
    this.switchChanged.emit({ value: $event, data });
  }

  updateFilter(keyword) {
    const val = keyword.toLowerCase();
    const columnsFiltered = this.columns;

    // filter our data
    let tempFiltered = [];
    if (!val) {
      tempFiltered = this.temp;
    } else {
      tempFiltered = this.temp.filter(function (item) {
        for (const key in columnsFiltered) {
          if (columnsFiltered.hasOwnProperty(key)) {
            const value = item[columnsFiltered[key].prop];
            if (value !== undefined && String(value).toLowerCase().includes(keyword.toLowerCase())) {
              return true;
            }
          }
        }
        return false;
      });
    }

    // update the rows
    this.rows = tempFiltered;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  validateClick(data) {
    this.validateClicked.emit(data);
  }

  verifyClick(data) {
    this.verifyClicked.emit(data);
  }

  selectClick({ selected }) {
    this.selectedRow.emit(selected);
  }

  inValidateClick(data) {
    this.inValidateClicked.emit(data);
  }

}
