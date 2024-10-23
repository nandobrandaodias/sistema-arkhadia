import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)

  const token = authService.getToken()
  if(token){
    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${token.access_token}`),
    });
    return next(newReq);
  }
  return next(req);
};