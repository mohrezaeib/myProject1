import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.isLoggedIn()) {
      if (route.data.role === this._authService.getUser().userTypeId) {
        return true;
      } else {
        this._router.navigate(['/login']);
        return false;
      }
      return true;
    }
    console.log(state.url);
    // navigate to login page
    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}
