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
  // isLoggedIn = signal(false);
  // username = signal('');

  // login(username: string) {
  //   this.isLoggedIn.set(true);
  //   this.username.set(username);
  // }

  // logout() {
  //   this.isLoggedIn.set(false);
  //   this.username.set('');
  // }

  isLoggedIn = signal<boolean>(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  username = signal<string>(
    localStorage.getItem('username') || ''
  );

  login(username: string) {
    this.isLoggedIn.set(true);
    this.username.set(username);

    // persist
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
  }

  logout() {
    this.isLoggedIn.set(false);
    this.username.set('');

    //    clear storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }
}
