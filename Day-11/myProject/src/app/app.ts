import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page } from './page/page';
import { Table } from "./table/table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Page, Table],
  // templateUrl: './app.html',
  template:`<app-page/>
  <app-table/>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myProject');
}
