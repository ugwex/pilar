import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Page, OptionsSelect } from '../../../models';

@Component({
  selector: 'uii-datalist',
  templateUrl: './data-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./data-list.component.scss']
})
export class UiiDataListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  @Input() rows: Array<any> = [];
  @Input() temp: Array<any> = [];
  @Input() limitOptions = true;
  @Input() searchOptions = true;

  @Output() rowClicked = new EventEmitter();
  @Output() limitChanged = new EventEmitter();

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
    this.temp = this.rows;
  }

  /**
   * @method limitChange()
   * @description
   * @author diansigitp
   * @param any $event
   * @memberof UiiDataTableComponent
   */
  limitChange($event) {
    const limit = Number($event.target.value);
    this.page.size = limit;
    this.limitChanged.emit(this.page);
  }

  /**
   * @method updateFilter()
   * @description
   * @author diansigitp
   * @param any keyword
   * @memberof UiiDataTableComponent
   */
  updateFilter(keyword) {
    const val = keyword.toLowerCase();

    // filter our data
    let tempFiltered = [];
    if (!val) {
      tempFiltered = this.temp;
    } else {
      tempFiltered = this.temp.filter(function(item) {
        const title = item.list.title;
        const note = item.list.note;

        if (title !== undefined && note !== undefined) {
          if (title.toLowerCase().includes(keyword.toLowerCase()) || note.toLowerCase().includes(keyword.toLowerCase())) {
            return true;
          }
          return false;
        }

        return false;
      });
    }

    // update the rows
    this.rows = tempFiltered;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
