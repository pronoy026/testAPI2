import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  public apiServer = "https://localhost:44309"

  userEmail = localStorage.getItem('email')
  userRole = localStorage.getItem('role')
  userTypeStudent: boolean
  userTypeMentor: boolean
  userTypeAdmin: boolean
  accType: string
  userName: string
  techData: any

  selectedCourseForPayment
  selectedTechnologyforEdit

  courseOverviewData

  notiMentor
  notiStudent


  private allMentorCoursesUrl = this.apiServer + "/adminservice/getallcourses"
  private _getAllStudentsUrl = this.apiServer + "/adminservice/getactiveusers/3"
  private _getAllCoursesUrl = "http://localhost:3000/api/allCourses"
  private _getAllMentorsUrl = this.apiServer + "/adminservice/getactiveusers/2"

  private _registerTechUrl = this.apiServer + "/adminservice/registertech"
  private _getAllTechsUrl = this.apiServer + "/mentorservice/gettechs"
  private _createCourseUrl = this.apiServer + "/mentorservice/creatementorskill"
  private _MentorSkillExistsUrl = this.apiServer + "/mentorservice/mentorskillexists"

  private _appliedCourseUrl = this.apiServer + "/studentservice/applyforcourse"
  private _studentRegisterCourseUrl = this.apiServer + "/studentservice/registercourse"
  private _getStudentAllAppliedCoursesUrl = this.apiServer + "/studentservice/getappliedcourses/"
  private _getStudentAllRegisteredCoursesUrl = this.apiServer + "/studentservice/getregisteredcourses/"
  private _getStudentAllCompletedCoursesUrl = this.apiServer + "/studentservice/getcompletedcourses/"
  private _getStudentAllRejectedCoursesUrl = this.apiServer + "/studentservice/getrejectedcourses/"
  private _getStudentAllConfirmedCoursesUrl = this.apiServer + "/studentservice/getconfirmedcourses/"
  private _studentCourseCompletionStatusUpdateUrl = this.apiServer + "/studentservice/coursecompletionstatusupdate"
  private _studentCourseCompletionUpdateUrl = this.apiServer + "/studentservice/coursecompletionupdate"

  private _getMentorAllAppliedCoursesUrl = this.apiServer + "/mentorservice/getappliedcourses/"
  private _getMentorAllRegisteredCoursesUrl = this.apiServer + "/mentorservice/getregisteredcourses/"
  private _getMentorAllCompletedCoursesUrl = this.apiServer + "/mentorservice/getcompletedcourses/"
  private _getMentorAllRejectedCoursesUrl = this.apiServer + "/mentorservice/getrejectedcourses/"
  private _getMentorAllConfirmedCoursesUrl = this.apiServer + "/mentorservice/getconfirmedcourses/"
  private _mentorAcceptCourseUrl = this.apiServer + "/mentorservice/acceptcourse"
  private _mentorRejectCourseUrl = this.apiServer + "/mentorservice/rejectcourse"

  private _checkCourseUrl = this.apiServer + "/studentservice/checkcourse"
  private _searchUrl = this.apiServer + "/adminservice/getsearchdata/"

  constructor(private http: HttpClient) { }

  registerTech(tech) {
    return this.http.post<any>(this._registerTechUrl, tech)
  }

  getMentorTechs() {
    return this.http.get<any>(this._getAllTechsUrl)
  }

  createMentorCourse(course) {
    return this.http.post<any>(this._createCourseUrl, course)
  }

  mentorSkillExists(data) {
    return this.http.post<any>(this._MentorSkillExistsUrl, data)
  }

  //for courses tab in general
  getAllMentorCourses() {
    return this.http.get<any>(this.allMentorCoursesUrl)
  }


  //for adminhome
  getAllStudents() {
    return this.http.get<any>(this._getAllStudentsUrl)
  }

  getAllMentors() {
    return this.http.get<any>(this._getAllMentorsUrl)
  }
  getAllAdminCourses() {
    return this.http.get<any>(this._getAllCoursesUrl)
  }


  ////////////////////////student course api calls
  appliedCourse(course) {
    return this.http.post<any>(this._appliedCourseUrl, course)
  }

  studentRegisterCourse(course) {
    return this.http.post<any>(this._studentRegisterCourseUrl, course)
  }

  getStudentAllAppliedCourses(data) {
    return this.http.get<any>(this._getStudentAllAppliedCoursesUrl+data)
  }
  getStudentAllRegisteredCourses(data) {
    return this.http.get<any>(this._getStudentAllRegisteredCoursesUrl+data)
  }

  getStudentAllCompletedCourses(data) {
    return this.http.get<any>(this._getStudentAllCompletedCoursesUrl+data)
  }

  getStudentAllRejectedCourses(data) {
    return this.http.get<any>(this._getStudentAllRejectedCoursesUrl+data)
  }

  getStudentAllConfirmedCourses(data) {
    return this.http.get<any>(this._getStudentAllConfirmedCoursesUrl+data)
  }

  courseCompletionStatusUpdate(course) {
    return this.http.post<any>(this._studentCourseCompletionStatusUpdateUrl, course)
  }

  courseCompletionUpdate(course) {
    return this.http.post<any>(this._studentCourseCompletionUpdateUrl, course)
  }

  ///////////////////////mentor course api calls
  mentorAcceptCourse(course) {
    return this.http.post<any>(this._mentorAcceptCourseUrl, course)
  }

  mentorRejectCourse(course) {
    return this.http.post<any>(this._mentorRejectCourseUrl, course)
  }

  getMentorAllAppliedCourses(data) {
    return this.http.get<any>(this._getMentorAllAppliedCoursesUrl + data)
  }

  getMentorAllRegisteredCourses(data) {
    return this.http.get<any>(this._getMentorAllRegisteredCoursesUrl + data)
  }

  getMentorAllRejectedCourses(data) {
    return this.http.get<any>(this._getMentorAllRejectedCoursesUrl + data)
  }

  getMentorAllCompletedCourses(data) {
    return this.http.get<any>(this._getMentorAllCompletedCoursesUrl + data)
  }

  getMentorAllConfirmedCourses(data) {
    return this.http.get<any>(this._getMentorAllConfirmedCoursesUrl + data)
  }


  //
  checkCourse(data) {
    return this.http.post<any>(this._checkCourseUrl, data)
  }

  search(data) {
    return this.http.get<any>(this._searchUrl+data)
  }

  private _getMentorNotificationsUrl = this.apiServer + '/mentorservice/getnotifications/'
  private _deleteMentorNotificationsUrl = this.apiServer + '/mentorservice/deletenotifications/'
  private _deleteMentorNotificationByIdUrl = this.apiServer + '/mentorservice/deletenotificationbyid/'


  private _getStudentNotificationsUrl = this.apiServer + '/studentservice/getnotifications/'
  private _deleteStudentNotificationsUrl = this.apiServer + '/studentservice/deletenotifications/'
  private _deleteStudentNotificationByIdUrl = this.apiServer + '/studentservice/deletenotificationbyid/'

  getMentorNotifications(email) {
    return this.http.get<any>(this._getMentorNotificationsUrl+email)
  }

  deleteMentorNotifications(email) {
    return this.http.get<any>(this._deleteMentorNotificationsUrl+email)
  }

  deleteMentorNotificationById(id) {
    return this.http.get<any>(this._deleteMentorNotificationByIdUrl+id)
  }


  getStudentNotifications(email) {
    return this.http.get<any>(this._getStudentNotificationsUrl+email)
  }

  deleteStudentNotifications(email) {
    return this.http.get<any>(this._deleteStudentNotificationsUrl+email)
  }

  deleteStudentNotificationById(id) {
    return this.http.get<any>(this._deleteStudentNotificationByIdUrl+id)
  }

  
  private _getAllAdminPaymentsUrl = this.apiServer + '/adminservice/getallpayments'
  getAllAdminPayments() {
    return this.http.get<any>(this._getAllAdminPaymentsUrl)
  }

  private _getAllmentorPaymentsUrl = this.apiServer + '/mentorservice/getpaymentrecords/'
  getAllMentorPayments(email) {
    return this.http.get<any>(this._getAllmentorPaymentsUrl+email)
  }

  private rateCourseUrl = this.apiServer + '/studentservice/ratecourse'
  rateCourse(course) {
    return this.http.post<any>(this.rateCourseUrl, course)
  }

  private _getAdminTecnologiesUrl = this.apiServer + '/adminservice/getalltechs'
  getAdminTechnologies() {
    return this.http.get<any>(this._getAdminTecnologiesUrl)
  }

  private _updateTecnologyUrl = this.apiServer + '/adminservice/updatetech'
  updateAdminTech(tech) {
    return this.http.post<any>(this._updateTecnologyUrl, tech)
  }

  private _getAdminIndividualCoursesUrl = this.apiServer + '/adminservice/getindividualcourses'
  getAdminIndividualCourses() {
    return this.http.get<any>(this._getAdminIndividualCoursesUrl)
  }

  //coursesinfo
  private _getStudentCoursesInfoUrl = this.apiServer + '/studentservice/courseinfo/'
  getStudentCoursesInfo(email) {
    return this.http.get<any>(this._getStudentCoursesInfoUrl+email)
  }

  private _getMentorCoursesInfoUrl = this.apiServer + '/mentorservice/courseinfo/'
  getMentorCoursesInfo(email) {
    return this.http.get<any>(this._getMentorCoursesInfoUrl+email)
  }

  //userinfo
  private _getStudentInfoUrl = this.apiServer + '/studentservice/studentinfo/'
  getStudentInfo(email) {
    return this.http.get<any>(this._getStudentInfoUrl+email)
  }

  private _getMentorInfoUrl = this.apiServer + '/mentorservice/mentorinfo/'
  getMentorInfo(email) {
    return this.http.get<any>(this._getMentorInfoUrl+email)
  }

}
