import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';


@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit{

  persons: { name: string, age: number, address: string }[] = [];

  constructor(private dataService: Service) {}

  ngOnInit(): void {
    this.persons = this.dataService.dataSample();
  }
}
