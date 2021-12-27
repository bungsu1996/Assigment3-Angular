import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Keranjang } from 'src/app/models/cart.interface';
import { Cart } from 'src/app/models/keranjang.interface';
import { Product } from 'src/app/models/product.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class KeranjangService {
  constructor(private localStorageService: LocalStorageService) {}
  public cartItemList: Cart[] = [];
  public productItemList = new BehaviorSubject<Product[]>([]);

  getProducts() {
    return this.productItemList.asObservable();
  }

  setProducts(Item: Cart[]) {
    this.cartItemList.push(...Item);
    this.productItemList.next(Item);
  }

  addToCart(Item: Cart) {
    this.cartItemList.push(Item);
    this.productItemList.next(this.cartItemList);
    this.getTotalPrice();
    const keranjang = localStorage.getItem('keranjang');
    const newKeranjang = JSON.parse(keranjang || '{}');
    newKeranjang.items.push(Item);
    localStorage.setItem('keranjang', JSON.stringify(newKeranjang));
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += parseInt(a.Harga_Item);
    });
    return grandTotal;
  }

  removeCartItem(Item: Cart) {
    this.cartItemList.map((a: any, index: any) => {
      if (Item._id === a._id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productItemList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productItemList.next(this.cartItemList);
  }

  inisialisasi() {
    const temp_InitialItem = {
      items: [],
    };
    const InitialItem = JSON.stringify(temp_InitialItem);
    localStorage.setItem('keranjang', InitialItem);
  }
}
