import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorregisteredcoursesComponent } from './mentorregisteredcourses.component';

describe('MentorregisteredcoursesComponent', () => {
  let component: MentorregisteredcoursesComponent;
  let fixture: ComponentFixture<MentorregisteredcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorregisteredcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorregisteredcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
