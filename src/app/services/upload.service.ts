import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import * as global from '../globals';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private httpClient: HttpClient) {}
  postFile(fileToUpload: File , url ): Observable<Response> {
    const endpoint = 'http://cafeapi.nicode.org/Document/SendDocument' + url;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient.post(endpoint, formData);

    // this.httpClient
    //   .post(endpoint, formData, {   })
    //   .map(() => true)
    //   .catch((e) => { });
  }
}
