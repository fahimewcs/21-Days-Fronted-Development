import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);
  const token = localStorage.getItem('token');

  // attach token if exists
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Interceptor Request:', req);
  }

  
  // Response: Error handling
  
  return next(req).pipe(
    catchError((err: any) => {
      console.log('Interceptor Response Error:', err);

      // Unauthorized → logout + redirect
      if (err.status === 401) {
        localStorage.removeItem('token');
        router.navigate(['/login']);
      }

      return throwError(() => err);
    })
  );


};
