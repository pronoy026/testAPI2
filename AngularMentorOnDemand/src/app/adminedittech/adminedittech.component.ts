import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-adminedittech',
  templateUrl: './adminedittech.component.html',
  styleUrls: ['./adminedittech.component.scss']
})
export class AdminedittechComponent implements OnInit {
  tabletoggler
  TechData = {
    Id :1,
    Name : 'string',
    AdminEmail : 'string',
    Description : 'string',
    Duration : 1,
    Fee : 1,
    Commission : 1,
    ImageUrl : 'string',
    IsActive : true
  }
  constructor(private router: Router, public data: DatashareService) { }

  ngOnInit() {
    if (this.data.selectedTechnologyforEdit === undefined) {
      this.tabletoggler = false
    }
    else {
      this.tabletoggler = true

      this.TechData.Id = this.data.selectedTechnologyforEdit.id
      this.TechData.Name = this.data.selectedTechnologyforEdit.name
      this.TechData.AdminEmail = this.data.selectedTechnologyforEdit.adminEmail
      this.TechData.Description = this.data.selectedTechnologyforEdit.description
      this.TechData.Duration = this.data.selectedTechnologyforEdit.duration
      this.TechData.Fee = this.data.selectedTechnologyforEdit.fee
      this.TechData.Commission = this.data.selectedTechnologyforEdit.commission
      this.TechData.ImageUrl = this.data.selectedTechnologyforEdit.imageUrl

      console.log(this.TechData)
    }
  }

  updateTech() {
    this.data.updateAdminTech(this.TechData)
        .subscribe(
          res => {
            alert('Technology data updated successfully.')
            this.router.navigate(['/adminhome/adminlistoftechs'])
          },
          err => {
            alert('Error! Technology data not updated.')
          }
        )
  }

}
