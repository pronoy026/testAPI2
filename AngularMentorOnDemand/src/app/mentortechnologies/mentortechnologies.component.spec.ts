import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentortechnologiesComponent } from './mentortechnologies.component';

describe('MentortechnologiesComponent', () => {
  let component: MentortechnologiesComponent;
  let fixture: ComponentFixture<MentortechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentortechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentortechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
