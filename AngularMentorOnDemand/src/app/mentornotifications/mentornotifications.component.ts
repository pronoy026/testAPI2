import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-mentornotifications',
  templateUrl: './mentornotifications.component.html',
  styleUrls: ['./mentornotifications.component.scss']
})
export class MentornotificationsComponent implements OnInit {

  notifications
  tabletoggler: boolean

  constructor(private _notification: NotificationService, public data: DatashareService) { }

  ngOnInit() {
    this.getNotifications()
  }

  getNotifications() {
    let email = localStorage.getItem('email')
    this.data.getMentorNotifications(email)
      .subscribe(
        res => {
          this.notifications = res
          this.data.notiMentor = this.notifications.length
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
    this.data.deleteMentorNotifications(email)
      .subscribe(
        res => {
          this.getNotifications()
        },
        err => console.log(err)
      )
  }

  markAsRead(notification) {
    this.data.deleteMentorNotificationById(notification.notiId)
      .subscribe(
        res => {
          this.getNotifications()
        },
        err => console.log(err)
      )
  }

}
