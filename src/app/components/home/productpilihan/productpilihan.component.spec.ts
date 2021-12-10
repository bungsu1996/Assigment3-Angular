import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpilihanComponent } from './productpilihan.component';

describe('ProductpilihanComponent', () => {
  let component: ProductpilihanComponent;
  let fixture: ComponentFixture<ProductpilihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductpilihanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpilihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
