import { Component, OnInit } from '@angular/core';
import { faBars, faCartPlus, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart = faCartPlus;
  login = faSignInAlt;
  registrasi = faUserPlus;
  bars = faBars;
  isDisplayHidden = false;

  constructor() { }

  ngOnInit(): void {
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
