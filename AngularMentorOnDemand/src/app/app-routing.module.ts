import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { SigninComponent } from './signin/signin.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth.guard';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MentorhomeComponent } from './mentorhome/mentorhome.component';
import { StudentappliedcoursesComponent } from './studentappliedcourses/studentappliedcourses.component';
import { StudentregisteredcoursesComponent } from './studentregisteredcourses/studentregisteredcourses.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { AllmentorsComponent } from './allmentors/allmentors.component';
import { BlockedstudentsComponent } from './blockedstudents/blockedstudents.component';
import { BlockedmentorsComponent } from './blockedmentors/blockedmentors.component';
import { StudentpaymentComponent } from './studentpayment/studentpayment.component';
import { StudenteditprofileComponent } from './studenteditprofile/studenteditprofile.component';
import { MentorregisteredcoursesComponent } from './mentorregisteredcourses/mentorregisteredcourses.component';
import { MentorrequestedcoursesComponent } from './mentorrequestedcourses/mentorrequestedcourses.component';
import { MentoreditprofileComponent } from './mentoreditprofile/mentoreditprofile.component';
import { MentorcompletedcoursesComponent } from './mentorcompletedcourses/mentorcompletedcourses.component';
import { StudentcompletedcoursesComponent } from './studentcompletedcourses/studentcompletedcourses.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';
import { MentortechnologiesComponent } from './mentortechnologies/mentortechnologies.component';
import { MentorcreatecourseComponent } from './mentorcreatecourse/mentorcreatecourse.component';
import { MentorrejectedcoursesComponent } from './mentorrejectedcourses/mentorrejectedcourses.component';
import { StudentrejectedcoursesComponent } from './studentrejectedcourses/studentrejectedcourses.component';
import { MentorconfirmedcoursesComponent } from './mentorconfirmedcourses/mentorconfirmedcourses.component';
import { StudentconfirmedcoursesComponent } from './studentconfirmedcourses/studentconfirmedcourses.component';
import { StudentnotificationsComponent } from './studentnotifications/studentnotifications.component';
import { MentornotificationsComponent } from './mentornotifications/mentornotifications.component';
import { MentorpaymentComponent } from './mentorpayment/mentorpayment.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { AdminlistoftechsComponent } from './adminlistoftechs/adminlistoftechs.component';
import { AdminmentorcoursesComponent } from './adminmentorcourses/adminmentorcourses.component';
import { AdminindividualcoursesComponent } from './adminindividualcourses/adminindividualcourses.component';
import { AdminedittechComponent } from './adminedittech/adminedittech.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BannerComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'studentsignup', component: StudentsignupComponent },
  { path: 'mentorsignup', component: MentorsignupComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'search', component: SearchComponent },
  { path: 'studentpayment', component: StudentpaymentComponent },
  {
    path: 'adminhome',
    component: AdminhomeComponent,
    children: [
      { path: 'allstudents', component: AllstudentsComponent },
      { path: 'allmentors', component: AllmentorsComponent },
      { path: 'addtechnology', component: AddtechnologyComponent },
      { path: 'blockedstudents', component: BlockedstudentsComponent },
      { path: 'blockedmentors', component: BlockedmentorsComponent },
      { path: 'adminpayment', component: AdminpaymentComponent},
      {
        path: 'adminlistoftechs', component: AdminlistoftechsComponent
      },
      {
        path: 'adminmentorcourses', component: AdminmentorcoursesComponent
      },
      {
        path: 'adminindividualcourses', component: AdminindividualcoursesComponent
      },
      {
        path: 'adminedittech', component: AdminedittechComponent
      }
    ],
    canActivate: [AuthGuard]
  },

  {
    path: 'mentorhome', component: MentorhomeComponent,
    children: [
      {
        path: 'mentorregisteredcourses', component: MentorregisteredcoursesComponent
      },
      {
        path: 'mentorrequestedcourses', component: MentorrequestedcoursesComponent
      },
      {
        path: 'mentoreditprofile', component: MentoreditprofileComponent
      },
      {
        path : 'mentorcompletedcourses', component : MentorcompletedcoursesComponent
      },
      {
        path : 'mentorrejectedcourses', component : MentorrejectedcoursesComponent
      },
      { path: 'mentortechnologies', component : MentortechnologiesComponent},
      { path: 'mentorcreatecourse', component: MentorcreatecourseComponent},
      {
        path: 'mentorconfirmedcourses', component: MentorconfirmedcoursesComponent
      },
      {
        path: 'mentornotifications', component: MentornotificationsComponent
      },
      {
        path: 'mentorpayment', component: MentorpaymentComponent
      }
    ],
    canActivate: [AuthGuard]
  },

  {
    path: 'studenthome',
    component: TestComponent,
    children: [
      {
        path: 'studentappliedcourses', component: StudentappliedcoursesComponent
      },
      {
        path: 'studentregisteredcourses', component: StudentregisteredcoursesComponent
      },
      {
        path: 'studenteditprofile', component: StudenteditprofileComponent
      },
      {
        path : 'studentcompletedcourses', component: StudentcompletedcoursesComponent
      },
      {
        path : 'studentrejectedcourses', component: StudentrejectedcoursesComponent
      },
      {
        path: 'studentconfirmedcourses', component: StudentconfirmedcoursesComponent
      },
      {
        path : 'courseoverview', component: CourseOverviewComponent
      },
      {
        path: 'studentnotifications', component: StudentnotificationsComponent
      }

    ],
    canActivate: [AuthGuard]
  }, // Can route only after logging in
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
