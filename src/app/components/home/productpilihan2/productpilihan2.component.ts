import { Component, OnInit } from '@angular/core';
import { ProductPilihan2 } from './productpilihan2.interface';
import { ProductpilihanService } from './productpilihan2.service';

@Component({
  selector: 'app-productpilihan2',
  templateUrl: './productpilihan2.component.html',
  styleUrls: ['./productpilihan2.component.css'],
})
export class Productpilihan2Component implements OnInit {
  productPilihan: ProductPilihan2[] = [];

  constructor(private productPilihanService: ProductpilihanService) {}

  ngOnInit(): void {
    this.productPilihanService
      .getProductPilihan2()
      .subscribe((productPilihan) => {
        this.productPilihan = productPilihan;
      });
  }
}
