import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiFrameworkComponent } from './ui-framework.component';
import { PilarModule } from '@uiigateway/pilar';
import { WizardComponent } from './components/wizard/wizard.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';
import { EditorComponent } from './components/editor/editor.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabComponent } from './components/tab/tab.component';
import { FormInputsComponent } from './forms/form-inputs/form-inputs.component';
import { BasicTablesComponent } from './tables/basic-tables/basic-tables.component';
import { DataTablesComponent } from './tables/data-tables/data-tables.component';
import { TypographyComponent } from './ui-features/typography/typography.component';
import { ColorComponent } from './ui-features/color/color.component';
import { ButtonComponent } from './ui-features/button/button.component';
import { LabelComponent } from './ui-features/label/label.component';
import { InformationComponent } from './ui-features/information/information.component';
import { PanelComponent } from './ui-features/panel/panel.component';
import { IconComponent } from './ui-features/icon/icon.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { UiFrameworkRoutes } from './ui-framework.routing';
import { GridComponent } from './ui-features/grid/grid.component';
import { IconGlyphComponent } from './ui-features/icon/icon-glyph/icon-glyph.component';
import { IconFaComponent } from './ui-features/icon/icon-fa/icon-fa.component';
import { IconIonicComponent } from './ui-features/icon/icon-ionic/icon-ionic.component';
import { WellsComponent } from './ui-features/wells/wells.component';
import { ComponentsModule } from '../../components/components.module';
import { PaginateComponent } from './components/pagination/pagination.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  imports: [
    PilarModule,
    ComponentsModule,
    UiFrameworkRoutes,
  ],
  declarations: [
    UiFrameworkComponent,
    WizardComponent,
    AccordionComponent,
    DropdownComponent,
    EditorComponent,
    FormInputsComponent,
    BasicTablesComponent,
    DataTablesComponent,
    TypographyComponent,
    ColorComponent,
    ButtonComponent,
    LabelComponent,
    AlertComponent,
    InformationComponent,
    PanelComponent,
    IconComponent,
    IconGlyphComponent,
    IconFaComponent,
    IconIonicComponent,
    ModalComponent,
    TabComponent,
    GridComponent,
    WellsComponent,
    PaginateComponent,
    SwitchComponent
  ]
})
export class UiFrameworkModule { }
