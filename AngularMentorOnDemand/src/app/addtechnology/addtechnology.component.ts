import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtechnology',
  templateUrl: './addtechnology.component.html',
  styleUrls: ['./addtechnology.component.scss']
})
export class AddtechnologyComponent implements OnInit {

  TechData = { AdminEmail : localStorage.getItem('email')}

  constructor( private data: DatashareService, private router: Router) { }

  ngOnInit() {
  }

  registerTechnology() {
    console.log(this.TechData)
    this.data.registerTech(this.TechData)
        .subscribe(
          res => {
            console.log('tech registered')
            this.router.navigate(['/adminhome'])
          },
          err => console.log(err)
        )
  }

}
