import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

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

  constructor(private registerBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.register = this.registerBuilder.group({
      username: [null, Validators.required],
      email: [null, [
        Validators.required,
        Validators.email,
        this.forbiddenEmail.bind(this),
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(8),
      ]],
    });
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
