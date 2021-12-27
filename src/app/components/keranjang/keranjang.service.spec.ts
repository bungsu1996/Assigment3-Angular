import { TestBed } from '@angular/core/testing';

import { KeranjangService } from './keranjang.service';

describe('KeranjangService', () => {
  let service: KeranjangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeranjangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
