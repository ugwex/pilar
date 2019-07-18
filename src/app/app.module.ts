import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { PilarModule } from '@uiigateway/pilar';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { BaseModule } from './modules/base.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutes,
    PilarModule.forRoot(),
    BaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PilarModule
  ]
})
export class AppModule { }
