import { Component } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  imports: [],
  templateUrl: './authenticate.html',
  styleUrl: './authenticate.css',
})
export class Authenticate {
  signup(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) return false;

    const user = JSON.parse(savedUser);
    return user.email === email && user.password === password;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }
}
