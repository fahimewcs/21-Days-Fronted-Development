import { Component } from '@angular/core';
import { Service } from '../services/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  imports: [CommonModule],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {

  
  persons: { name: string, age: number, address: string }[];
  
  

  constructor(private data: Service) {
    this.persons = this.data.dataSample();
  }

  

}
