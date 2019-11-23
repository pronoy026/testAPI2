import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentappliedcoursesComponent } from './studentappliedcourses.component';

describe('StudentappliedcoursesComponent', () => {
  let component: StudentappliedcoursesComponent;
  let fixture: ComponentFixture<StudentappliedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentappliedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentappliedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
