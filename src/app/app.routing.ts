import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './modules/base.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/base.module#BaseModule'
  },
  {
    path: 'templates',
    loadChildren: './modules/applications/ui-templates/ui-templates.module#UiTemplatesModule'
  },
  { path: '**', redirectTo: '' },
];

export const AppRoutes = RouterModule.forRoot(routes);
