import { TestBed } from '@angular/core/testing';

import { ProductpilihanService } from './productpilihan.service';

describe('ProductpilihanService', () => {
  let service: ProductpilihanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductpilihanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
