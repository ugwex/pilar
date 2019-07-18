import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ugw-login-dialog',
  templateUrl: './login-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  title = 'relogin';
  message: string;
  model: any = {};
  error: any = {};
  loading = false;
  enable2fa = false;

  constructor(
    public activeModal: BsModalRef
  ) {}

  ngOnInit() {}

  /**
   * @method : doLogin()
   * @description :
   *
   */
  doLogin() {
  }

  /**
   * @method : doVerify2FA()
   * @description :
   *
   */
  doVerify2FA() {
  }

}
