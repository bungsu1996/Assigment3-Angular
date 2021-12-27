import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { Cart } from 'src/app/models/keranjang.interface';
import { Product } from 'src/app/models/product.interface';
import { KeranjangService } from './keranjang.service';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.component.html',
  styleUrls: ['./keranjang.component.css'],
})
export class KeranjangComponent implements OnInit {
  trash = faTrashAlt;
  public products: Product[] = [];
  public cart: Cart[] = []
  public grandTotal!: number;

  constructor(
    private spinner: NgxSpinnerService,
    private cartService: KeranjangService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  removeProduct(product: any){
    this.cartService.removeCartItem(product);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }
}
