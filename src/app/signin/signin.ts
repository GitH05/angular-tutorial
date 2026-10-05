import { Component } from '@angular/core';    // This line imports the Component decorator from the Angular core library, which is used to define a component in Angular.


@Component({        // This is a component decorator that defines metadata for the SignIn component
    selector: 'app-signin',
    templateUrl: './signin.html',  // This line specifies the path to the HTML template for the SignIn component.
    styleUrl: './signin.css',  // This line specifies the path to the CSS file for the SignIn component.
    // template: `<h1>{{title}}</h1>`,
    // styles: [`
    //     h1{
    //         color:aqua;
    //     }`]
})

export class SignInComponent { // This line defines a class called SignInComponent, which is the main class for the SignIn component.
    title: string = 'Sign In Page';  // This line defines a property called title of type string and initializes it with the value 'Sign In Page'.
}