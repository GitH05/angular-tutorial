import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  var1: string = 'Angular Tutorial: Event in Angular';
  counter = signal(0);
  name = "";
  keyEvent = "";
  mouseEvent = "";
  blurEvent = "";

  handleClick() {
    this.counter.set(this.counter() + 1);
  }

  handleInput(event: string) {
    this.name = event;
  }

  handleKeyUp(event: any) {
    this.keyEvent = event.key;
    console.log("KeyUp Event: " + event.key);
  }

  handleMouseEvent(event: any) {
    this.mouseEvent = event.type;
    console.log("Mouse Out Event: " + event.type);
  }

  handleBlurEvent(event: any) {
    this.blurEvent = event.type;
    console.log("Blur Event: " + event.type);
  }
}
