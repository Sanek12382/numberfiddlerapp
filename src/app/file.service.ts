import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Entry} from './entry';



@Injectable({providedIn: 'root'})
export class FileService {
  private server = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getAllEntry(): Observable<Entry[]> {
    return this.http.get<Entry[]>(`${this.server}/file/all`);
  }

  // define function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/file/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  // define function to download files
  download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.server}/file/download/${filename}/`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

}
