import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorwelcomeComponent } from './mentorwelcome.component';

describe('MentorwelcomeComponent', () => {
  let component: MentorwelcomeComponent;
  let fixture: ComponentFixture<MentorwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
