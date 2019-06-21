import { Component, OnInit } from '@angular/core';

import { DataService } from './../../shared/data.service';
import { Book } from './../../shared/book.model';
import { User } from './../../shared/user.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  books: Book[];
  loggedInUser: User;

  searchInput: string;
  categorySearch: string;
  ratingSearch: string;
  sortProperty = 'title';
  sortReverse = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBooks()
      .subscribe(
        (books: Book[]) => this.books = books
      );

    const userEmail = localStorage.getItem('login');
    this.dataService.getLoggedInUser(userEmail)
      .subscribe((user: User) => this.loggedInUser = user);
  }

}
