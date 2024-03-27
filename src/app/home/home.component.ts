import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = 'nilesh@gamil.com';
  password: string = '1234';

  constructor(private router: Router) { }

  login() {
    // Here you can add your actual login logic
    // For demonstration purposes, let's assume login is successful
    const loginSuccessful = true;

    if (loginSuccessful) {
      // Redirect to home page
      this.router.navigate(['/home']);
    } else {
      // Handle failed login
      // For example, display an error message
    }
  }
}
