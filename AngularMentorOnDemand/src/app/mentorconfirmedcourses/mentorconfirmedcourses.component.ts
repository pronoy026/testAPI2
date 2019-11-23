import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentorconfirmedcourses',
  templateUrl: './mentorconfirmedcourses.component.html',
  styleUrls: ['./mentorconfirmedcourses.component.scss']
})
export class MentorconfirmedcoursesComponent implements OnInit {

  confirmedCourses
  tabletoggler: boolean

  constructor(private _datashare: DatashareService, private _auth: AuthService) { }

  ngOnInit() {
    let mentorEmail = localStorage.getItem("email")
    this._datashare.getMentorAllConfirmedCourses(mentorEmail)
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

}
