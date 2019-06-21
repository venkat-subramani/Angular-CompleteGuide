import { Component, OnInit } from '@angular/core';

import { DataService } from './../../shared/data.service';
import { User } from './../../shared/user.model';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  loggedInUser: User;
  displayedColumns: string[] = ['position', 'bookName', 'issuedOn', 'action'];
  userBooks: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    const userEmail = localStorage.getItem('login');
    this.dataService.getLoggedInUser(userEmail)
      .subscribe((user: User) => {
        this.loggedInUser = user;
        this.userBooks = this.updateTableData(this.loggedInUser);
      });
  }

  updateTableData(user) {
    const result = [];
    if (user.activeBooks) {
      user.activeBooks.forEach((book, index) => {
        result.push({
          position: index + 1,
          bookName: book.title,
          issuedOn: book.issuedOn,
          action: 'Return'
        });
      });
    }
    return result;
  }

  returnBook(bookEl) {
    const user = {...this.loggedInUser};
    const book = user.activeBooks.find(activeBook => activeBook.title === bookEl.bookName);

    book.availableCopies++;
    delete book.issuedOn;

    const bookIndex = user.activeBooks.findIndex(activeBook => activeBook.title === bookEl.bookName);
    user.activeBooks.splice(bookIndex, 1);
    const now = (new Date()).toString();
    if (!user.historyBooks) {
      user.historyBooks = [];
    }
    user.historyBooks.push({
        ...book,
        returnedOn: now
    });
    this.userBooks = this.updateTableData(user);

    this.dataService.returnBookByUser(book, user);
  }

}
