import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentrejectedcourses',
  templateUrl: './studentrejectedcourses.component.html',
  styleUrls: ['./studentrejectedcourses.component.scss']
})
export class StudentrejectedcoursesComponent implements OnInit {

  rejectedCourses
  tabletoggler: boolean

  constructor(public _datashare: DatashareService, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    let StudentEmail = localStorage.getItem('email')
    this._datashare.getStudentAllRejectedCourses(StudentEmail)
      .subscribe(
        res => {
          console.log(res)
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
