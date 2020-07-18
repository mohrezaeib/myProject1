import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../models/admin';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://cafeapi.nicode.org/Admin/Login';
  private mailApi = 'https://mailthis.to/codeninja';

  constructor(private http: HttpClient) {
  }

  login(mobile: string, password: string): Observable<Admin> {
    return this.http.post<Admin>(this.url, {mobile, password});

  }


  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, {responseType: 'text'})
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      );
  }

}
