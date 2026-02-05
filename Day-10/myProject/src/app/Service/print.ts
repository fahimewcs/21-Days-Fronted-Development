import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})
export class Print {
  
   
  printFunction(){
    console.log("print from this service");

  }
  printFunctionTwo(){
    console.log("Heelo angular");
  }
}
