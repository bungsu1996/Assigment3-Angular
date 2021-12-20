import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthData } from './auth.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  token = '';
  authStatusListener = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private localstorage: LocalStorageService
  ) {}

  isAuthenticated() {
    const promise: any = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 500);
    });
    return promise;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getToken() {
    return this.token;
  }

  login(Email: string, Password: string) {
    const authData: AuthData = { Email, Password };
    return this.http
      .post<{ token: string; userId: string }>(
        `${environment.basedUrlBackendUser}/login`,
        authData
      )
      .subscribe(
        (res) => {
          const token = res.token;
          this.token = token;
          this.loggedIn = true;
          this.authStatusListener.next(true);
          this.localstorage.setToken(res.token);
          this.router.navigate(['/albarrmart/home']);
        },
        (error) => {
          this.authStatusListener.next(false);
        }
      );
  }

  logout() {
    this.loggedIn = false;
    this.localstorage.deleteToken();
    this.router.navigate(['/albarrmart/login']);
  }
}
