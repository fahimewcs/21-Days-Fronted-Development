import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  signupForm;

  constructor(private fb: NonNullableFormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

      const userData = this.signupForm.value;

      this.http.post('http://localhost:3000/signup', userData)
      .subscribe({
        next: (res: any) => {
          alert('Registration Successful');
          console.log('Backend response:', res);
        },
        error: (err) => {
          alert(err.error.message || 'Signup failed');
          console.error(err);
        }
      });
    }

}
