import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentwelcomeComponent } from './studentwelcome.component';

describe('StudentwelcomeComponent', () => {
  let component: StudentwelcomeComponent;
  let fixture: ComponentFixture<StudentwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
