import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcompletedcoursesComponent } from './studentcompletedcourses.component';

describe('StudentcompletedcoursesComponent', () => {
  let component: StudentcompletedcoursesComponent;
  let fixture: ComponentFixture<StudentcompletedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcompletedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcompletedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
