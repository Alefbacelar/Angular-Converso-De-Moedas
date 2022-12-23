import { TestBed } from '@angular/core/testing';

import { ConversoService } from './converso.service';

describe('ConversoService', () => {
  let service: ConversoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
