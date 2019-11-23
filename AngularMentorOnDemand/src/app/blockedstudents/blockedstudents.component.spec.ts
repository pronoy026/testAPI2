import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedstudentsComponent } from './blockedstudents.component';

describe('BlockedstudentsComponent', () => {
  let component: BlockedstudentsComponent;
  let fixture: ComponentFixture<BlockedstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
