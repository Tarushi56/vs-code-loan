import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanformComponent } from './view-loanform.component';

describe('ViewLoanformComponent', () => {
  let component: ViewLoanformComponent;
  let fixture: ComponentFixture<ViewLoanformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoanformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
