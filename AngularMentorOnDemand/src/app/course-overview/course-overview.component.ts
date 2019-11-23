import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent implements OnInit {

  course
  selectValue

  constructor(private _router: Router, private _datashare: DatashareService) { }

  ngOnInit() {
    this.course = this._datashare.courseOverviewData
  }
  updateRegisteredCourse() {
    let value = parseInt(this.selectValue, 10)

    //
    if((this.course.completionStatus+25)!=value)
    {
      alert(`Please complete the course step by step! Please complete ${this.course.completionStatus+25}% of the course first.`)
    }
    //

    if(value<=this.course.completionStatus)
    {
      alert(`Please select completion percentage higher than ${this.course.completionStatus} %`)
    }
    if(this.selectValue===undefined) {
      alert('Please select completion percentage to proceed!')
    }
    if ((this.course.completionStatus+25)==value && value>this.course.completionStatus && value!= 100 && this.selectValue!==undefined) {

      let record = {
        StudentEmail : localStorage.getItem('email'),
        MentorSkillId : this.course.mentorSkillId,
        CompletionStatus : value
      }

      this._datashare.courseCompletionStatusUpdate(record)
        .subscribe(
          res => {
            this.course.completionStatus = value
            alert(`Course completion percentage updated successfully to ${this.course.completionStatus} %`)
            this._router.navigate(['/studenthome/studentregisteredcourses'])
          },
          err => console.log(err)
        )
    }
    if (value== 100 && this.selectValue!==undefined) {
      this.completionCheck()
    }
  }
  completionCheck() {
    if (this.course.completionStatus+25!= 100) {
      {
        alert(`Before completing make sure that you have completed the course upto 75%`)
      }
    }
    else {
      this.courseCompletion()
    }
  }

  courseCompletion() {
    let record = {
      StudentEmail : localStorage.getItem('email'),
      MentorSkillId : this.course.mentorSkillId,
      CompletionStatus : 100
    }
    this._datashare.courseCompletionUpdate(record)
        .subscribe(
          res => this._router.navigate(['/studenthome/studentcompletedcourses']),
          err => console.log(err)
        )
  }
}
