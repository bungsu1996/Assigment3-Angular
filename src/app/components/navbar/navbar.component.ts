import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faBars,
  faCartPlus,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { KeranjangService } from '../keranjang/keranjang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  cart = faCartPlus;
  login = faSignInAlt;
  registrasi = faUserPlus;
  bars = faBars;
  isDisplayHidden = false;
  userIsAuthenticated = false;
  authListenerSubscription!: Subscription;
  public totalItem: number = 0;

  constructor(
    private authService: AuthService,
    private localstorage: LocalStorageService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private cartService: KeranjangService
  ) {}

  ngOnInit(): void {
    const token = this.localstorage.getToken();
    if (token !== null) {
      this.userIsAuthenticated = true;
    } else {
      this.userIsAuthenticated = false;
    }
    this.authListenerSubscription = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    })
  }

  isLogout() {
    this.authService.logout();
    this.userIsAuthenticated = false;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.router.navigate(['/albarrmart/home']);
  }

  ngOnDestroy() {
    this.authListenerSubscription.unsubscribe();
  }

  isShow(): any {
    if (this.isDisplayHidden === true) {
      this.isDisplayHidden = false;
    } else {
      this.isDisplayHidden = true;
    }
  }

  menuColapse(): any {
    this.isDisplayHidden = false;
  }
}
