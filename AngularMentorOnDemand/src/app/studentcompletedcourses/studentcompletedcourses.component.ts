import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentcompletedcourses',
  templateUrl: './studentcompletedcourses.component.html',
  styleUrls: ['./studentcompletedcourses.component.scss']
})
export class StudentcompletedcoursesComponent implements OnInit {

  completedCourses
  tabletoggler: boolean
  rate

  constructor(public _datashare: DatashareService, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    this.getCompletedCourses()
  }

  submitRating(course) {
    let record = {
      StudentEmail : localStorage.getItem('email'),
      MentorSkillId : course.mentorSkillId,
      Rating : this.rate
    }
console.log(record)
    this._datashare.rateCourse(record)
        .subscribe(
          res => {
            this.getCompletedCourses()
          },
          err => console.log(err)
        )
  }

  getCompletedCourses() {
    let StudentEmail = localStorage.getItem('email')
    this._datashare.getStudentAllCompletedCourses(StudentEmail)
      .subscribe(
        res => {
          console.log(res)
          this.completedCourses = res
          if (this.completedCourses.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )
  }

}
