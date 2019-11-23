import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatashareService } from './datashare.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient, private data: DatashareService) { }

  private _getMentorNotificationsUrl = this.data.apiServer + '/api/mentor/getnotifications/'
  private _getStudentNotificationsUrl = this.data.apiServer + '/api/student/getnotifications/'

  getMentorNotifications(email) {
    return this.http.get<any>(this._getMentorNotificationsUrl+email)
  }

  getStudentNotifications(email) {
    return this.http.get<any>(this._getStudentNotificationsUrl+email)
  }
}
