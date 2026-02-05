// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   imports: [],
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.css',
// })
// export class Dashboard {

// }


import { Component, OnInit, OnDestroy, effect, signal, computed } from '@angular/core';
import { Print } from '../Service/print';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit, OnDestroy {
  // Writable signal for counter
  counter = signal(0);

  // Computed signal for derived value (e.g., double of counter)
  doubleCounter = computed(() => this.counter() * 2);

  // Lifecycle hook subscription effect
  private counterEffect: any;

  constructor(private print: Print) {
    this.print.printFunction();
  }

  ngOnInit(): void {
    //console.log('Dashboard initialized.');
      //alert('Counter value changed:' +this.counter());
      

    // Example effect: logs whenever counter changes
    // this.counterEffect = effect(() => {
    //   console.log('Counter value changed:', this.counter());
    // });
  }



  ngOnDestroy(): void {
    console.log('Dashboard destroyed.');

    // Cleanup the effect
    // if (this.counterEffect) {
    //   this.counterEffect.destroy();
    // }
  }


  increment() {
    this.counter.update((val) => val + 1);
  }

  decrement() {
    this.counter.update((val) => val - 1);
  }

  reset() {
    this.counter.set(0);
  }
}




