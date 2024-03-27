import { Component } from '@angular/core';
import { Login } from '../Models/login-users';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: Login = {} as Login;
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log('Login button clicked');

    this.authService.login(this.loginData).subscribe(
      (success) => {
        if (success) {
          console.log('Login successful');
          this.router.navigate(['/home']); // Redirect to home page after successful login
          console.log('Navigated to home');
        } else {
          console.log('Invalid credentials');
          this.loginError = true;
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.loginError = true;
      }
    );
  }
}
