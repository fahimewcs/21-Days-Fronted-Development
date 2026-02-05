// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Auth {
  
// }

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  isLoggedIn = signal(false);
  username = signal('');

  login(username: string) {
    this.isLoggedIn.set(true);
    this.username.set(username);
  }

  logout() {
    this.isLoggedIn.set(false);
    this.username.set('');
  }
}
