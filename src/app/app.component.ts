import { Component, HostBinding, OnInit } from '@angular/core';
import { TranslateService } from '@uiigateway/pilar';

@Component({
  selector: 'ugw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @HostBinding('class.has-sidebar') public hasSidebar: boolean;
  @HostBinding('class.has-breadcrumb') public hasBreadcrumb: boolean;
  @HostBinding('class.is-home') public isHome: boolean;
}
