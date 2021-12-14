import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productpilihan2Component } from './productpilihan2.component';

describe('Productpilihan2Component', () => {
  let component: Productpilihan2Component;
  let fixture: ComponentFixture<Productpilihan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productpilihan2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productpilihan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
