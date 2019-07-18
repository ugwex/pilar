import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'uii-empty-data',
  templateUrl: './uii-empty-data.component.html'
})
export class UiiEmptyDataComponent implements OnInit {
  @Input() showBtnAdd = false;
  @Input() message = 'Belum ada data apapun disini. Silahkan buat data';
  @Output() btnAddClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAdd($event): void {
    this.btnAddClicked.emit($event);
  }

}
