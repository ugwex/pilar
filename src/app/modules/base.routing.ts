import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'ui-framework',
        loadChildren: './applications/ui-framework/ui-framework.module#UiFrameworkModule',
        data: {
          breadcrumb: 'UI Framework'
        }
      },
      {
        path: 'ui-examples',
        loadChildren: './applications/ui-examples/ui-examples.module#UiExamplesModule',
        data: {
          breadcrumb: 'UI Examples'
        }
      },
      {
        path: 'ui-template',
        loadChildren: './applications/ui-templates/ui-templates.module#UiTemplatesModule'
      }
    ]
  },
];

export const BaseRoutes = RouterModule.forChild(routes);
