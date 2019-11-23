import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  mentorCourseList
  mentorName
  mentorRating
  mentorNoOfTrainings
  expYears

  searchText

  searchmsg : string


  constructor(public _dataService: DatashareService, private _router : Router) { }

  ngOnInit() {
    // this.getCourses()
    console.log(this.mentorCourseList)
  }

  getSearchData() {
    let searchString = this.searchText
    console.log(searchString)
    this._dataService.search(searchString)
        .subscribe(
          res => {
            console.log(res)
            this.mentorCourseList= res
            if(res.length==0) {
              this.searchmsg ='Sorry! no search result found.'
            } else {
              this.searchmsg =''
            }
          },
          err => {
            console.log(err)
          }
        )
  }

  modalDataChange(data) {
    console.log(data)
    this.mentorName =data.mentor.name
    this.mentorRating =data.mentor.rating
    this.expYears =data.mentor.experience

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
