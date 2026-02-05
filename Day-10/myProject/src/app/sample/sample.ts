import { Component } from '@angular/core';
import { Print } from '../Service/print';

@Component({
  selector: 'app-sample',
  imports: [],
  templateUrl: './sample.html',
  styleUrl: './sample.css',
})
export class Sample {

  constructor(private print: Print) {
    this.print.printFunction();
  }

}
