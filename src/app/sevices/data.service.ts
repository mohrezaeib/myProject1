import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nav} from '../models/nav';
import {Admin} from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://cafeapi.nicode.org/Admin/Login';
  constructor(private http: HttpClient ) { }
  login(mobile:string, password:string): Observable<Admin>{
    return this.http.post<Admin>(this.url,{mobile, password});

  }

}
