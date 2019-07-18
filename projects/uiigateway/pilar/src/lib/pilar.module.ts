import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContextMenuModule } from 'ngx-contextmenu';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
// import { OwlDateTimeModule, OwlNativeDateTimeModule, OwlDateTimeIntl } from 'ng-pick-datetime';
import {
  AlertModule,
  ModalModule,
  AccordionModule,
  TabsModule,
  TooltipModule,
  CollapseModule,
  BsDatepickerModule,
  TimepickerModule,
  BsDropdownModule,
  PaginationModule,
  ProgressbarModule,
  TypeaheadModule
} from 'ngx-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxSelectModule } from 'ngx-select-ex';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { dictionary } from './providers/translations';
import { TRANSLATIONS } from './providers/translations';
import { DefaultIntl } from './providers';

/* library components */
import { PilarComponent } from './pilar.component';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import { ClientTableComponent } from './components/data/table/client-table/client-table.component';
import { ConfirmdialogComponent } from './components/dialog/confirm-dialog/confirm-dialog.component';
import { EditorComponent } from './components/form/editor/editor.component';
import { IconDialogComponent } from './components/dialog/icon-dialog/icon-dialog.component';
import { MobileFilterComponent } from './components/data/table/common/mobile-filter/mobile-filter.component';
import { ModalDialogComponent } from './components/dialog/modal-dialog/modal-dialog.component';
import { PaginationComponent } from './components/utilities/pagination/pagination.component';
import { ServerTableComponent } from './components/data/table/server-table/server-table.component';
import { SwitchComponent } from './components/utilities/switch/switch.component';
import { TableComponent } from './components/data/table/table.component';
import { TableActionComponent } from './components/data/table/common/table-action/table-action.component';
import { TableFilterComponent } from './components/data/table/common/table-filter/table-filter.component';
import { TableFooterComponent } from './components/data/table/common/table-footer/table-footer.component';
import { TableSkeletonComponent } from './components/skeletons/table-skeleton/table-skeleton.component';
import { TableloaderComponent } from './components/utilities/table-loader/table-loader.component';
import { TabsetComponent } from './components/utilities/tabset/tabset.component';
import { UiiImageUploadComponent } from './components/form/image-upload/image-upload.component';
import { UiiSelectIconComponent } from './components/form/select-icon/select-icon.component';
import { UiiDataGridComponent } from './components/data/data-grid/data-grid.component';
import { UiiDataListComponent } from './components/data/data-list/data-list.component';
import { UiiDataTableComponent } from './components/data/data-table/data-table.component';
import { WizardComponent } from './components/utilities/wizard/wizard.component';
import { WizardStepComponent } from './components/utilities/wizard/wizard-step.component';
import { PhotoUploadComponent } from './components/form/photo-upload/photo-upload.component';

/* library pipes */
import { TranslatePipe } from './pipes/translate.pipe';
import { AppsearchPipe } from './pipes/app-search.pipe';
import { ArraySearchPipe } from './pipes/array-search.pipe';
import { BooleanYesNoPipe } from './pipes/boolean-yes-no.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { LastnumberPipe } from './pipes/last-number.pipe';
import { SayNumberPipe } from './pipes/say-number.pipe';
import { UniquePipe } from './pipes/unique.pipe';
import { OrderBy } from './pipes/order-by.pipe';
import { UiihighlightPipe } from './pipes/uiihighlight.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { ShowActiveFlagPipe } from './pipes/show-active-flag.pipe';
import { CbtRoomSearchPipe } from './pipes/cbt-room-search.pipe';

/* library services */
import { ConfigService } from './services/config.service';
import { DataService } from './services/data.service';
import { DateService } from './services/date.service';
import { ErrorService, ErrorEvent } from './services/error.service';
import { HttpService} from './services/http.service';
import { ImageService } from './services/image.service';
import { LoadingBarService, LoadingBarEvent, LoadingBarEventType, isPresent } from './services/loadingBar.service';
import { TranslateService } from './services/translate.service';
import { TablePageService } from './services/table-page.service';
import { CoreService } from './services/core.service';
import { StatusService } from './services/status.service';

/* library templates */
import { UiiEmptyDataComponent } from './templates/uii-empty-data/uii-empty-data.component';
import { UiiUnderConstructionPageComponent } from './templates/uii-under-construction-page/uii-under-construction-page.component';
import { UiiNotFoundPageComponent } from './templates/uii-not-found-page/uii-not-found-page.component';
import { UiiLandingPageComponent } from './templates/uii-landing-page/uii-landing-page.component';

/* library directives */
import { MatchHeightDirective } from './directives/match-height/match-height.directive';
import { TabsetDirective } from './directives/tabset-tab/tabset.directive';

@NgModule({
  declarations: [
    /* components */
    PilarComponent,
    BreadcrumbComponent,
    ClientTableComponent,
    ConfirmdialogComponent,
    EditorComponent,
    IconDialogComponent,
    MobileFilterComponent,
    ModalDialogComponent,
    PaginationComponent,
    ServerTableComponent,
    PhotoUploadComponent,
    SwitchComponent,
    TableComponent,
    TableActionComponent,
    TableFilterComponent,
    TableFooterComponent,
    TableloaderComponent,
    TableSkeletonComponent,
    TabsetComponent,
    UiiDataGridComponent,
    UiiDataListComponent,
    UiiDataTableComponent,
    UiiEmptyDataComponent,
    UiiImageUploadComponent,
    UiiLandingPageComponent,
    UiiNotFoundPageComponent,
    UiiSelectIconComponent,
    UiiUnderConstructionPageComponent,
    WizardComponent,
    WizardStepComponent,
    /* pipes */
    AppsearchPipe,
    ArraySearchPipe,
    BooleanYesNoPipe,
    CbtRoomSearchPipe,
    FileSizePipe,
    LastnumberPipe,
    OrderBy,
    SafePipe,
    SayNumberPipe,
    ShowActiveFlagPipe,
    TranslatePipe,
    UiihighlightPipe,
    UniquePipe,
     /* directives */
    MatchHeightDirective,
    TabsetDirective,
    SwitchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImagesModule,
    NgxDatatableModule,
    NgxSelectModule,
    ReactiveFormsModule,
    RouterModule,
    UiSwitchModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ContextMenuModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule
    // TextMaskModule,
    // ResponsiveModule.forRoot(),
  ],
  exports: [
    /* components */
    PilarComponent,
    BreadcrumbComponent,
    ClientTableComponent,
    ConfirmdialogComponent,
    ContextMenuModule,
    EditorComponent,
    IconDialogComponent,
    MobileFilterComponent,
    LazyLoadImagesModule,
    ModalDialogComponent,
    PaginationComponent,
    PhotoUploadComponent,
    ServerTableComponent,
    SwitchComponent,
    TableComponent,
    TableActionComponent,
    TableFilterComponent,
    TableFooterComponent,
    TableloaderComponent,
    TableSkeletonComponent,
    TabsetComponent,
    UiiDataGridComponent,
    UiiDataListComponent,
    UiiDataTableComponent,
    UiiEmptyDataComponent,
    UiiImageUploadComponent,
    UiiLandingPageComponent,
    UiiNotFoundPageComponent,
    UiiSelectIconComponent,
    UiiUnderConstructionPageComponent,
    WizardComponent,
    WizardStepComponent,
    /* pipes */
    AppsearchPipe,
    ArraySearchPipe,
    BooleanYesNoPipe,
    CbtRoomSearchPipe,
    FileSizePipe,
    LastnumberPipe,
    OrderBy,
    SafePipe,
    SayNumberPipe,
    ShowActiveFlagPipe,
    TranslatePipe,
    UiihighlightPipe,
    UniquePipe,
    /* directives */
    MatchHeightDirective,
    TabsetDirective,

    AccordionModule,
    AlertModule,
    BsDatepickerModule,
    BsDropdownModule,
    CollapseModule,
    CommonModule,
    FormsModule,
    ModalModule,
    NgxDatatableModule,
    NgxSelectModule,
    ProgressbarModule,
    ReactiveFormsModule,
    TabsModule,
    PaginationModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    // TextMaskModule,
    // ResponsiveModule,
  ],

  entryComponents: [
    ConfirmdialogComponent,
    IconDialogComponent
  ],
//   providers: [
//     { provide: OwlDateTimeIntl, useClass: DefaultIntl }
// ]
})

export class PilarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PilarModule,
      providers: [
        { provide: TRANSLATIONS, useValue: dictionary },
        // { provide: OwlDateTimeIntl, useClass: DefaultIntl },
        HttpService,
        DatePipe,
        DateService,
        ImageService,
        LoadingBarService,
        TranslateService,
        TablePageService,
        ConfigService,
        DataService,
        ErrorService,
        StatusService,
        CoreService
      ]
    };
  }
}
