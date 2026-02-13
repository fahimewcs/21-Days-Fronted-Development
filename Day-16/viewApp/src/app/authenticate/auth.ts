import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));
  username = signal<string>(localStorage.getItem('username') || '');

  login(username: string, token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);

    this.isLoggedIn.set(true);
    this.username.set(username);
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.set(false);
    this.username.set('');
  }
}
