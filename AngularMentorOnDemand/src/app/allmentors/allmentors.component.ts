import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { BlockService } from '../block.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allmentors',
  templateUrl: './allmentors.component.html',
  styleUrls: ['./allmentors.component.scss']
})
export class AllmentorsComponent implements OnInit {

  mentorList
  tabletoggler: boolean

  mentorName
  mentorEmail
  mentorPhone
  mentorExpYears

  constructor(private _datashare: DatashareService, private _block: BlockService, private _router: Router) { }

  ngOnInit() {

    this._datashare.getAllMentors()
      .subscribe(
        res => {
          console.log(res)
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
    console.log(data)
    this.mentorName = data.name
    this.mentorEmail = data.email
    this.mentorPhone = data.phoneNumber
    this.mentorExpYears = data.experience
  }

  blockMentor(mentor) {
    this._block.blockUnblockUser(mentor)
      .subscribe(
        res => {
          console.log('blocked')

          this._datashare.getAllMentors()
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
          // this._router.navigate(['/adminhome/blockedmentors'])
        },
        err => console.log(err)
      )
  }

}
