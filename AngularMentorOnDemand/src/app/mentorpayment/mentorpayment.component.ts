import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-mentorpayment',
  templateUrl: './mentorpayment.component.html',
  styleUrls: ['./mentorpayment.component.scss']
})
export class MentorpaymentComponent implements OnInit {

  payments
  tabletoggler: boolean

  constructor(private _datashare: DatashareService) { }

  ngOnInit() {
    let email = localStorage.getItem('email')
    this._datashare.getAllMentorPayments(email)
      .subscribe(
        res => {
          console.log(res)
          this.payments = res
          if (this.payments.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )
  }

}
