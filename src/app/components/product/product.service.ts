import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.interface';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/albarrmart/listItem');
  }
}
