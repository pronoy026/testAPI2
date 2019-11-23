import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentorregisteredcourses',
  templateUrl: './mentorregisteredcourses.component.html',
  styleUrls: ['./mentorregisteredcourses.component.scss']
})
export class MentorregisteredcoursesComponent implements OnInit {

  registeredCourses
  tabletoggler: boolean

  constructor(private _datashare: DatashareService, private _auth: AuthService) { }

  ngOnInit() {
    let mentorEmail = localStorage.getItem("email")
    this._datashare.getMentorAllRegisteredCourses(mentorEmail)
      .subscribe(
        res => {
          this.registeredCourses = res
          if (this.registeredCourses.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )
  }

}
