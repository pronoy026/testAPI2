import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrejectedcoursesComponent } from './studentrejectedcourses.component';

describe('StudentrejectedcoursesComponent', () => {
  let component: StudentrejectedcoursesComponent;
  let fixture: ComponentFixture<StudentrejectedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrejectedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrejectedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
