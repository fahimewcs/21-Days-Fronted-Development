import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { NewComponent } from './Components/new-component/new-component';
import { Sample } from "./sample/sample";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, NewComponent, Sample],
  // templateUrl: './app.html',
  // templateUrl: './dashboard/dashboard.html',
   template: `
    <app-dashboard></app-dashboard>
    <app-new-component></app-new-component>
    <app-sample/>
    
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myProject');
}

