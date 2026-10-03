import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  var1: string = 'Angular Tutorial';
  isAdmin: boolean = true;

  count = 5;
  price = 199.99;
  isLogin = true;
  
  getUser() {
    return "Santosh";
  }

  title = signal('Interpolation with signals');
}
