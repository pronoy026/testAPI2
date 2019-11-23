import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blockedstudents',
  templateUrl: './blockedstudents.component.html',
  styleUrls: ['./blockedstudents.component.scss']
})
export class BlockedstudentsComponent implements OnInit {

  allStudents
  empty = []
  tabletoggler: boolean

  constructor(private _block: BlockService, private _router: Router) { }

  ngOnInit() {

    this._block.allBlockedStudents()
      .subscribe(
        res => {
          this.allStudents = res
          console.log(this.allStudents.length)
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

  unblockStudent(student) {
    this._block.blockUnblockUser(student)
      .subscribe(
        res => {
          console.log('unblocked')
          this._block.allBlockedStudents()
            .subscribe(
              res => {
                this.allStudents = res
                console.log(this.allStudents.length)
                if (this.allStudents.length == 0) {
                  this.tabletoggler = false
                }
                else {
                  this.tabletoggler = true
                }

              },
              err => console.log(err)
            )
          // this._router.navigate(['/adminhome/allstudents'])
        },
        err => console.log(err)
      )
  }

}
