import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class InterseptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = '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';
    const newheaders = request.headers.append(
      'Authorization',
      'Bearer ' + token
    );
    const modifiedRequest = request.clone({
      headers: newheaders,
    });

    return next.handle(modifiedRequest);
  }
}
