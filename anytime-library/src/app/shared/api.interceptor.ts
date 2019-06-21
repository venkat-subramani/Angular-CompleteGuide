import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiUrl = 'https://angular-anytime-library.firebaseio.com';
    const copiedReq = req.clone({
      url: `${apiUrl}/${req.url}`,
      // params: req.params.append('auth', this.authService.getToken())
    });
    return next.handle(copiedReq);
  }
}
