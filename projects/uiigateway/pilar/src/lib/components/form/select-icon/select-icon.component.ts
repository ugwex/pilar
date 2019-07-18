import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IconDialogComponent } from '../../dialog/icon-dialog/icon-dialog.component';

@Component({
  selector: 'uii-select-icon',
  templateUrl: './select-icon.component.html'
})
export class UiiSelectIconComponent implements OnInit {
  @Input() iconName: string;
  @Input() required: false;
  @Output() iconSelected = new EventEmitter();

  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  onBtnSelectIconClick(iconName: any) {
    this.modalRef = this.modalService.show(IconDialogComponent, { class: 'modal-md modal-detail' });
    this.modalRef.content.iconSelected = iconName;
    this.modalRef.content.onClose.subscribe(result => {
      this.iconSelected.emit(result);
      this.iconName = result;
    });
  }

}
