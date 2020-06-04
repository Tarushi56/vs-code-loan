import { TestBed } from '@angular/core/testing';

import { ViewcustomerService } from './viewcustomer.service';

describe('ViewcustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewcustomerService = TestBed.get(ViewcustomerService);
    expect(service).toBeTruthy();
  });
});
