import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthService} from "../service/auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = this.auth.getAuthToken();

    let authReq = req;
    if (authToken) {
      authReq = req.clone({setHeaders: {Authorization: authToken}});
    }
    return next.handle(authReq);
  }
}
