import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logging {
  log(message: string) {
    console.log('LOG:', message);
  }

  error(error: any) {
    console.error('ERROR:', error);
  }

  sendToServer(error: any) {
    // Optional: send to backend
    fetch('http://localhost:3000/user', {
      method: 'POST',   
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error,
        time: new Date()
      })
    }).catch(err => console.error('Logging failed:', err));
  }
  
}
