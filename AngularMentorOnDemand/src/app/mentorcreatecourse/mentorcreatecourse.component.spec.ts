import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorcreatecourseComponent } from './mentorcreatecourse.component';

describe('MentorcreatecourseComponent', () => {
  let component: MentorcreatecourseComponent;
  let fixture: ComponentFixture<MentorcreatecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorcreatecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorcreatecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
