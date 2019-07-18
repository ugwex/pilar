import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { BaseComponent } from './base.component';
import { BaseRoutes } from './base.routing';
import { CoreService, NbMenuInternalService } from './services';
import { LoginDialogComponent } from './components/index';
// import { PilarModule } from '@uiigateway/pilar';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    // PilarModule,
    BaseRoutes
  ],
  declarations: [
    BaseComponent,
    LoginDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [
    CoreService,
    NbMenuInternalService
  ]
})
export class BaseModule { }
