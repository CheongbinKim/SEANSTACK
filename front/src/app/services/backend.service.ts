import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient,private router:Router) {
    this.handleError = this.handleError.bind(this);
   }

  getIndex(){
    return this.http.get('/api').pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      switch (error.status) {
        case 500:
          break;
        case 401:
          break;
      }
    }
    return throwError(error);
  }
}