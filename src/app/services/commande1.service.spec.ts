import { TestBed } from '@angular/core/testing';

import { Commande1Service } from './commande1.service';

describe('Commande1Service', () => {
  let service: Commande1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Commande1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
