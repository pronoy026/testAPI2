import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatashareService } from './datashare.service';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  

  constructor( private http : HttpClient, private data: DatashareService) { }

  private _blockUnblockUserUrl = this.data.apiServer +"/adminservice/blockunblockuser/"
  
  private _allBlockedStudentsUrl = this.data.apiServer +"/adminservice/getblockedusers/3"
  private _allBlockedMentorsUrl = this.data.apiServer +"/adminservice/getblockedusers/2"


  //student
  blockUnblockUser (user) {
    return this.http.get<any>(this._blockUnblockUserUrl+user.id)
  }

  allBlockedStudents() {
    return this.http.get<any>(this._allBlockedStudentsUrl)
  }

//mentor


  allBlockedMentors () {
    return this.http.get(this._allBlockedMentorsUrl)
  }

}
