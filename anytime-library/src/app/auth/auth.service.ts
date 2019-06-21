import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Subject } from 'rxjs';

import { DataService } from '../shared/data.service';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  loggedInUser: string;
  loginError = new Subject();
  registerError = new Subject();
  authUpdated = new Subject();

  constructor(private router: Router, private dataService: DataService) { }

  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.getToken();
          localStorage.setItem('login', email);
          const user = new User(email, (new Date()).toUTCString());
          this.dataService.addNewUser(user);
          this.router.navigate(['/']);
        }
      )
      .catch(
        error => this.registerError.next(error)
      );
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          localStorage.setItem('login', email);
          this.router.navigate(['/']);
          this.getToken();
        }
      )
      .catch(
        error => this.loginError.next(error)
      );
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
    this.authUpdated.next({auth: this.isAuthenticated(), admin: this.isAdmin()});
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
          localStorage.setItem('authToken', this.token);
          this.authUpdated.next({auth: this.isAuthenticated(), admin: this.isAdmin()});
        }
      );
    return this.token;
  }

  isAuthenticated() {
    this.token = localStorage.getItem('authToken');
    return this.token ? true : false;
  }

  isAdmin() {
    this.loggedInUser = localStorage.getItem('login');
    return this.loggedInUser === 'admin@admin.com' ? true : false;
  }
}
