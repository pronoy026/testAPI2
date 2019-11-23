import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentornotificationsComponent } from './mentornotifications.component';

describe('MentornotificationsComponent', () => {
  let component: MentornotificationsComponent;
  let fixture: ComponentFixture<MentornotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentornotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentornotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
