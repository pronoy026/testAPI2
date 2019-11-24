import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-studentwelcome',
  templateUrl: './studentwelcome.component.html',
  styleUrls: ['./studentwelcome.component.scss']
})
export class StudentwelcomeComponent implements OnInit {

  studentNotifications
  coursesinfo = {registeredCourses: 0, appliedCourses: 0, confirmedCourses: 0, completedCourses: 0}
  studentinfo ={}

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
    this.getCoursesInfo()
    this.getStudentInfo()
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
           this.getCoursesInfo()
         },
         err => console.log(err)
       )
   }

   getCoursesInfo() {
    let email = localStorage.getItem('email')
    this._datashare.getStudentCoursesInfo(email)
        .subscribe(
          res => {
            console.log(res)
              this.coursesinfo = res
          },
          err =>{
            console.log(err)
          }
        )
   }

   getStudentInfo() {
    let email = localStorage.getItem('email')
    this._datashare.getStudentInfo(email)
        .subscribe(
          res => {
            console.log(res)
              this.studentinfo = res
          },
          err =>{
            console.log(err)
          }
        )
   }

}
