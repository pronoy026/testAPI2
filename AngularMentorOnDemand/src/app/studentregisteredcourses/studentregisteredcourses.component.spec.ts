import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregisteredcoursesComponent } from './studentregisteredcourses.component';

describe('StudentregisteredcoursesComponent', () => {
  let component: StudentregisteredcoursesComponent;
  let fixture: ComponentFixture<StudentregisteredcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentregisteredcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentregisteredcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
