import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthService } from './auth.service';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { DatashareService } from './datashare.service';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MentorhomeComponent } from './mentorhome/mentorhome.component';
import { StudentappliedcoursesComponent } from './studentappliedcourses/studentappliedcourses.component';
import { StudentregisteredcoursesComponent } from './studentregisteredcourses/studentregisteredcourses.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { AllmentorsComponent } from './allmentors/allmentors.component';
import { BlockService } from './block.service';
import { BlockedstudentsComponent } from './blockedstudents/blockedstudents.component';
import { BlockedmentorsComponent } from './blockedmentors/blockedmentors.component';
import { StudentpaymentComponent } from './studentpayment/studentpayment.component';
import { MentorregisteredcoursesComponent } from './mentorregisteredcourses/mentorregisteredcourses.component';
import { MentorrequestedcoursesComponent } from './mentorrequestedcourses/mentorrequestedcourses.component';
import { MentoreditprofileComponent } from './mentoreditprofile/mentoreditprofile.component';
import { StudenteditprofileComponent } from './studenteditprofile/studenteditprofile.component';
import { StudentcompletedcoursesComponent } from './studentcompletedcourses/studentcompletedcourses.component';
import { MentorcompletedcoursesComponent } from './mentorcompletedcourses/mentorcompletedcourses.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';
import { MentortechnologiesComponent } from './mentortechnologies/mentortechnologies.component';
import { MentorcreatecourseComponent } from './mentorcreatecourse/mentorcreatecourse.component';
import { MentorrejectedcoursesComponent } from './mentorrejectedcourses/mentorrejectedcourses.component';
import { StudentrejectedcoursesComponent } from './studentrejectedcourses/studentrejectedcourses.component';
import { StudentconfirmedcoursesComponent } from './studentconfirmedcourses/studentconfirmedcourses.component';
import { MentorconfirmedcoursesComponent } from './mentorconfirmedcourses/mentorconfirmedcourses.component';
import { MentornotificationsComponent } from './mentornotifications/mentornotifications.component';
import { StudentnotificationsComponent } from './studentnotifications/studentnotifications.component';
import { NotificationService } from './notification.service';
import { MentorpaymentComponent } from './mentorpayment/mentorpayment.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { AdminlistoftechsComponent } from './adminlistoftechs/adminlistoftechs.component';
import { AdminmentorcoursesComponent } from './adminmentorcourses/adminmentorcourses.component';
import { AdminindividualcoursesComponent } from './adminindividualcourses/adminindividualcourses.component';
import { AdminedittechComponent } from './adminedittech/adminedittech.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    MentorsignupComponent,
    StudentsignupComponent,
    AboutusComponent,
    CoursesComponent,
    ContactusComponent,
    SearchComponent,
    PagenotfoundComponent,
    TestComponent,
    AdminhomeComponent,
    MentorhomeComponent,
    StudentappliedcoursesComponent,
    StudentregisteredcoursesComponent,
    AllstudentsComponent,
    AllmentorsComponent,
    BlockedstudentsComponent,
    BlockedmentorsComponent,
    StudentpaymentComponent,
    MentorregisteredcoursesComponent,
    MentorrequestedcoursesComponent,
    MentoreditprofileComponent,
    StudenteditprofileComponent,
    StudentcompletedcoursesComponent,
    MentorcompletedcoursesComponent,
    CourseOverviewComponent,
    AddtechnologyComponent,
    MentortechnologiesComponent,
    MentorcreatecourseComponent,
    MentorrejectedcoursesComponent,
    StudentrejectedcoursesComponent,
    StudentconfirmedcoursesComponent,
    MentorconfirmedcoursesComponent,
    MentornotificationsComponent,
    StudentnotificationsComponent,
    MentorpaymentComponent,
    AdminpaymentComponent,
    AdminlistoftechsComponent,
    AdminmentorcoursesComponent,
    AdminindividualcoursesComponent,
    AdminedittechComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, DatashareService, BlockService, NotificationService,
  { provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorService, multi : true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
