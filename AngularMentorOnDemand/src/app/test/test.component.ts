import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, Data } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {

  studentNotifications

  constructor(private _auth: AuthService, private _router: Router, public _datashare: DatashareService) { }

  ngOnInit() {
    this._datashare.userEmail = localStorage.getItem('email')
    this._datashare.userTypeStudent = true
    this._datashare.userTypeMentor = false
    this._datashare.userTypeAdmin = false
    if (localStorage.getItem('role') != '3') {
      this._router.navigate(['/signin'])
    }
    this.getStudentNotifications()
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
