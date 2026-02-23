import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthLogin } from '../authenticate/auth-login';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthLogin,
    private router: Router
  ) {
    this.loginForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.getRawValue();

    const success = this.auth.login(email, password);

    if (success) {
      alert('Login Successful!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials!');
    }
  }

}
