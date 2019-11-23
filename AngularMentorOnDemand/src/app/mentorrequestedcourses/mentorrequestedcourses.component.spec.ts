import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorrequestedcoursesComponent } from './mentorrequestedcourses.component';

describe('MentorrequestedcoursesComponent', () => {
  let component: MentorrequestedcoursesComponent;
  let fixture: ComponentFixture<MentorrequestedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorrequestedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorrequestedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
