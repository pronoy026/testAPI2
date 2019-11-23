import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinType;
  signinData = {Role : 0}
  message = ''
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    if(this._auth.loggedIn()) {
      this._router.navigate(['/home'])
    }

  }

  signinMethod() {
    this.signinData.Role = +this.signinData.Role //type conversion
    console.log(this.signinData)
      this._auth.loginUser(this.signinData)
        .subscribe(
          res => {
            console.log(res)
            localStorage.setItem('token', res.token)
            localStorage.setItem('email', res.email)
            localStorage.setItem('role', res.role)
            if(res.role == 3) {
            this._router.navigate(['/studenthome'])
            }
            if(res.role == 2)
            {
              this._router.navigate(['/mentorhome'])
            }
            if(res.role == 1)
            {
              this._router.navigate(['/adminhome'])
            }
          },
          err => {
            this.message = err.error
          }
        )
  }

}
