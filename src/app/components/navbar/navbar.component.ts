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

  constructor(private authService: AuthService, private localstorage : LocalStorageService) {}

  ngOnInit(): void {
  
    const token = this.localstorage.getToken()
    console.log("Token", token)
    if(token !== null){
      this.userIsAuthenticated = true;
    } else {
      this.userIsAuthenticated = false;
    }
    this.authListenerSubscription = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  isLogout(){
    this.authService.logout()
    
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
