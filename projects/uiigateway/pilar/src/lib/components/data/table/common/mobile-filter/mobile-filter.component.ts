import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'uii-mobile-filter',
  templateUrl: './mobile-filter.component.html',
  styleUrls: ['./mobile-filter.component.scss']
})
export class MobileFilterComponent implements OnInit {
  @Input() checkboxColumn: boolean;
  @Input() columns: Array<any>;
  @Input() limitOptions: boolean;
  @Input() searchOptions: boolean;
  @Output() limitChanged = new EventEmitter();
  @Output() selectAllRows = new EventEmitter();
  @Output() searchChanged = new EventEmitter();
  @Output() columnSorted = new EventEmitter();

  limitOpts = [
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

  selectedLimit: number;
  toogleSearch = false;
  toggleLimit = false;
  isSortAsc = true;
  toggleSort = false;
  selectedColumn: any;

  constructor() { }

  ngOnInit() {
    this.selectedLimit = this.limitOpts[0].value;
  }

  emitColumnSort() {
    this.selectedColumn.sort = this.isSortAsc ? 'asc' : 'desc';
    this.columnSorted.emit(this.selectedColumn);
  }

  onColumnSelect(column) {
    this.selectedColumn = column;
    this.emitColumnSort();
  }

  onLimitChange(limit: number) {
    this.selectedLimit = Number(limit);
    this.limitChanged.emit(Number(limit));
  }

  onRowSelect($event: any) {
    this.selectAllRows.emit($event);
  }

  onSearchChange(keyword: string) {
    this.searchChanged.emit(keyword);
  }

  onSortTypeChange() {
    this.isSortAsc = !this.isSortAsc;
    if (this.selectedColumn !== undefined && this.selectedColumn !== null) {
      this.emitColumnSort();
    }
  }

}
