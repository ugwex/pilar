import { NgModule } from '@angular/core';
import { PilarModule } from '@uiigateway/pilar';

import { UiExamplesRoutes } from './ui-examples.routing';

import { UiExamplesComponent } from './ui-examples.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';
import { Example03Component } from './example03/example03.component';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    PilarModule,
    UiExamplesRoutes
  ],
  declarations: [
    UiExamplesComponent,

    Example01Component,
    Example02Component,
    Example03Component
  ]
})
export class UiExamplesModule { }
