import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomePage,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
