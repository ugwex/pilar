import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'uii-confirmdialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmdialogComponent implements OnInit, OnDestroy {
  public confirmBtnlabel: string;
  public cancelBtnLabel: string;
  public active = false;
  public message: string;
  public title: string;
  public onClose: Subject<boolean>;

  constructor(
    public _activeModal: BsModalRef
  ) {
  }

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  ngOnDestroy() {
    this.onCancel();
  }

  public showConfirmationModal(config: any): void {
    this.title = config.title ? config.title : '';
    this.message =  config.message ? config.message : '';
    this.confirmBtnlabel = config.confirmBtnlabel ? config.confirmBtnlabel : '';
    this.cancelBtnLabel = config.cancelBtnLabel ? config.cancelBtnLabel : '';
    this.active = true;
  }

  public onConfirm(): void {
    this.active = false;
    this.onClose.next(true);
    this._activeModal.hide();
  }

  public onCancel(): void {
    this.active = false;
    this.onClose.next(false);
    this._activeModal.hide();
  }

  public hideConfirmationModal(): void {
    this.active = false;
    this.onClose.next(null);
    this._activeModal.hide();
  }

}
