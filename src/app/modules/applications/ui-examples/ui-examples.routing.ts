import { Routes, RouterModule } from '@angular/router';

import { UiExamplesComponent } from './ui-examples.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';
import { Example03Component } from './example03/example03.component';
import { LandingPageComponent } from '../../components';

const routes: Routes = [
    {
      path: '',
      component: UiExamplesComponent,
      children: [{
          path: '',
          component: LandingPageComponent
        }, {
          path: 'example-1',
          component: Example01Component,
          data: {
            breadcrumb: 'Example 01'
          }
        }, {
          path: 'example-2',
          component: Example02Component,
          data: {
            breadcrumb: 'Example 02'
          }
        }, {
          path: 'example-3',
          component: Example03Component,
          data: {
            breadcrumb: 'Example 03'
          }
        }
      ]
    },
  ];

export const UiExamplesRoutes = RouterModule.forChild(routes);
