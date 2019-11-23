import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistoftechsComponent } from './adminlistoftechs.component';

describe('AdminlistoftechsComponent', () => {
  let component: AdminlistoftechsComponent;
  let fixture: ComponentFixture<AdminlistoftechsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlistoftechsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistoftechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
