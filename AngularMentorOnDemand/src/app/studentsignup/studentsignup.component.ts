import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.scss']
})
export class StudentsignupComponent implements OnInit {

  constructor( private _auth : AuthService, private _router : Router) { }

  registerStudentData = {name: "", email: "", PhoneNumber: "", password: "", Role : 3}

  ngOnInit() {
    if(this._auth.loggedIn()) {
      this._router.navigate(['/home'])
    }
  }

  registerStudent() {
    console.log(this.registerStudentData)
    this._auth.registerUser(this.registerStudentData)
      .subscribe(
          res => {
            console.log(res)
            localStorage.setItem('token', res.token)
            localStorage.setItem('email', res.email)
            localStorage.setItem('role', res.role)
            this._router.navigate(['/studenthome'])
          },
          err => console.log(err)
      )
  }
}
