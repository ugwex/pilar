import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ErrorService } from '@uiigateway/pilar';
import { NOTIFICATION_TYPE } from '../../../base.constants';
import { APP_OPTS } from './../ui-examples.constant';
import { CoreService } from 'src/app/modules/services';

@Component({
  selector: 'ugw-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.scss']
})
export class Example01Component implements OnInit {

  exampleForm: FormGroup;
  appOpts: Array<any> = APP_OPTS;

  constructor(
    private formBuilder: FormBuilder,
    private errorSvc: ErrorService,
    private coreSvc: CoreService
  ) { }

  ngOnInit() {
    this.exampleForm = this.formBuilder.group({
      name: [''],
      description: [''],
      application: ['']
    });
  }

  onFormExampleSubmit() {
    setTimeout(() => {
      console.log(this.exampleForm.value);

      if (this.exampleForm.value.name === '') {
        this.errorSvc.handleError({info: 'Nama tidak boleh kosong'});
      }

      if (this.exampleForm.value.name.length > 25) {
        this.errorSvc.handleError({info: 'Nama tidak boleh lebih dari 25 karakter'});
      }

      if (this.exampleForm.value.description === '') {
        this.errorSvc.handleError({info: 'Deskripsi tidak boleh kosong'});
      }

      if (this.exampleForm.value.description.length > 225) {
        this.errorSvc.handleError({info: 'Deskripsi tidak boleh lebih dari 225 karakter'});
      }

      if (this.exampleForm.value.application === '') {
        this.errorSvc.handleError({info: 'Aplikasi harus dipilih'});
      }

      if (this.exampleForm.value.name.length > 0 && this.exampleForm.value.name.length <= 25 &&
        this.exampleForm.value.description.length > 0 && this.exampleForm.value.description.length <= 225 &&
        this.exampleForm.value.application.length > 0) {
          this.exampleForm.reset();
          this.coreSvc.growl(
            NOTIFICATION_TYPE.SUCCESS,
            'Simpan menu berhasil',
            () => {},
            1000
          );
      }

    }, 100);
  }

}
