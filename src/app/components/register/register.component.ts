import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { RegisterData } from '../../models/register.interface';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  faKey = faKey;
  faEnvelope = faEnvelope;
  faUser = faUser;
  register!: FormGroup;
  registerData: RegisterData[] = [];
  isLoading = false;

  constructor(
    private registerBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._spinner();
    this._registerFormInit();
  }

  private _registerFormInit() {
    this.register = this.registerBuilder.group({
      Username: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
    });
  }

  onSubmit() {
    const user: RegisterData = {
      Username: this.registerForm['Username'].value,
      Email: this.registerForm['Email'].value,
      Password: this.registerForm['Password'].value,
    };
    this.spinner.show();
    this.registerService
      .register(user.Username, user.Email, user.Password)
      .subscribe(
        () => {
          this.router.navigate(['/albarrmart/login']);
        },
        () => {},
        () => {
          this.spinner.hide();
        }
      );
  }

  get registerForm() {
    return this.register.controls;
  }

  private _spinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
