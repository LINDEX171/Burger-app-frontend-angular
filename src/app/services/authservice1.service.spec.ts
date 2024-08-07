import { TestBed } from '@angular/core/testing';

import { Authservice1Service } from './authservice1.service';

describe('Authservice1Service', () => {
  let service: Authservice1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authservice1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
