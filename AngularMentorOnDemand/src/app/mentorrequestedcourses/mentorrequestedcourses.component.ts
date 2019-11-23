import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentorrequestedcourses',
  templateUrl: './mentorrequestedcourses.component.html',
  styleUrls: ['./mentorrequestedcourses.component.scss']
})
export class MentorrequestedcoursesComponent implements OnInit {

  requestedCourses
  tabletoggler: boolean

  constructor(private _datashare: DatashareService, private _auth: AuthService) { }

  ngOnInit() {
    this.renderList()
  }

  renderList() {
    let MentorEmail = localStorage.getItem('email')
    this._datashare.getMentorAllAppliedCourses(MentorEmail)
      .subscribe(
        res => {
          console.log(res)
          this.requestedCourses = res
          if (this.requestedCourses.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )
  }

  acceptStudent(course) {
    let courseData = {
      StudentEmail : course.student.email,
      MentorSkillId : course.mentorSkillId
    }
    console.log(courseData)
    this._datashare.mentorAcceptCourse(courseData)
      .subscribe(
        res=>{
          this.renderList()
        },
        err => console.log(err)
      )
  }

  rejectStudent(course) {
    let courseData = {
      StudentEmail : course.student.email,
      MentorSkillId : course.mentorSkillId
    }
    this._datashare.mentorRejectCourse(courseData)
      .subscribe(
        res=>{
          this.renderList()
        },
        err => console.log(err)
      )
  }

}
