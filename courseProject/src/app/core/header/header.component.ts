import { Component, OnInit } from '@angular/core';
import { HttpEvent } from '@angular/common/http';

import { DataStorageService } from './../../shared/data-storage.service';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpEvent<Object>) => console.log(response),
        (error) => console.log(error)
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logOut();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
