import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmentorcoursesComponent } from './adminmentorcourses.component';

describe('AdminmentorcoursesComponent', () => {
  let component: AdminmentorcoursesComponent;
  let fixture: ComponentFixture<AdminmentorcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmentorcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmentorcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
