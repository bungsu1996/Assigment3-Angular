import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterData } from './register.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(Username: string, Email: string, Password: string) {
    const registerData: RegisterData = { Username, Email, Password };
    return this.http.post<{ Message: string }>(
      `${environment.basedUrlBackendUser}/register`,
      registerData
    );
  }
}
