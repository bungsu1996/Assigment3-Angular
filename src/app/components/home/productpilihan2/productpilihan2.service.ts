import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductPilihan2 } from './productpilihan2.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductpilihanService {
  constructor(private http: HttpClient) {}

  getProductPilihan2(): Observable<ProductPilihan2[]> {
    return this.http.get<ProductPilihan2[]>(`${environment.basedUrlBackendProductPilihan2}`);
  }
}
