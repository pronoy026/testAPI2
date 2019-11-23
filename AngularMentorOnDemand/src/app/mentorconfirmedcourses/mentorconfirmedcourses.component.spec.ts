import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorconfirmedcoursesComponent } from './mentorconfirmedcourses.component';

describe('MentorconfirmedcoursesComponent', () => {
  let component: MentorconfirmedcoursesComponent;
  let fixture: ComponentFixture<MentorconfirmedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorconfirmedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorconfirmedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
