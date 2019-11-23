import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { DatashareService } from './datashare.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userEmail :string


  constructor( private http: HttpClient, private _router : Router, private data : DatashareService) { }

  private _registerUserUrl = this.data.apiServer + "/authservice/register"
  private _loginUserUrl = this.data.apiServer+"/authservice/login"

  registerUser(user) {
    return this.http.post<any>(this._registerUserUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUserUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')  //a boolean value to check if the token is present or not
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('role')
    this._router.navigate(['/signin'])
  }

  getToken() {
    // console.log(localStorage.getItem('token'))
    return localStorage.getItem('token')
  }
}
