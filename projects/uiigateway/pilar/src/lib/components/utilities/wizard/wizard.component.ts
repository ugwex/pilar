import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit, OnChanges } from '@angular/core';
import { WizardStepComponent } from './wizard-step.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'uii-form-wizard',
  template:
  `<div class="card">
    <div class="card-header">
      <ul class="nav nav-justified nav-wizard">
        <li
          class="nav-item"
          *ngFor="let step of steps"
          [ngClass]="{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}">
          <a (click)="clickTabEnable ? goToStep(step) : false;">
            <h3>{{step.title}}</h3>
            <p *ngIf="step.subtitle">{{step.subtitle}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="card-block">
      <ng-content></ng-content>
    </div>
    <div class="card-footer" [hidden]="isCompleted">
        <button type="button" class="btn btn-default float-left" (click)="cancel()">{{ pagingLabel.cancel }}</button>
        <button
          type="button"
          class="btn btn-success pull-right"
          (click)="complete()"
          [disabled]="!activeStep.isValid || formSubmitting"
          [hidden]="hasNextStep">
            {{ pagingLabel.done }}
        </button>
        <button
          type="button"
          class="btn btn-primary pull-right"
          (click)="next()"
          [disabled]="!activeStep.isValid"
          [hidden]="!hasNextStep || !activeStep.showNext">
            {{ pagingLabel.next }} <span class="fa fa-arrow-right"></span>
        </button>
        <button
          type="button"
          class="btn btn-default pull-right"
          (click)="previous()"
          [hidden]="!hasPrevStep || !activeStep.showPrev">
            <span class="fa fa-arrow-left"></span> {{ pagingLabel.previous }}
        </button>
    </div>
  </div>`
  ,
  styles: [
    '.card { height: 100%; }',
    '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
    '.card-footer { background-color: #fff; border-top: 0 none; }',
    '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
    '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
    '.disabled { color: #ccc; }',
    '.completed { cursor: default; }'
  ]
})
export class WizardComponent implements OnInit, AfterContentInit, OnChanges {
  @ContentChildren(WizardStepComponent)
  wizardSteps: QueryList<WizardStepComponent>;

  public _steps: Array<WizardStepComponent> = [];
  public _isCompleted = false;

  @Input() cancelLbl = 'Cancel';
  @Input() previousLbl = 'Previous';
  @Input() nextLbl = 'Next';
  @Input() doneLbl = 'Done';
  @Input() clickTabEnable = true;
  @Input() forceStep: number;
  @Input() formSubmitting = false;
  @Input() pagingLabel: any;
  @Input() wizardNextTrigger: Subject<any>;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onStepChanged: EventEmitter<WizardStepComponent> = new EventEmitter<WizardStepComponent>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.wizardSteps.forEach(step => this._steps.push(step));
    if (this.steps.length) {
      this.steps[0].isActive = true;
    }

    if (this.wizardNextTrigger) {
      this.wizardNextTrigger.subscribe(step => {
        const nextStep: WizardStepComponent = this.steps[step];
        nextStep.isDisabled = false;
        this.activeStep = nextStep;
      });
    }
  }

  ngOnChanges() {
    if (this.forceStep) {
      // this.revertToStep(this.forceStep);
    }
  }

  public get steps(): Array<WizardStepComponent> {
    return this._steps.filter(step => !step.hidden);
  }

  public get isCompleted(): boolean {
    return this._isCompleted;
  }

  public get activeStep(): WizardStepComponent {
    return this.steps.find(step => step.isActive);
  }

  public set activeStep(step: WizardStepComponent) {
    if (step !== this.activeStep && !step.isDisabled) {
      this.activeStep.isActive = false;
      step.isActive = true;
      step.activeStepIndex = this.activeStepIndex;
      this.onStepChanged.emit(step);
    }
  }

  public get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  public get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  public get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  goToStep(step: WizardStepComponent) {
    if (!this.isCompleted) {
      this.activeStep = step;
    }
  }

  revertToStep(stepIndex: any) {
    this._isCompleted = false;
    const nextStep: WizardStepComponent = this.steps[stepIndex];
    this.goToStep(nextStep);
  }

  next() {
    if (this.hasNextStep) {
      this.activeStep.onNext.emit(this.activeStepIndex);

      if (this.wizardNextTrigger) {
        this.wizardNextTrigger.subscribe(step => {
          const nextStep: WizardStepComponent = this.steps[step];
          nextStep.isDisabled = false;
          this.activeStep = nextStep;
        });
      } else {
        const nextStep: WizardStepComponent = this.steps[this.activeStepIndex + 1];
        nextStep.isDisabled = false;
        this.activeStep = nextStep;
      }
    }
  }

  previous() {
    if (this.hasPrevStep) {
      this.activeStep.onPrev.emit();

      const prevStep: WizardStepComponent = this.steps[this.activeStepIndex - 1];
      prevStep.isDisabled = false;

      this.activeStep = prevStep;
    }
  }

  complete() {
    this.activeStep.onComplete.emit();
    if (this.forceStep) {
      this.revertToStep(this.forceStep);
    } else {
      this._isCompleted = true;
    }
  }

  cancel() {
    this.activeStep.onCancel.emit();
  }

}
