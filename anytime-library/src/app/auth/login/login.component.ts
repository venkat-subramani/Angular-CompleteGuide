import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  loginError;

  constructor(private authService: AuthService) {
    this.subscription = this.authService.loginError
      .subscribe(
        error => this.loginError = error
      );
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password);
  }

}
