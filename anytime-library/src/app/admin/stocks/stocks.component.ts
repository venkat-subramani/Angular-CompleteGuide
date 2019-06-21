import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Book } from './../../shared/book.model';
import { User } from './../../shared/user.model';
import { DataService } from './../../shared/data.service';
import { BookEditComponent } from '../book-edit/book-edit.component';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks: Book[] = [];
  loggedInUser: User;

  searchInput: string;
  categorySearch: string;
  ratingSearch: string;
  sortProperty = 'title';
  sortReverse = false;

  constructor(private dataService: DataService, private materialDialog: MatDialog) {
    this.dataService.bookDeleted
      .subscribe(
        (id: any) => {
          const index = this.stocks.findIndex(book => book.id === id);
          this.stocks.splice(index, 1);
        }
      );
  }

  ngOnInit() {
    this.dataService.getBooks()
      .subscribe(
        (books: Book[]) => this.stocks = books
      );

    const userEmail = localStorage.getItem('login');
    this.dataService.getLoggedInUser(userEmail)
      .subscribe((user: User) => this.loggedInUser = user);
  }

  addNewBook() {
    const dialogRef = this.materialDialog.open(BookEditComponent, {
      width: '80%',
      data: new Book(null, null, null, null, null, null, null, null, null, null, null)
    });

    dialogRef.afterClosed().subscribe(
      (newBook: Book) => {
        if (newBook) {
          this.dataService.addNewBook(newBook)
            .subscribe((createdBook: Book) => this.stocks.push(createdBook));
        }
      });
  }

}
