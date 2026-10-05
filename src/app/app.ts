import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  var1: string = 'Angular Tutorial: function call on Button click';
  count = 0;

  increment() {
    console.log('Incrementing count: '+this.count);
    this.count++;
    this.greet(); // class component method call | `this` used
  }
  greet() {
    console.log('Hello from Angular!');
  }
}
