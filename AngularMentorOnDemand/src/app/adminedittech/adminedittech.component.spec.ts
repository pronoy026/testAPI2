import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminedittechComponent } from './adminedittech.component';

describe('AdminedittechComponent', () => {
  let component: AdminedittechComponent;
  let fixture: ComponentFixture<AdminedittechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminedittechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminedittechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
