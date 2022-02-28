.import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
    ) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
       
        }

        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.onEnd();
                    }
                },
                (err: any) => {
                    this.onEnd();
                }
            )
        );
    }

    private onEnd(): void {
        this.hideLoader();
    }

   
}
