import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilarModule } from '@uiigateway/pilar';
import { UiTemplatesComponent } from './ui-templates.component';

@NgModule({
  imports: [
    CommonModule,
    PilarModule
  ],
  declarations: [
    UiTemplatesComponent
  ]
})
export class UiTemplatesModule { }
