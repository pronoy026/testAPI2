import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindividualcoursesComponent } from './adminindividualcourses.component';

describe('AdminindividualcoursesComponent', () => {
  let component: AdminindividualcoursesComponent;
  let fixture: ComponentFixture<AdminindividualcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminindividualcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminindividualcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
