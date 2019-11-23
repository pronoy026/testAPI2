import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedmentorsComponent } from './blockedmentors.component';

describe('BlockedmentorsComponent', () => {
  let component: BlockedmentorsComponent;
  let fixture: ComponentFixture<BlockedmentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedmentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedmentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
