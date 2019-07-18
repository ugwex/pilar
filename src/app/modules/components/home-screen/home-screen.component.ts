import { Component, Input, Output, ViewEncapsulation, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@uiigateway/pilar';


@Component({
  selector: 'ugw-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeScreenComponent implements OnInit {
  @Input() applications: Array<any>;

  @Output() applicationClicked = new EventEmitter<any>();

  public equalHeightTrigger: Subject<any> = new Subject();
  public keyword: string;

  constructor(
    private translateSvc: TranslateService
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.equalHeightTrigger.next();
    }, 500);
  }

  /**
   * @method onKeyupSearch()
   * @description event on keyup form search
   * @author diansigitp
   * @param {any} $event
   * @memberof HomeScreenComponent
   */
  onKeyupSearch($event) {
    setTimeout(() => {
      this.equalHeightTrigger.next();
    }, 100);
  }

  /**
   * @method onAppClick()
   * @description event on application item click
   * @author diansigitp
   * @param {any} $event
   * @memberof HomeScreenComponent
   */
  onAppClick($event) {
    this.applicationClicked.emit($event);
  }
}

