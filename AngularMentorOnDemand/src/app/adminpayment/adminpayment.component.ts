import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-adminpayment',
  templateUrl: './adminpayment.component.html',
  styleUrls: ['./adminpayment.component.scss']
})
export class AdminpaymentComponent implements OnInit {

  payments
  tabletoggler: boolean

  constructor(private _datashare: DatashareService) { }

  ngOnInit() {
    this._datashare.getAllAdminPayments()
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
