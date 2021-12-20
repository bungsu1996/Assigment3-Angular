import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { RegisterData } from './register.interface';
import { RegisterService } from './register.service';

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
  forbiddenEmails = ['@test.com', '123@gmail.com', ''];
  registerData: RegisterData[] = [];

  constructor(
    private registerBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.register = this.registerBuilder.group({
      username: [null, Validators.required],
      email: [
        null,
        [Validators.required, Validators.email, this.forbiddenEmail.bind(this)],
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
    // this.registerService.register.subscribe((data) => {
    //   this.registerData = data;
    // })
  }

  isSubmit() {
    console.log(this.register);
  }

  forbiddenEmail(control: FormControl) {
    if (this.forbiddenEmails.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    } else {
      return null;
    }
  }
}
