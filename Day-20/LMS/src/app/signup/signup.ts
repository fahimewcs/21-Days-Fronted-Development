import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthLogin } from '../authenticate/auth-login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthLogin,
    private router: Router
  ) {
    this.signupForm = this.fb.nonNullable.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSignup() {
    if (this.signupForm.invalid) return;

    const formData = this.signupForm.getRawValue();

    this.auth.signup(formData);

    alert('Signup Successful!');
    this.router.navigate(['/login']);
  }
}
