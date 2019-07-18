import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uii-wizard-step',
  template:
  `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})
export class WizardStepComponent implements OnInit {
  @Input() activeStepIndex: number;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() hidden = false;
  @Input() isValid = true;
  @Input() isAllowed = -1;
  @Input() showNext = true;
  @Input() showPrev = true;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  public _isActive = false;
  isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  @Input('isActive') set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

}
