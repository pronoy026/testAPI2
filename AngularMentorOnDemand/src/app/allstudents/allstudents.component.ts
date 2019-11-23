import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { BlockService } from '../block.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.scss']
})
export class AllstudentsComponent implements OnInit {
  allStudents
  tabletoggler: boolean

  constructor(public _datashare: DatashareService, private _block: BlockService, private _router: Router) { }

  ngOnInit() {
    this._datashare.getAllStudents()
      .subscribe(
        res => {
          this.allStudents = res
          console.log(res);
          if (this.allStudents.length == 0) {
            this.tabletoggler = false
          }
          else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )
  }

  blockStudent(student) {
    this._block.blockUnblockUser(student)
      .subscribe(
        res => {
          console.log("blocked")
          console.log(res)
          this._datashare.getAllStudents()
            .subscribe(
              res => {
                this.allStudents = res
                if (this.allStudents.length == 0) {
                  this.tabletoggler = false
                }
                else {
                  this.tabletoggler = true
                }
              },
              err => console.log(err)
            )
          // this._router.navigate(['/adminhome/blockedstudents'])
        },
        err => console.log(err)
      )
  }


}
