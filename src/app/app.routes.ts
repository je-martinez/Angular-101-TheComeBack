import { Routes } from '@angular/router';
import { HomePage } from '@modules/home/pages';
import { DefaultLayoutComponent } from '@modules/ui/layouts';
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
