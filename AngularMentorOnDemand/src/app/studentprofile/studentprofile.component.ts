import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.scss']
})
export class StudentprofileComponent implements OnInit {

  studentinfo = {}
  constructor(private data : DatashareService) { }

  ngOnInit() {
    this.getStudentInfo()
  }
  getStudentInfo() {
    let email = localStorage.getItem('email')
    this.data.getStudentInfo(email)
        .subscribe(
          res => {
            console.log(res)
              this.studentinfo = res
          },
          err =>{
            console.log(err)
          }
        )
   }
}
