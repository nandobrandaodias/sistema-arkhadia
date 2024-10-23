import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.checkAuth()
};

// const checkAuth = () => {
//   if (authService.checkAuth()) return true;
//   else return false;
// };
