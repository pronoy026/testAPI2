import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DatashareService } from '../datashare.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router, public _datashare: DatashareService) { }

  ngOnInit() {

    this._datashare.userEmail = localStorage.getItem('email')
    this._datashare.userTypeStudent = false
    this._datashare.userTypeMentor = false
    this._datashare.userTypeAdmin = true
    if (localStorage.getItem('role') != '1') {
      this._router.navigate(['/signin'])
    }

  }

}
