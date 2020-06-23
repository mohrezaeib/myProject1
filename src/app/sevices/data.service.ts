import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nav} from '../models/nav';
import {Product} from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient ) { }
  getProduct(): Observable<Product>{
    return this.http.get<Product>('');

  }

}
