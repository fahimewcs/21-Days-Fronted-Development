import { CommonModule } from '@angular/common';
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

  constructor(private fb: NonNullableFormBuilder) {
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

    console.log(this.signupForm.value);
    alert('Registration Successful');
  }

}
