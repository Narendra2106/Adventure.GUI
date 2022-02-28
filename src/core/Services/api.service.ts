import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { catchError , map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})



export class ApiService {
    constructor(private http: HttpClient) {}

    get(url: string): Observable<any> {
        return (
            this.http
                .get(url)
                .pipe(catchError(this.handleError))
        );
    }

    put(url: string, model: any): Observable<any> {
        return this.http.put(url, model).pipe(catchError(this.handleError));
    }

    post(url: string, model: any): Observable<any> {
        return this.http.post(url, model).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // client-side error
        } else {
            if (error.status === 400) {
            }
            if (
                error.status === 406 ||
                error.status === 412 ||
                error.status === 412
            ) {
            }
            if (error.status === 404) {
               
            }
            if (error.status === 500) {
              
            }

            if (error.status === 401) {
                
            }
        }
        
        return empty();
    }

   
}
