import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { BlockService } from '../block.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blockedmentors',
  templateUrl: './blockedmentors.component.html',
  styleUrls: ['./blockedmentors.component.scss']
})
export class BlockedmentorsComponent implements OnInit {

  mentorList
  tabletoggler: boolean

  mentorName
  mentorEmail
  mentorPhone
  mentorExpYears

  constructor(private _datashare: DatashareService, private _block: BlockService, private _router: Router) { }

  ngOnInit() {
    this._block.allBlockedMentors()
      .subscribe(
        res => {
          this.mentorList = res

          if (this.mentorList.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )

  }

  modalDataChange(data) {
    this.mentorName = data.name
    this.mentorEmail = data.email
    this.mentorPhone = data.phoneNumber
    this.mentorExpYears = data.experience
  }

  unblockMentor(mentor) {
    this._block.blockUnblockUser(mentor)
      .subscribe(
        res => {
          console.log('unblocked mentor')

          this._block.allBlockedMentors()
            .subscribe(
              res => {
                this.mentorList = res

                if (this.mentorList.length == 0) {
                  this.tabletoggler = false
                } else {
                  this.tabletoggler = true
                }
              },
              err => console.log(err)
            )
          // this._router.navigate(['/adminhome/allmentors'])
        },
        err => console.log(err)
      )
  }

}
