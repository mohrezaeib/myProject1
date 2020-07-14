import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable, of} from 'rxjs';
import {Result} from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class GetuserInfoService {
// userifo: User = {
//   id: 'string',
//   name: 'string',
//   familyName: 'string',
//   birthday: 13333333,
//   mobile: 'string',
//   createdAt: 1111,
//   gender: 2,
//   profileImageId: 'string',
//   profileImage: 'assets/images/personel.jpg',
//   city: 'string',
//   country: 'string',
//   provience: 'string',
//   email: 'string',
//   status: 2
// };
  constructor(private  http: HttpClient) { }
  getInfo(): Observable<User>{
    //return of(this.userifo);
   return  this.http.get<User>('/assets/protected-info/userinfo.json');

  }
}
