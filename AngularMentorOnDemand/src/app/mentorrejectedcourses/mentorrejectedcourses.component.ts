import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentorrejectedcourses',
  templateUrl: './mentorrejectedcourses.component.html',
  styleUrls: ['./mentorrejectedcourses.component.scss']
})
export class MentorrejectedcoursesComponent implements OnInit {

  rejectedCourses
  tabletoggler: boolean

  constructor(private _datashare: DatashareService, private _auth: AuthService) { }

  ngOnInit() {
    let mentorEmail = localStorage.getItem("email")
    this._datashare.getMentorAllRejectedCourses(mentorEmail)
      .subscribe(
        res => {
          this.rejectedCourses = res
          if (this.rejectedCourses.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )
  }

}
