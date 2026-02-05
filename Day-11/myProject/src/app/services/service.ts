import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {

  arr = [
    { name: 'Junaid', age: 22, address: "Dhaka" },
    { name: 'Abir', age: 21, address: "Khulna" },
    { name: 'Karim', age: 23, address: "Rangpur" }
  ];

  dataSample(){
    return this.arr;
  }
  
}
