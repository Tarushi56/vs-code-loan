import { TestBed } from '@angular/core/testing';

import { LoanprogramService } from './loanprogram.service';

describe('LoanprogramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanprogramService = TestBed.get(LoanprogramService);
    expect(service).toBeTruthy();
  });
});
