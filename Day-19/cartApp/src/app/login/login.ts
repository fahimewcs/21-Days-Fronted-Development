import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../authenticate/auth';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm;

  constructor(private fb: FormBuilder,
              private router: Router, 
              private auth: Auth,
              private http: HttpClient) 
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberMe: [false]
    });
  }


  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.http.post<any>('http://localhost:3000/login', this.loginForm.value)
      .subscribe({
        next: (res) => {
          this.auth.login(res.username, res.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          throw err;
        }
      });
    }

  // shortcut for template
  get f() {
    return this.loginForm.controls;
  }


}
