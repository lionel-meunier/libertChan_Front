import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorAuthService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.isAuthentificated$.pipe(
      switchMap((isAuth) => {
        if (isAuth === true) {
          return this.authService.userAuth$;
        }
        return of(false);
      }),
      switchMap((user) => {
        let request = req;
        if (user) {

          request = req.clone({headers: req.headers.append('Auth', user.token)});
        }
        return next.handle(request).pipe(
          catchError((reason: HttpErrorResponse) => {
            console.log(reason);
            if (reason.url === 'http://localhost:8080/api') {
              return of(new HttpResponse({
                body : {toto: true},
                url : reason.url,
                status : 200
              }));
            }
            return throwError(reason);
          })
        );
      }),
    );
  }
}
