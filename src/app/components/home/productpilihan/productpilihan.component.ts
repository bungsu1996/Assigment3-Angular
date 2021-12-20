import { Component, OnInit } from '@angular/core';
import { ProductPilihan } from './productpilihan.interface';
import { ProductpilihanService } from './productpilihan.service';

@Component({
  selector: 'app-productpilihan',
  templateUrl: './productpilihan.component.html',
  styleUrls: ['./productpilihan.component.css'],
})
export class ProductpilihanComponent implements OnInit {
  productPilihan: ProductPilihan[] = [];

  constructor(private productPilihanService: ProductpilihanService) {}

  ngOnInit(): void {
    this.productPilihanService
      .getProductPilihan()
      .subscribe((productPilihan) => {
        this.productPilihan = productPilihan;
      });
  }
}
