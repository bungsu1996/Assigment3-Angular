import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css'],
})
export class DetailproductComponent implements OnInit {
  @Input()
  product: Product = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService
        .getProductsDetail(params['id'])
        .subscribe((result: any) => {
          this.product = result.Detail_Item;
          console.log("PRODUCT : ", this.product)
        });
    });
  }
}
