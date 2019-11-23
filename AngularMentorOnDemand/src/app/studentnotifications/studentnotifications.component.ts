import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-studentnotifications',
  templateUrl: './studentnotifications.component.html',
  styleUrls: ['./studentnotifications.component.scss']
})
export class StudentnotificationsComponent implements OnInit {

  notifications
  tabletoggler: boolean

  constructor(public data: DatashareService) { }

  ngOnInit() {
    this.getNotifications()
  }

  getNotifications() {
    let email = localStorage.getItem('email')
    this.data.getStudentNotifications(email)
      .subscribe(
        res => {
          this.notifications = res
          this.data.notiStudent = this.notifications.length
          if (this.notifications.length == 0) {
            this.tabletoggler = false
          } else {
            this.tabletoggler = true
          }
        },
        err => {
          console.log(err)
        }
      )
  }

  markAllAsRead() {
    let email = localStorage.getItem('email')
    this.data.deleteStudentNotifications(email)
      .subscribe(
        res => {
          this.getNotifications()
        },
        err => console.log(err)
      )
  }

  markAsRead(notification) {
    this.data.deleteStudentNotificationById(notification.notiId)
      .subscribe(
        res => {
          this.getNotifications()
        },
        err => console.log(err)
      )
  }
}
