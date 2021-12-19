import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductPilihan } from './productpilihan.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductpilihanService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000';

  getProductPilihan(): Observable<ProductPilihan[]> {
    return this.http.get<ProductPilihan[]>(this.url + '/albarrmart/listItem');
  }
}
