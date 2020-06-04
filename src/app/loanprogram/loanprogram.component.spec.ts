import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanprogramComponent } from './loanprogram.component';

describe('LoanprogramComponent', () => {
  let component: LoanprogramComponent;
  let fixture: ComponentFixture<LoanprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
