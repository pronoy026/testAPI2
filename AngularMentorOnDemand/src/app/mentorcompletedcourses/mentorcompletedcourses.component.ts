import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentorcompletedcourses',
  templateUrl: './mentorcompletedcourses.component.html',
  styleUrls: ['./mentorcompletedcourses.component.scss']
})
export class MentorcompletedcoursesComponent implements OnInit {

  completedCourses
  tabletoggler: boolean

  constructor(private _datashare: DatashareService, private _auth: AuthService) { }

  ngOnInit() {
    let mentorEmail = localStorage.getItem("email")
    this._datashare.getMentorAllCompletedCourses(mentorEmail)
      .subscribe(
        res => {
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
