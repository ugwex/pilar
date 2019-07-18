import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uii-table-action',
  template: `
  <div class="cell-action">
    <span *ngIf="auth && auth.canPublish" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'publish'})" tooltip="Terbit">
      <span class="fa fa-arrow-circle-up"></span>
    </span>
    <span *ngIf="auth && auth.canUpdate" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'update'})" tooltip="Edit">
      <span class="fa fa-pencil"></span>
    </span>
    <span *ngIf="auth && auth.canRead" class="action-icon i-mat icon-primary " (click)="emitAction.emit({index: index, type: 'detail'})" tooltip="Detail">
      <span class="material-icons">visibility</span>
    </span>
    <span *ngIf="auth && auth.canVerify" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'verify'})" tooltip="Verifikasi">
      <span class="fa fa-comment"></span>
    </span>
    <span *ngIf="auth && auth.canValidate" class="action-icon i-mat icon-primary " (click)="emitAction.emit({index: index, type: 'validate'})" tooltip="Validasi">
      <span class="material-icons">playlist_add_check</span>
    </span>
    <span *ngIf="auth && auth.canPrint" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'print'})" tooltip="Cetak">
      <span class="fa fa-print"></span>
    </span>
    <span *ngIf="auth && auth.canReload" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'reload'})" tooltip="Muat ulang">
      <span class="fa fa-repeat"></span>
    </span>
    <span *ngIf="actionInValidation === true" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'invalidate'})" tooltip="Batalkan validasi">
      <span class="fa fa-lock"></span>
    </span>
    <span *ngIf="auth && auth.canDelete" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'delete'})" tooltip="Hapus">
      <span class="fa fa-trash"></span>
    </span>
    <span *ngIf="auth && auth.canActivate" class="action-icon i-on-off icon-primary" tooltip="Aktivasi">
      <uii-switch
        [useOverlay]="true"
        [checked]="item.is_active === 1 || item.flag_aktif === 1 ? true : false"
        (changeEvent)="emitAction.emit({$event: $event, index: index, type: 'activate'})">
      </uii-switch>
    </span>
  </div>
  `,
  styleUrls: ['./table-action.component.scss']
})
export class TableActionComponent {
  @Input() actionInValidation: boolean;
  @Input() item: any;
  @Input() auth: any;
  @Input() index: number;
  @Output() emitAction = new EventEmitter();
}
