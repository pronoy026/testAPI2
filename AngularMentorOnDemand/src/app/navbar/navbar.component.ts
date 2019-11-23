import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { AuthService } from '../auth.service';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userEmail

  mentorNotifications
  studentNotifications

  constructor(public _datashare: DatashareService, private _authService: AuthService) { }

  ngOnInit() {
    if (this._authService.loggedIn()) {
      if (localStorage.getItem('role')=='3') {
        this._datashare.userTypeStudent = true
        this._datashare.userTypeMentor = false
        this._datashare.userTypeAdmin = false
      }
      if (localStorage.getItem('role')=='2') {
        this._datashare.userTypeStudent = false
        this._datashare.userTypeMentor = true
        this._datashare.userTypeAdmin = false
        this.getMentorNotifications()
        
      }
      if (localStorage.getItem('role')=='1') {
        this._datashare.userTypeStudent = false
        this._datashare.userTypeMentor = false
        this._datashare.userTypeAdmin = true
      }
    }
  }

  getMentorNotifications() {
   let email = localStorage.getItem('email')
   this._datashare.getMentorNotifications(email)
      .subscribe(
        res => {
          this.mentorNotifications = res
          if(this.mentorNotifications.length > 0) {
            this._datashare.notiMentor = this.mentorNotifications.length
          }
        },
        err => console.log(err)
      )
  }

  getStudentNotifications() {
    let email = localStorage.getItem('email')
    this._datashare.getStudentNotifications(email)
       .subscribe(
         res => {
           this.studentNotifications = res
           if(this.studentNotifications.length > 0) {
             this._datashare.notiStudent = this.studentNotifications.length
           }
         },
         err => console.log(err)
       )
   }



}
