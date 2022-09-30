import { TestBed } from '@angular/core/testing';

import { OtroService } from './otro.service';

describe('OtroService', () => {
  let service: OtroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
