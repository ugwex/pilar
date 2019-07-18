import { Directive, Input, HostBinding, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { TabsetComponent } from './../../components/utilities/tabset/tabset.component';

@Directive({
  selector: 'uiiTabItem, [uiiTabItem]'
})
export class TabsetDirective implements OnInit {
  @Input() title: string;
  @Input() tabIcon: string;

  @HostBinding('class.tab-active')
  @Input()
  get active(): boolean {
    return this._active;
  }
  set active(active: boolean) {
    if (this._active && !active) {
      this.deselected.emit(this);
  }
    this._active = active;
  }
  @Input()
  set selectedTab(tab: this) {
    this.selected.emit(tab);
  }

  @HostBinding('class.tab-pane') addClass = true;
  @Output() selected: EventEmitter<this> = new EventEmitter();
  @Output() deselected: EventEmitter<this> = new EventEmitter();

  tabset: TabsetComponent;
  protected _active: boolean;

  constructor(tabset: TabsetComponent, public elRef: ElementRef) {
    this.tabset = tabset;
    this.tabset.addTab(this);
  }

  ngOnInit(): void {
  }

}
