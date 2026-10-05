import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginTitle: string = 'Login Page';
  imageUrl: string = "https://cdn.wallpapersafari.com/86/95/vdMJhw.jpg";

  count = signal(0);
}
