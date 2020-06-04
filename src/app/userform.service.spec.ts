import { TestBed } from '@angular/core/testing';

import { UserformService } from './userform.service';

describe('UserformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserformService = TestBed.get(UserformService);
    expect(service).toBeTruthy();
  });
});
