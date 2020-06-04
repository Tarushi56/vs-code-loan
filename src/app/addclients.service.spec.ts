import { TestBed } from '@angular/core/testing';

import { AddclientsService } from './addclients.service';

describe('AddclientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddclientsService = TestBed.get(AddclientsService);
    expect(service).toBeTruthy();
  });
});
