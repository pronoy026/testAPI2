import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentconfirmedcoursesComponent } from './studentconfirmedcourses.component';

describe('StudentconfirmedcoursesComponent', () => {
  let component: StudentconfirmedcoursesComponent;
  let fixture: ComponentFixture<StudentconfirmedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentconfirmedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentconfirmedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
