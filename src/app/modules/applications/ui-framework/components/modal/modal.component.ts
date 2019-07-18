import { Component, OnInit, AfterViewChecked, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ConfirmdialogComponent, TranslateService } from '@uiigateway/pilar';
import { MODAL } from 'src/app/modules/base.constants';

@Component({
  selector: 'ugw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewChecked {

  docUsage = `<pre class="prettyprint lang-typescript">import { ModalModule } from 'ngx-bootstrap/modal';</pre>`;

  basicTemplate = `<pre class="prettyprint lang-html">

&lt;button type="button" class="btn btn-primary" (click)="openModal(template)">Create template modal&lt;/button&gt;

&lt;ng-template #template&gt;
  &lt;div class="modal-header"&gt;
    &lt;h4 class="modal-title pull-left"&gt;Modal&lt;/h4&gt;
    &lt;button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()"&gt;
      &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="modal-body"&gt;
    This is a modal.
  &lt;/div&gt;
&lt;/ng-template&gt;</pre>`;

  basicComponent = `<pre class="prettyprint lang-typescript">import { Component, TemplateRef } from '@angular/core';
  import { BsModalService } from 'ngx-bootstrap/modal';
  import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
  import { ConfirmdialogComponent } from '../../../../../shared/components';
  import { MODAL } from '../../../../base.constants';

  @Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
  })
  export class ModalComponent {
    modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
  }</pre>`;

  modalDialogTemplate = `<pre class="prettyprint lang-html">
&lt;button class="btn btn-success" (click)="onBtnDialogClick()">Modal Dialog&lt;/button&gt;
&lt;div class="well margin-top-20"&gt;
  {{ modalDialogStatus }}
&lt;/div&gt;</pre>`;

  modalDialogComponent = `<pre class="prettyprint lang-typescript">import { Component, TemplateRef } from '@angular/core';
  import { BsModalService } from 'ngx-bootstrap/modal';
  import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

  @Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
  })
  export class ModalComponent {
    modalRef: BsModalRef;
    modalDialogStatus: string;

    constructor(private modalService: BsModalService) {}

    onBtnDialogClick() {
      const modal = this.modalSvc.show(ConfirmdialogComponent, { class: MODAL.ALERT.WARNING });
      (<ConfirmdialogComponent>modal.content).showConfirmationModal({
        title: 'Modal Title',
        message: 'modal message',
        confirmBtnlabel: 'Konfirm',
        cancelBtnLabel: 'Batal'
      });

      (<ConfirmdialogComponent>modal.content).onClose.subscribe(result => {
        if (result === true) {
          // when pressed Yes
          console.log('Confirm');
          this.modalDialogStatus = 'Confirm';
        } else if (result === false) {
          // when pressed No
          console.log('Cancel');
          this.modalDialogStatus = 'Cancel';
        } else {
          // When closing the modal without no or yes
          console.log('Not Confirm');
          this.modalDialogStatus = 'Close Modal';
        }
      });
    }
  }</pre>`;

  modalRef: BsModalRef;
  modalDialogStatus: string;

  constructor(
    private modalSvc: BsModalService,
    private transalteSvc: TranslateService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    PR.prettyPrint();
  }

  onBtnDialogClick() {
    const modal = this.modalSvc.show(ConfirmdialogComponent, { class: MODAL.ALERT.WARNING });
    (<ConfirmdialogComponent>modal.content).showConfirmationModal({
      title: 'Modal Title',
      message: 'modal message',
      confirmBtnlabel: 'Ya, lanjutkan',
      cancelBtnLabel: 'Batal'
    });

    (<ConfirmdialogComponent>modal.content).onClose.subscribe(result => {
      if (result === true) {
        // when pressed Yes
        console.log('Confirm');
        this.modalDialogStatus = 'Confirm';
      } else if (result === false) {
        // when pressed No
        console.log('Cancel');
        this.modalDialogStatus = 'Cancel';
      } else {
        // When closing the modal without no or yes
        console.log('Not Confirm');
        this.modalDialogStatus = 'Close Modal';
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalSvc.show(template);
  }

}
