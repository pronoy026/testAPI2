import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorcompletedcoursesComponent } from './mentorcompletedcourses.component';

describe('MentorcompletedcoursesComponent', () => {
  let component: MentorcompletedcoursesComponent;
  let fixture: ComponentFixture<MentorcompletedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorcompletedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorcompletedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
