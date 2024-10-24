import { Routes } from '@angular/router';
import { SheetComponent } from './sheets/sheet/sheet.component';
import { LoginComponent } from './login/login/login.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./main/home/home.routes').then((m) => m.routes),
  },
  {
    path: 'sheet/:id',
    component: SheetComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '/'
  },
];
