import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmentorsComponent } from './allmentors.component';

describe('AllmentorsComponent', () => {
  let component: AllmentorsComponent;
  let fixture: ComponentFixture<AllmentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
