import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductPilihan } from './productpilihan.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductpilihanService {
  constructor(private http: HttpClient) {}

  getProductPilihan(): Observable<ProductPilihan[]>{
    return this.http.get<ProductPilihan[]>(`${environment.basedUrlBackendProductPilihan}`);
  }
}
