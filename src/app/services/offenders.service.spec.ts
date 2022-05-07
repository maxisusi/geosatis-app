import { TestBed } from '@angular/core/testing';

import { OffendersService } from './offenders.service';

describe('OffendersService', () => {
  let service: OffendersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffendersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
