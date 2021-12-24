import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ProductService } from './product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  selectedProduct!: Product;
  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onSelect(products: Product): void {
    console.log(products);
    
    this.selectedProduct = products;
    this.router.navigateByUrl("/albarrmart/detailProduct/" + products._id)
  }

}
