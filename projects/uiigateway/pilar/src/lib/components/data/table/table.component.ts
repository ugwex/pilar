import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../../../models';

@Component({
  selector: 'uii-table',
  template: `
    <uii-server-table
      *ngIf="serverMode; else clientMode"
      [actionColumn]="actionColumn"
      [actionTitle]="actionTitle"
      [checkboxColumn]="checkboxColumn"
      [columns]="columns"
      [footerInfo]="footerInfo"
      [footerOptions]="footerOptions"
      [limitOptions]="limitOptions"
      [radioColumn]="radioColumn"
      [rows]="rows"
      [searchOptions]="searchOptions"
      [searchOptions]="searchOptions"
      (limitChanged)="onLimitChange($event)"
      (pageChanged)="onPageChange($event)"
      (editClicked)="onEditClick($event)"
      (deleteClicked)="onDeleteClick($event)"
      (detailClicked)="onDetailClick($event)"
      (inValidateClicked)="onInValidateClick($event)"
      (printClicked)="onPrintClick($event)"
      (publishClicked)="onPublishClick($event)"
      (reloadClicked)="onReloadClick($event)"
      (searchChanged)="onSearchChange($event)"
      (switchChanged)="onSwitchChange($event)"
      (validateClicked)="onValidateClick($event)"
      (verifyClicked)="onVerifyClick($event)"
      (selectedRows)="onRowSelect($event)">
    </uii-server-table>
    <ng-template #clientMode>
      <uii-client-table
        [actionColumn]="actionColumn"
        [actionInValidation]="actionInValidation"
        [actionTitle]="actionTitle"
        [checkboxColumn]="checkboxColumn"
        [columns]="columns"
        [footerInfo]="footerInfo"
        [footerOptions]="footerOptions"
        [limitOptions]="limitOptions"
        [radioColumn]="radioColumn"
        [searchOptions]="searchOptions"
        [rows]="rows"
        (editClicked)="onEditClick($event)"
        (deleteClicked)="onDeleteClick($event)"
        (detailClicked)="onDetailClick($event)"
        (inValidateClicked)="onInValidateClick($event)"
        (printClicked)="onPrintClick($event)"
        (publishClicked)="onPublishClick($event)"
        (radioSelect)="onRadioSelect($event)"
        (reloadClicked)="onReloadClick($event)"
        (switchChanged)="onSwitchChange($event)"
        (validateClicked)="onValidateClick($event)"
        (verifyClicked)="onVerifyClick($event)"
        (selectedRows)="onRowSelect($event)">
      </uii-client-table>
    </ng-template>`,
})
export class TableComponent implements OnInit {
  @Input() actionColumn = true;
  @Input() actionInValidation = false;
  @Input() actionTitle = 'Aksi';
  @Input() checkboxColumn = false;
  @Input() columns = [];
  @Input() footerInfo = true;
  @Input() footerOptions = true;
  @Input() limitOptions = true;
  @Input() paginationOptions = true;
  @Input() radioColumn = false;
  @Input() rows = [];
  @Input() searchOptions = true;
  @Input() serverMode = false;

  @Output() deleteClicked = new EventEmitter();
  @Output() detailClicked = new EventEmitter();
  @Output() editClicked = new EventEmitter();
  @Output() inValidateClicked =  new EventEmitter();
  @Output() limitChanged = new EventEmitter();
  @Output() pageChanged = new EventEmitter();
  @Output() printClicked = new EventEmitter();
  @Output() publishClicked = new EventEmitter();
  @Output() radioChange = new EventEmitter();
  @Output() reloadClicked = new EventEmitter();
  @Output() searchChanged = new EventEmitter();
  @Output() selectedRow = new EventEmitter();
  @Output() switchChanged = new EventEmitter();
  @Output() validateClicked = new EventEmitter();
  @Output() verifyClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEditClick(data: any) {
    this.editClicked.emit(data);
  }

  onDeleteClick(data: any) {
    this.deleteClicked.emit(data);
  }

  onDetailClick(data: any) {
    this.detailClicked.emit(data);
  }

  onInValidateClick(data: any) {
    this.inValidateClicked.emit(data);
  }

  onLimitChange(data: any) {
    this.limitChanged.emit(data);
  }

  onPageChange(page: Page) {
    this.pageChanged.emit(page);
  }

  onPrintClick(data: any) {
    this.printClicked.emit(data);
  }

  onPublishClick(data: any) {
    this.publishClicked.emit(data);
  }

  onRadioSelect(data: any) {
    this.radioChange.emit(data);
  }

  onReloadClick(data: any) {
    this.reloadClicked.emit(data);
  }

  onRowSelect(data: any) {
    this.selectedRow.emit(data);
  }

  onSearchChange(data: any) {
    this.searchChanged.emit(data);
  }

  onSwitchChange(data: any) {
    this.switchChanged.emit(data);
  }

  onValidateClick(data: any) {
    this.validateClicked.emit(data);
  }

  onVerifyClick(data: any) {
    this.verifyClicked.emit(data);
  }

}
