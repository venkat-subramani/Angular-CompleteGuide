import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyClN9TROzyhFK04xrQ93Mgr0tJ2Y78AYCo',
      authDomain: 'ng7-recipe-book.firebaseapp.com'
    });
  }
}
