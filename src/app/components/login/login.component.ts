import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faKey = faKey;
  userIsAuthenticated = false;

  constructor(private authService: AuthService, private location: Location, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.authService.getAuthStatusListener().subscribe((isAuthenticated) => {
      this.userIsAuthenticated = isAuthenticated
    })
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value.Email, form.value.Password);
  }

  goBack(): void{
    this.location.back();
  }


}
