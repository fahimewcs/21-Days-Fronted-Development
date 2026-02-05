import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../authenticate/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = 'hello@email.com';
  password = '123';

  constructor(private router: Router, private auth: Auth) {}
  login() {
      if (this.email === 'hello@email.com' && this.password === '123') {
        this.auth.login('Admin');      
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid email or password');
      }
    }

}
