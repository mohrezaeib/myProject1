import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as global from '../globals';
import * as moment from 'moment';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Admin} from '../models/admin';
import {Result} from '../models/result';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Admin;
  constructor(private http: HttpClient, private router: Router) { }

  login(mobile: string, password: string ) {
    return this.http.post<Result>(global.dataUrl + '/Admin/Login',
        {mobile: mobile, password: password})
       .pipe(tap(res  => this.setSession(res), e => {}));
  }

  private setSession(authResult: Result) {
    if (authResult.status) {
      this.user = authResult.object;
      const expiresAt = moment().add(authResult.object.token.expires, 'second');
      localStorage.setItem('id_token', authResult.object.token.token);
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
      localStorage.setItem('user' , JSON.stringify(this.user));
      console.log(this.user);
      return true;
    }
  }
  public setUser(result: Admin) {
    this.user = result;
    localStorage.setItem('user' , JSON.stringify(this.user));
    console.log(this.user);
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getUser() {
    // console.log('user: ', localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    } else {
      this.logout();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
