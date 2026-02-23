import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthLogin {
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

  user(): string | null {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) return null;

    return JSON.parse(savedUser).name;
  }
  
}
