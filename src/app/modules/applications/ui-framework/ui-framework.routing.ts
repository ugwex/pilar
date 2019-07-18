import { Routes, RouterModule } from '@angular/router';

import { UiFrameworkComponent } from './ui-framework.component';
import { TypographyComponent } from './ui-features/typography/typography.component';
import { ColorComponent } from './ui-features/color/color.component';
import { ButtonComponent } from './ui-features/button/button.component';
import { LabelComponent } from './ui-features/label/label.component';
import { InformationComponent } from './ui-features/information/information.component';
import { PanelComponent } from './ui-features/panel/panel.component';
import { IconComponent } from './ui-features/icon/icon.component';
import { GridComponent } from './ui-features/grid/grid.component';
import { FormInputsComponent } from './forms/form-inputs/form-inputs.component';
import { AlertComponent } from './components/alert/alert.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ModalComponent } from './components/modal/modal.component';
import { BasicTablesComponent } from './tables/basic-tables/basic-tables.component';
import { DataTablesComponent } from './tables/data-tables/data-tables.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { EditorComponent } from './components/editor/editor.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { WellsComponent } from './ui-features/wells/wells.component';
import { LandingPageComponent } from '../../components/landing-page/landing-page.component';
import { PaginateComponent } from './components/pagination/pagination.component';
import { TabComponent } from './components/tab/tab.component';
import { SwitchComponent } from './components/switch/switch.component';

const routes: Routes = [
  {
    path: '',
    component: UiFrameworkComponent,
    children: [{
        path: '',
        component: LandingPageComponent
      }, {
        path: 'accordion',
        component: AccordionComponent,
        data: {
          breadcrumb: 'Component - Accordion'
        }
      }, {
        path: 'dropdown',
        component: DropdownComponent,
        data: {
          breadcrumb: 'Component - Dropdown'
        }
      }, {
        path: 'editor',
        component: EditorComponent,
        data: {
          breadcrumb: 'Component - Editor'
        }
      }, {
        path: 'wizard',
        component: WizardComponent,
        data: {
          breadcrumb: 'Component - Wizard'
        }
      }, {
        path: 'form-inputs',
        component: FormInputsComponent,
        data: {
          breadcrumb: 'Form - Form Inputs'
        }
      }, {
        path: 'basic-tables',
        component: BasicTablesComponent,
        data: {
          breadcrumb: 'Table - Basic Tables'
        }
      }, {
        path: 'data-tables',
        component: DataTablesComponent,
        data: {
          breadcrumb: 'Table - Data Tables'
        }
      }, {
        path: 'typography',
        component: TypographyComponent,
        data: {
          breadcrumb: 'UI Features - Typography'
        }
      }, {
        path: 'color',
        component: ColorComponent,
        data: {
          breadcrumb: 'UI Features - Color'
        }
      }, {
        path: 'button',
        component: ButtonComponent,
        data: {
          breadcrumb: 'UI Features - Button'
        }
      }, {
        path: 'label',
        component: LabelComponent,
        data: {
          breadcrumb: 'UI Features - Label'
        }
      }, {
        path: 'switch',
        component: SwitchComponent,
        data: {
          breadcrumb: 'UI Features - Switch'
        }
      }, {
        path: 'alert',
        component: AlertComponent,
        data: {
          breadcrumb: 'UI Features - Alert'
        }
      }, {
        path: 'information',
        component: InformationComponent,
        data: {
          breadcrumb: 'UI Features - Information'
        }
      }, {
        path: 'panel',
        component: PanelComponent,
        data: {
          breadcrumb: 'UI Features - Panel'
        }
      }, {
        path: 'icons',
        component: IconComponent,
        data: {
          breadcrumb: 'UI Features - Icons'
        }
      }, {
        path: 'modals',
        component: ModalComponent,
        data: {
          breadcrumb: 'UI Features - Modal'
        }
      }, {
        path: 'grid',
        component: GridComponent,
        data: {
          breadcrumb: 'UI Features - Grid'
        }
      }, {
        path: 'wells',
        component: WellsComponent,
        data: {
          breadcrumb: 'UI Features - Wells'
        }
      }, {
        path: 'pagination',
        component: PaginateComponent,
        data: {
          breadcrumb: 'Component - Pagination'
        }
      }, {
        path: 'tab',
        component: TabComponent,
        data: {
          breadcrumb: 'Component - Tab'
        }
      }
    ]
  },
];

export const UiFrameworkRoutes = RouterModule.forChild(routes);
