import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// import { MentorModel } from '../mentor-model';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.scss']
})
export class MentorsignupComponent implements OnInit {

  mentorData = {Role : 2}

  constructor( private _auth : AuthService, private _router : Router) { }

  ngOnInit() {
    if(this._auth.loggedIn()){
      this._router.navigate(['/home'])
    }
  }

  mentorRegister() {
    console.log(this.mentorData)
    this._auth.registerUser(this.mentorData)
        .subscribe(
          res => {
            console.log(res)
            localStorage.setItem('token', res.token)
            localStorage.setItem('email', res.email)
            localStorage.setItem('role', res.role)
            this._router.navigate(['/mentorhome'])
          },
          err => console.log(err)
        )
  }

}
