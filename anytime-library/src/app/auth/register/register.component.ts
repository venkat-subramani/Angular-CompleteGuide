import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  registerError;

  constructor(private authService: AuthService) {
    this.subscription = this.authService.registerError
      .subscribe(
        error => this.registerError = error
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRegister(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.registerUser(email, password);
  }

}
