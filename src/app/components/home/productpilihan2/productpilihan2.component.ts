import { Component, OnInit } from '@angular/core';
import { ProductPilihan } from './productpilihan.interface';
import { ProductpilihanService } from './productpilihan.service';

@Component({
  selector: 'app-productpilihan2',
  templateUrl: './productpilihan2.component.html',
  styleUrls: ['./productpilihan2.component.css'],
})
export class Productpilihan2Component implements OnInit {
  productPilihan: ProductPilihan[] = [];

  constructor(private productPilihanService: ProductpilihanService) {}

  ngOnInit(): void {
    this.productPilihanService
      .getProductPilihan()
      .subscribe((productPilihan) => {
        this.productPilihan = productPilihan;
        productPilihan.forEach(this.eachProduct);
        console.log(productPilihan);
      });
  }

  eachProduct(item: any, index: any, arr: any) {
    if (index > 5) {
      arr.splice(index);
    }
  }
}
