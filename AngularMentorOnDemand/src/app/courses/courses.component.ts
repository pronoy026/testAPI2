import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  mentorCourseList

  mentorName
  mentorRating
  expYears


  constructor(public _dataService: DatashareService, private _router: Router) { }

  ngOnInit() {
    // this.getCourses()
    this.getMentorCourses()
  }

  getMentorCourses() {
    this._dataService.getAllMentorCourses()
      .subscribe(
        res => {
          this.mentorCourseList = res
          console.log(res)
        },
        err => console.log(err)
      )
  }

  modalDataChange(data) {

    this.mentorName = data.mentor.name
    this.mentorRating = data.mentor.rating
    this.expYears = data.mentor.experience
  }
  buttonAction(course) {
    if (localStorage.getItem('role') != '3') {
      alert('Sorry! you are not eligible to apply for courses')
    }
    else {
      this.applyCourse(course)
    }
  }

  applyCourse(course) {
    let StudentEmail = localStorage.getItem('email')
    let MentorSkillId = course.mentorSkillId
    this._dataService.checkCourse({ StudentEmail, MentorSkillId })
      .subscribe(
        res => {
          let record = {
            StudentEmail: localStorage.getItem('email'),
            MentorSkillId: course.mentorSkillId,
            IsRequested: true,
            IsCompleted: false,
            IsRejected: false,
            IsRegistered: false,
            IsConfirmed: false,
            CompletionStatus: 0,
            Rating: 0
          }
          console.log(record)
          this._dataService.appliedCourse(record)
            .subscribe(
              res => {
                alert(`Successfully applied for ${course.name} course by ${course.mentor.name}`)
                this._router.navigate(['/studenthome/studentappliedcourses'])
              },
              err => console.log(err)
            )
        },
        err => alert('Sorry! you are not eligible to enroll for this course. You have either applied for the course, yet to pay after getting confirmation, registered for the course or completed the course.')
      )
  }
}
