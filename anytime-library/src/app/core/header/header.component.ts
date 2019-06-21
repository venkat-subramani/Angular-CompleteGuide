import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  isAdmin: boolean;
  subscription: Subscription;

  constructor(private authService: AuthService) {
    this.subscription = this.authService.authUpdated
      .subscribe(
        (authDetails: {auth: boolean, admin: boolean}) => {
          this.isAuthenticated = authDetails.auth;
          this.isAdmin = authDetails.admin;
        }
      );
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdmin();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLogout() {
    this.authService.logOut();
  }

}
