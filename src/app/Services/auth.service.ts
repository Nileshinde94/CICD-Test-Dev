import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from '../Models/login-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: Login = {
    username: 'testuser',
    password: 'password123',
    loginTime: new Date()
  };

  private isLoggedIn: boolean = false;

  constructor() { }

  login(user: Login): Observable<boolean> {
    if (
      user.username === this.loggedInUser.username &&
      user.password === this.loggedInUser.password
    ) {
      this.isLoggedIn = true;
      return of(true);
    } else {
      this.isLoggedIn = false;
      return of(false);
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}