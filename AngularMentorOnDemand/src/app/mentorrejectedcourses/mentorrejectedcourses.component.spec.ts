import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorrejectedcoursesComponent } from './mentorrejectedcourses.component';

describe('MentorrejectedcoursesComponent', () => {
  let component: MentorrejectedcoursesComponent;
  let fixture: ComponentFixture<MentorrejectedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorrejectedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorrejectedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
