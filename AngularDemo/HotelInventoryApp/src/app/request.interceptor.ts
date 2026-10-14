import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    console.log('Request Intercepted');

    //You can not modifiy the original request
    if (request.method === 'POST') {
      const newRequest = request.clone({
        headers: request.headers.set('post-token', 'testy-mcTest'),
      });

      return next.handle(newRequest); //this sends the request to the server
    }

    return next.handle(request); //for all other requests, send the original request
  }
}
