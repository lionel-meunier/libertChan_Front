import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthApi } from '@my/auth';

@Injectable()
export class AuthApiService implements AuthApi {

  constructor() {
  }

  login(data): Observable<any> {
    console.log('toto', data);
    return of(data);
  }

  logout(): Observable<void> {
    return of(true).pipe(
      map(() => {
        return;
      }),
    );
  }
}
