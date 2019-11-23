import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentconfirmedcourses',
  templateUrl: './studentconfirmedcourses.component.html',
  styleUrls: ['./studentconfirmedcourses.component.scss']
})
export class StudentconfirmedcoursesComponent implements OnInit {

  confirmedCourses
  tabletoggler: boolean

  constructor(public _datashare: DatashareService, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    let StudentEmail = localStorage.getItem('email')
    this._datashare.getStudentAllConfirmedCourses(StudentEmail)
      .subscribe(
        res => {
          console.log(res)
          this.confirmedCourses = res
          if (this.confirmedCourses.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )
  }
  makePayment(course) {
    this._datashare.selectedCourseForPayment = course
    this._router.navigate(['/studentpayment'])
  }

}
