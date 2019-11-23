import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlistoftechs',
  templateUrl: './adminlistoftechs.component.html',
  styleUrls: ['./adminlistoftechs.component.scss']
})
export class AdminlistoftechsComponent implements OnInit {
  technologies: any;
  tabletoggler: boolean

  constructor(public _datashare: DatashareService, private _auth: AuthService, private router: Router) { }

  ngOnInit() {
    this._datashare.getAdminTechnologies()
      .subscribe(
        res => {
          console.log(res)
          this.technologies = res
          console.log(this.technologies)
          if (this.technologies.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => console.log(err)
      )
  }

  editTech(tech) {
    console.log(tech)
    this._datashare.selectedTechnologyforEdit = tech
    this.router.navigate(['/adminhome/adminedittech'])
  }

}
