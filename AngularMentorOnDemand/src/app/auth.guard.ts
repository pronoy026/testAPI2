import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { DatashareService } from './datashare.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  accType : string

  constructor(private _authService: AuthService, private _datashareService: DatashareService,
    private _router: Router) {
    
  }

  canActivate(): boolean {

    if (this._authService.loggedIn()) {
      return true
    }
    else {
      this._router.navigate(['/signin'])
      return false
    }
  }

}
