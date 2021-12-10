import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {
    this.register = new FormGroup({
      fullname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null),
    });
  }

  isSubmit() {
    console.log(this.register);
    
  }
}
