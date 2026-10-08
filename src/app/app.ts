import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'Angular Tutorial';
  name : string = "";
  city : string = "";
  email : string = "";


  updateName(value:string) {
    this.name = value;
  }

  getEmail(value: string){
    this.email = value;
  }

}