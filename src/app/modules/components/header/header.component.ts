import {
  Component,
  OnInit,
  Input,
  Output,
  ViewContainerRef,
  OnDestroy,
  LOCALE_ID,
  AfterViewInit,
  EventEmitter,
  ViewEncapsulation,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Observable } from 'rxjs';
import { TranslateService, LoadingBarService, LoadingBarEvent, LoadingBarEventType, isPresent } from '@uiigateway/pilar';

@Component({
  selector: 'ugw-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() root = true;
  @Input() showChatMessage = false;
  @Input() showNotification = true;
  @Input() showShortcutMenu = true;
  @Input() showAccount = true;
  @Input() showBreadcrumb = true;
  @Input() dataNotifications: Array<any> = [];
  @Input() dataShortcutApps: Array<any> = [];
  @Input() dataAccount: any;

  @Output() shortcutMenuClicked = new EventEmitter<any>();
  @Output() notificationClicked = new EventEmitter<any>();
  @Output() navbarToggleClicked = new EventEmitter<any>();

  public userLogin;
  public userGroupPrimary: any;
  public userGroups: any[] = [];
  public upcomingNotifications: any = [];

  // Loader Bar
  isTransition = 'none';
  private _progress = '0';
  @Input() set progress(progress: string) {
      this.isTransition = progress >= this._progress ?  'all 0.5s ease-in-out' : 'none';
      this._progress = progress;
  }

  get progress() {
      return this._progress;
  }

  @Input() color = '#093697';
  @Input() height = '2px';
  @Input() show = true;

  constructor(
    private translateSvc: TranslateService,
    private loadingBarSvc: LoadingBarService,
    private elmRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.upcomingNotifications = this.initGetUpcomingNotifications(this.dataNotifications);
    this.userLogin = this.dataAccount && this.dataAccount.user_info;
    this.userGroupPrimary = this.dataAccount && this.dataAccount.group_default;
    this.userGroups = this.dataAccount && this.dataAccount.groups;

    this.loadingBarSvc.events.subscribe((event: LoadingBarEvent) => {
      if (event.type === LoadingBarEventType.PROGRESS && isPresent(event.value)) {
          this.progress = event.value;
      } else if (event.type === LoadingBarEventType.COLOR) {
          this.color = event.value;
      } else if (event.type === LoadingBarEventType.HEIGHT) {
          this.height = event.value;
      } else if (event.type === LoadingBarEventType.VISIBLE) {
          this.show = event.value;
      }
    });
  }

  ngOnDestroy() {
    // clearInterval(this.intervalPullNotification);
    // this.subsNotifications.unsubscribe();
    // this.subsMenu.unsubscribe();
  }

  ngAfterViewInit() {
    this.loadingBarSvc.events.subscribe((event: LoadingBarEvent) => {
       this.elmRef.nativeElement.visible = event.type === LoadingBarEventType.VISIBLE ? event.value : true;
       // this.changeDetectorRef.detectChanges();
   });
  }

  /**
   * @method initGetUpcomingNotifications()
   * @description
   * @author diansigitp
   * @param {any} notifications
   * @returns {Array<any>}
   * @memberof HeaderComponent
   */
  initGetUpcomingNotifications(notifications): Array<any> {
    try {
      return notifications.filter(notification => notification.flag_read === 0);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  onBtnToggleClick() {
    this.navbarToggleClicked.emit();
  }

  onImageError() {
    this.userLogin.photo = 'assets/images/profile.png';
  }

  /**
   * @method onNotifClick()
   * @description : fungsi untuk menghandle ketika notifikasi diklik untuk melihat detail
   * @author diansigitp
   * @param {any} notif
   * @memberof HeaderComponent
   */
  onNotifClick(notif) {
    const params: any = {
      'url': notif.url,
      'id_app': notif.id_app
    };

    this.notificationClicked.emit({params: params});
  }

  /**
   * @method onShortcutAppClick()
   * @description : fungsi untuk menghandle ketika applikasi diklik.
   * Sebelum berpindah aplikasi ada pengecekan apakah aplikasi yang sedang dibuka
   * ada aktifitas editing, jika ada maka muncul konfirmasi bahwa data yang sedang
   * dikerjakan akan hilang.
   * @author diansigitp
   * @param {any} application
   * @memberof HeaderComponent
   */
  onShortcutAppClick(application) {
    this.shortcutMenuClicked.emit(application);
  }
}
