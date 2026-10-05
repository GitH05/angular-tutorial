import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Counter],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = signal('Angular Tutorial');
}