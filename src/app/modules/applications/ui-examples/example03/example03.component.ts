import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorService } from '@uiigateway/pilar';
import { NOTIFICATION_TYPE } from '../../../base.constants';
import { APP_OPTS } from './../ui-examples.constant';
import { CoreService } from 'src/app/modules/services';

@Component({
  selector: 'ugw-example03',
  templateUrl: './example03.component.html',
  styleUrls: ['./example03.component.scss']
})
export class Example03Component implements OnInit {

  exampleForm: FormGroup;
  onSubmitRequest = false;
  appOpts: any = {
    defaultValue: [],
    formControl: new FormControl(),
    items: APP_OPTS,
    touched: false
  };

  constructor(
    private formBuilder: FormBuilder,
    private errorSvc: ErrorService,
    private coreSvc: CoreService
  ) { }

  ngOnInit() {
    this.exampleForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.maxLength(225)]],
      application: ['', Validators.required]
    });
  }

  onFormExampleSubmit() {
    this.onSubmitRequest = true;
    setTimeout(() => {
      console.log(this.exampleForm.value);
      this.onSubmitRequest = false;

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

    }, 500);
  }

  onAppOptsTouched($event) {
    this.appOpts.touched = true;
  }

  onAppOptsSelected($event) {
    this.exampleForm.controls['application'].setValue($event);
  }

}
