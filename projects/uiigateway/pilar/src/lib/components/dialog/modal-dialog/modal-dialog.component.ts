import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'uii-infodialog',
  templateUrl: './modal-dialog.component.html'
})
export class ModalDialogComponent implements OnInit {
  public title = 'Information';
  public message = 'Check what your done';

  constructor(public _activeModal: BsModalRef) { }

  ngOnInit() {
  }

}
