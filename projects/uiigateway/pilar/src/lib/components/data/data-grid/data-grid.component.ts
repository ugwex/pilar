import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uii-datagrid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class UiiDataGridComponent implements OnInit {

  @Input() gridTitle = '';
  @Input() columnTitle: Array<any> = [];
  @Input() rowTitle: Array<any> = [];
  @Input() data: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

}
