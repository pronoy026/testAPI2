import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-studentpayment',
  templateUrl: './studentpayment.component.html',
  styleUrls: ['./studentpayment.component.scss']
})
export class StudentpaymentComponent implements OnInit {

  courseData
  paymentSuccess: boolean
  notStudent: boolean

  constructor(private _router: Router, private _datashare: DatashareService, private _auth: AuthService) { }

  ngOnInit() {
    this.courseData = this._datashare.selectedCourseForPayment
    this.paymentSuccess = false
    
          this._datashare.userEmail = localStorage.getItem('email')
          if (localStorage.getItem('role')!='3') {
            this.notStudent = true
          } else {
            this.notStudent = false
          }
  }

  registerCourse(course) {
    console.log('data came')
    console.log(course)
    let record = {
      StudentEmail : localStorage.getItem('email'),
      MentorSkillId : course.mentorSkillId
    }
    console.log(record)
    this._datashare.studentRegisterCourse(record)
      .subscribe(
        res => { 
          this.paymentSuccess = true
          console.log('course registered successfully')
        },
        err => console.log(err)
      )
    
  }

}
