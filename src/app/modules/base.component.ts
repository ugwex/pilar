import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationError, Event } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastrService } from 'ngx-toastr';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

import {
  DataService,
  TranslateService,
  ErrorService,
  ErrorEvent,
  LoadingBarService
} from '@uiigateway/pilar';
import {
  MENU_ITEMS,
  APPLICATION_ITEMS,
  NOTIFICATION_ITEMS,
  DATA_ACCOUNT,
  NOTIFICATION_TYPE
} from './base.constants';
import { CoreService } from './services';

@Component({
  selector: 'ugw-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, AfterViewInit {
  @HostBinding('class.base') baseClass = true;
  @HostBinding('class.has-sidebar') public hasSidebar: boolean;
  @HostBinding('class.has-breadcrumb') public hasBreadcrumb: boolean;
  @HostBinding('class.is-home') public isHome: boolean;
  @HostBinding('class.sidebar-open') public sidebarOpen: boolean;
  @HostBinding('class.has-shortcut-menu') public hasShortcutMenu: boolean;

  modalRef: BsModalRef;
  public menus: Array<any>;
  public applications: Array<any>;
  public dataNotifications: Array<any>;
  public dataShortcutApps: Array<any>;
  public dataAccount: any;
  public selectedApplication: any;

  public userLogin;
  public userGroupPrimary: any;
  public userGroups: Array<any> = [];
  public intervalPullNotification: any;
  public subsNotifications: any;
  public subsMenu: any;

  public homeLayoutUrl: Array<any> = ['/'];
  public profileLayoutUrl: Array<any> = ['/account/profile'];
  public fullLayoutUrl: Array<any> = ['/404NotFound', '/underconstruction'];
  public fullWidthUrl: Array<any> = ['/account/log', '/account/notification'];
  public notAppUrl: Array<any> = ['/account/profile', '/account/log', '/account/notification'];

  public isFullWidthLayout = false;
  public isDefaultLayout = false;
  public isHomeLayout = false;
  public isProfileLayout = false;
  public isFullLayout = false;
  public showBreadcrumb = false;
  public showNotification = false;
  public showShortcutMenu = false;

  constructor(
    private router: Router,
    private modalSvc: BsModalService,
    private translateSvc: TranslateService,
    private dataSvc: DataService,
    private slimLoadingBarSvc: LoadingBarService,
    private coreSvc: CoreService,
    private errorSvc: ErrorService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.translateSvc.setDefaultLang('id');
    this.translateSvc.enableFallback(true);

    this.router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
        this.slimLoadingBarSvc.start();
      }

      if (event instanceof NavigationEnd) {
        this.initSetupPageLayoutCondition();
        this.slimLoadingBarSvc.complete();
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });

    try {
      const currentUrl = this.router.url.substring(1).split('/');
      // console.log(currentUrl[0]);

      const selected = MENU_ITEMS.filter(value => value.url === currentUrl[0]);
      this.menus = selected[0].menu;
    } catch (error) {
      console.log(error);
    }
    /**
     * di versi live ubah code di bawah ini menjadi
     * -> this.applications = this.menuSvc.getApplications();
     */
    this.applications = APPLICATION_ITEMS;
    this.dataShortcutApps = APPLICATION_ITEMS;
    this.dataAccount = DATA_ACCOUNT;

    this.initGetNotifications();
    this.initSetupPageLayoutCondition();
    this.initGlobalErrorHandling();
    this.initSetGrowlNotification();
  }

  ngAfterViewInit() {
  }

  menuClicked(menu) {
    // console.log(menu);
  }

  onApplicationClick(application) {
    const selected: any = MENU_ITEMS.filter(value => value.url === application.url);
    this.menus = selected[0].menu;
    localStorage.removeItem('MU_current_opened_app');
    localStorage.setItem('MU_current_opened_app', JSON.stringify(application));
    this.router.navigate([application.url]);
  }

  /**
   * @method onBtnToggleClick()
   * @method onSidebarOverlayClick()
   * @method onBtnSidebarCloseClick()
   * @description event event untuk handling responsive menu
   * @author diansigitp
   * @memberof BaseComponent
   */
  onBtnToggleClick() {
    this.sidebarOpen = true;
  }

  onBtnSidebarCloseClick() {
    this.sidebarOpen = false;
  }

  onSidebarOverlayClick() {
    this.sidebarOpen = false;
  }

  /**
   *
   *
   * @memberof BaseComponent
   */
  initSetupPageLayoutCondition() {
    this.isHomeLayout = this.homeLayoutUrl.findIndex(url  => url === this.router.url) > -1 ? true : false;
    this.isFullWidthLayout = this.fullWidthUrl.findIndex(url => url === this.router.url) > -1 ? true : false;
    this.sidebarOpen = false;

    setTimeout(() => {
      if (this.isHomeLayout) {
        this.isDefaultLayout = false;
        this.isHome = true;
        this.hasSidebar = false;
        this.hasBreadcrumb = false;
        this.showBreadcrumb = false;
        this.showShortcutMenu = false;
        this.hasShortcutMenu = false;
      } else if (this.isProfileLayout) {
        this.isDefaultLayout = false;
        this.isHome = false;
        this.hasSidebar = true;
        this.hasBreadcrumb = true;
        this.showBreadcrumb = true;
        this.showShortcutMenu = this.dataShortcutApps.length > 0 ? true : false;
        this.hasShortcutMenu = true;
      } else if (this.isFullWidthLayout) {
        this.isDefaultLayout = false;
        this.isHome = false;
        this.hasSidebar = false;
        this.hasBreadcrumb = true;
        this.showBreadcrumb = true;
        this.showShortcutMenu = this.dataShortcutApps.length > 0 ? true : false;
        this.hasShortcutMenu = true;
      } else {
        this.isDefaultLayout = true;
        this.isHome = false;
        this.hasSidebar = true;
        this.hasBreadcrumb = true;
        this.showBreadcrumb = true;
        this.showShortcutMenu = this.dataShortcutApps.length > 0 ? true : false;
        this.hasShortcutMenu = true;
      }
    });
  }

  /**
   * @method : initGetNotifications()
   * @description : fungsi ini melakukan subcribe ke notification service,
   * untuk menampilkan hasil pull notifications.
   * @author diansigitp
   * @returns
   * @memberof HeaderComponent
   */
  initGetNotifications() {
    /**
     * di versi live hapus baris code ini
     * dan uncomment baris code yang di bawah
     */
    this.dataNotifications = NOTIFICATION_ITEMS;
    if (this.dataNotifications) {
      this.showNotification = true;
    }

    // return this.notificationSvc.events.subscribe(notif => {
    //   this.dataNotifications = notif;
    // });
  }


  initSetGrowlNotification() {
    this.coreSvc.growlEvents.subscribe(data => {

      if (data.type === NOTIFICATION_TYPE.SUCCESS) {
        if (data.timeout) {
          this.toastr.success(data.message, 'Sukses.', {timeOut: data.timeout});
        } else {
          this.toastr.success(data.message, 'Sukses.');
        }
      }

      if (data.type === NOTIFICATION_TYPE.INFO) {
        if (data.timeout) {
          this.toastr.info(data.message, 'Info.', {timeOut: data.timeout});
        } else {
          this.toastr.info(data.message, 'Info.');
        }
      }

      if (data.type === NOTIFICATION_TYPE.WARNING) {
        if (data.timeout) {
          this.toastr.warning(data.message, 'Peringatan.', {timeOut: data.timeout});
        } else {
          this.toastr.warning(data.message, 'Peringatan.');
        }
      }

      if (data.type === NOTIFICATION_TYPE.ERROR) {
        if (data.timeout) {
          this.toastr.error(data.message, 'Eror.', {timeOut: data.timeout});
        } else {
          this.toastr.error(data.message, 'Eror.');
        }
      }
    });
  }

  /**
   * @method : initGlobalErrorHandling()
   * @description : fungsi ini melakukan subscribe terhadap event error service
   * ketika terdeteksi ada error maka akan ada pengecekan jenis error.
   * jika error nya adalah 401 (Unauthorized) maka akan menampilkan modal form login.
   * jika error nya selain 401 (Unauthorized) maka akan muncul growl notification
   * @author diansigitp
   * @memberof HeaderComponent
   */
  initGlobalErrorHandling() {
    this.errorSvc.events.subscribe((err: ErrorEvent) => {
      // subcribe unauthorized status
      if (err.code === 401) {
        this.slimLoadingBarSvc.complete();

        if (this.modalRef) {
          return;
        }

        this.modalRef = this.modalSvc.show(LoginDialogComponent, { ignoreBackdropClick: true, class: 'modal-login' });
        this.modalRef.content.message = err.message;
      } else {
        this.toastr.error(err.message, 'Error');
      }
    });
  }

}
