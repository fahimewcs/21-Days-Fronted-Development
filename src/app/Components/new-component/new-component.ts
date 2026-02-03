import { Component, inject } from '@angular/core';
import { Print } from '../../Service/print';

@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.html',
  styleUrl: './new-component.css',
})
export class NewComponent {

  /**
   *
   */
  
  constructor(private print: Print) {
    this.print.printFunctionTwo();
  }

  

  

  

}
