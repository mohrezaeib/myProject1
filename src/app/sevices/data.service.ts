import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nav} from '../models/nav';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient ) { }
  getNav(): Observable<Nav>{
    return this.http.get<Nav>(this.url + `data/list.json`);

  }

}
