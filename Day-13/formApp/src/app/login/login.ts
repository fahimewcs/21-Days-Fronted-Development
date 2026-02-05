import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../authenticate/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm;

  constructor(private fb: FormBuilder,private router: Router, private auth: Auth) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberMe: [false]
    });
  }


  login() {
    // if (this.loginForm.invalid) {
    //   this.loginForm.markAllAsTouched();
    //   return;
    // }

    const { email, password } = this.loginForm.value;

    if (email === 'hello@email.com' && password === '123') {
      this.auth.login('Admin');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password');
    }
  }

  // shortcut for template
  get f() {
    return this.loginForm.controls;
  }


}
