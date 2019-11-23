import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminindividualcourses',
  templateUrl: './adminindividualcourses.component.html',
  styleUrls: ['./adminindividualcourses.component.scss']
})
export class AdminindividualcoursesComponent implements OnInit {
  courses
  tabletoggler: boolean

  constructor(private _datashare: DatashareService, private _auth: AuthService) { }

  ngOnInit() {
    this._datashare.getAdminIndividualCourses()
      .subscribe(
        res => {
          console.log(res)
          this.courses = res
          console.log(this.courses)
          if (this.courses.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )
  }

}
