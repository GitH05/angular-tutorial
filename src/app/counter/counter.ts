import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  count = 0;

  handle(action: string) {
    if (action === 'plus') {
      this.count++;
    } else if (action === 'minus' && this.count > 0) {
      this.count--;
    } else if (action === 'reset') {
      this.count = 0;
    }
  }

}
