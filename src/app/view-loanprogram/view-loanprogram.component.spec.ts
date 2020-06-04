import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanprogramComponent } from './view-loanprogram.component';

describe('ViewLoanprogramComponent', () => {
  let component: ViewLoanprogramComponent;
  let fixture: ComponentFixture<ViewLoanprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoanprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
