import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-mentorprofile',
  templateUrl: './mentorprofile.component.html',
  styleUrls: ['./mentorprofile.component.scss']
})
export class MentorprofileComponent implements OnInit {
  mentorinfo = {}
  constructor(private data : DatashareService) { }

  ngOnInit() {
    this.getMentorInfo()
  }
  getMentorInfo() {
    let email = localStorage.getItem('email')
    this.data.getMentorInfo(email)
        .subscribe(
          res => {
            console.log(res)
              this.mentorinfo = res
          },
          err =>{
            console.log(err)
          }
        )
   }

}
