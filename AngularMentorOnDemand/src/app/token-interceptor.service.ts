import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector, private _auth : AuthService) { }

  intercept( req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${this._auth.getToken()}`
        // Authorization : 'Bearer xx.xx.xx'
      }
    })
    console.log('intercepted : token added to http header')
    return next.handle(tokenizedReq)
  }
}
