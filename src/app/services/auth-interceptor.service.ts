import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error("Method not implemented.");
    const idToken = localStorage.getItem('id_token');
    console.log('here');

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + idToken)
      });

      return next.handle(cloned).pipe(tap(() => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['login']);
            } else {
              return throwError(err);
            }
          }
        }));
    } else {
       return next.handle(req);
    }
  }
}
// import { Injectable } from '@angular/core';

//
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthInterceptor implements HttpInterceptor {
//
//   constructor(private router: Router) { }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//     const idToken = localStorage.getItem('id_token');
//     console.log('here');
//
//
//     if (idToken) {
//       const cloned = req.clone({
//         headers: req.headers.set('Authorization',
//           'Bearer ' + idToken)
//       });
//
//       return next.handle(cloned).pipe(tap(() => {},
//         (err: any) => {
//           if (err instanceof HttpErrorResponse) {
//             if (err.status === 401) {
//               this.router.navigate(['login']);
//             } else {
//               return throwError(err);
//             }
//           }
//         }));
//     } else {
//        return next.handle(req);
//     }
//   }
// }
