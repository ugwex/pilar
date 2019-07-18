import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uii-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() useOverlay = false;
  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(val: boolean) {
    this._checked = val;
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(val: boolean) {
    this._disabled = val;
  }

  @Output() changed = new EventEmitter();
  @Output() changeEvent = new EventEmitter();

  _checked = false;
  _disabled = false;

  constructor() { }

  ngOnInit() {
  }

  onSwitchToggle() {
    this._checked = !this._checked;
    this.changed.emit(this._checked);
  }

  onOverlayToggle() {
    this.changeEvent.emit(this._checked);
  }

}
