import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { authGuard } from './auth/auth.guard';
import { CharacterComponent } from './character/character/character.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./main/home/home.routes').then((m) => m.routes),
  },
  {
    path: 'character/:id',
    component: CharacterComponent,
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
