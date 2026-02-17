import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Logging } from './loggingService/logging';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  private logger = inject(Logging);

  handleError(error: any): void {

    // 1️⃣ Log in console
    this.logger.error(error);

    // 2️⃣ Send to server (optional)
    this.logger.sendToServer(error);

    // 3️⃣ User friendly message
    alert('Something went wrong! Please try again.');
  }
}
