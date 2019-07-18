import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorService } from '@uiigateway/pilar';
import { NOTIFICATION_TYPE } from '../../../base.constants';
import { APP_OPTS } from './../ui-examples.constant';
import { CoreService } from 'src/app/modules/services';

@Component({
  selector: 'ugw-example02',
  templateUrl: './example02.component.html',
  styleUrls: ['./example02.component.scss']
})
export class Example02Component implements OnInit {

  exampleForm: FormGroup;
  onSubmitRequest = false;
  appOpts: Array<any> = APP_OPTS;

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

}
