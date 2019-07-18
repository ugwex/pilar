import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { RouterModule } from '@angular/router';
import { PilarModule } from '@uiigateway/pilar';
import {
  LandingPageComponent,
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  HomeScreenComponent,
  SidebarmenuComponent
} from '../components';

@NgModule({
  imports: [
    CommonModule,
    PilarModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HomeScreenComponent,
    LandingPageComponent,
    SidebarComponent,
    SidebarmenuComponent
  ],
  declarations: [
    ComponentsComponent,
    FooterComponent,
    HeaderComponent,
    HomeScreenComponent,
    LandingPageComponent,
    SidebarComponent,
    SidebarmenuComponent
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: ComponentsModule
    };
  }
}
