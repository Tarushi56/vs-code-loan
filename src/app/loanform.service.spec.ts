import { TestBed } from '@angular/core/testing';

import { LoanformService } from './loanform.service';

describe('LoanformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanformService = TestBed.get(LoanformService);
    expect(service).toBeTruthy();
  });
});
