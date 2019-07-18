import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'uii-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {
  @Input() limitOptions: boolean;
  @Input() searchOptions: boolean;
  @Output() limitChanged = new EventEmitter();
  @Output() searchChanged = new EventEmitter();

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
  constructor() { }

  ngOnInit() {
  }

  onSearchChange(keyword: string) {
    this.searchChanged.emit(keyword);
  }

  onLimitChange(limit: number) {
    this.limitChanged.emit(limit);
  }

}
