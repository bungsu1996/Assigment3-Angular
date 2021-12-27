import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, flatMap, Observable } from 'rxjs';
import { Product } from '../../models/product.interface';
import { environment } from 'src/environments/environment';
import { ProductDetail } from 'src/app/models/product-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: Product[] = [];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${environment.basedUrlBackendProductList}`
    );
  }

  private URLdetailProduct = `${environment.basedUrlBackendDetailProduct}`;
  getProductsDetail(Id_Item: any): Observable<Product> {
    return this.http.get<Product>(this.URLdetailProduct + Id_Item)
  }

 
}
