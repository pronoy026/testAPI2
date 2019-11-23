import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentorcreatecourse',
  templateUrl: './mentorcreatecourse.component.html',
  styleUrls: ['./mentorcreatecourse.component.scss']
})
export class MentorcreatecourseComponent implements OnInit {

  constructor(private data: DatashareService, private router: Router) { }

  sdate= new Date()
  edate = new Date()
  createCourseData = { MentorEmail: localStorage.getItem('email'), TechId: 0, StartDate:'', EndDate:''}
  techData
  message = ""
 

  ngOnInit() {
    // console.log(this.data.techData)
    this.techData = this.data.techData
  }
  dateChange() {
    this.sdate = new Date(this.createCourseData.StartDate)
    console.log(this.sdate)
    this.edate.setDate(this.sdate.getDate() + (this.techData.duration));
    // console.log(this.createCourseData.EndDate)
    this.createCourseData.EndDate = this.edate.toISOString().slice(0,10);
    // this.edate2 = this.createCourseData.EndDate.toLocaleDateString();
    console.log(this.createCourseData.EndDate)
    
  }
  createCourse() {
    console.log(this.createCourseData)
    this.createCourseData.TechId = this.techData.id
    this.data.createMentorCourse(this.createCourseData)
      .subscribe(
        res => {
          alert(`The ${this.techData.name} course has been created successfully. Kindly view courses to find.`)
          this.router.navigate(['/courses'])
        },
        err => console.log(err)
      )
  }
}
