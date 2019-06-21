import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

import { Book } from '../book.model';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookEditComponent } from '../../admin/book-edit/book-edit.component';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() loggedInUser: User;
  bookIssuedByUser = false;
  isAdmin = false;
  subscription: Subscription;

  constructor(private dataService: DataService, private materialDialog: MatDialog) { }

  ngOnInit() {
    this.isAdmin = this.loggedInUser.email === 'admin@admin.com' ? true : false;
    if (this.loggedInUser && this.loggedInUser.activeBooks) {
      const bookIssued = this.loggedInUser.activeBooks.find(active => this.book.id === active.id);
      if (bookIssued) {
        this.bookIssuedByUser = true;
      }
    }
  }

  viewBook() {
    this.materialDialog.open(BookDetailComponent, {
      data: { ...this.book}
    });
  }

  editBook() {
    const dialogRef = this.materialDialog.open(BookEditComponent, {
      width: '80%',
      data: { ...this.book}
    });

    dialogRef.afterClosed().subscribe(
      (updatedBook: Book) => {
        if (updatedBook) {
          const bookUpdated = {
            ...this.book,
            ...updatedBook
          };
          this.dataService.updateBook(bookUpdated)
            .subscribe((book: Book) => this.book = book);
        }
      });
  }

  deleteBook() {
    this.dataService.deleteBook(this.book);
  }

  canBookIssued() {
    if (this.book.availableCopies === 0) {
      return 'Not Available';
    } else if (this.bookIssuedByUser) {
      return 'Already Issued';
    } else {
      return 'Issue';
    }
  }

  issueBook() {
    this.bookIssuedByUser = true;
    this.book.availableCopies--;

    const user = {...this.loggedInUser};
    const now = (new Date()).toString();
    if (!user.activeBooks) {
        user.activeBooks = [];
    }
    user.activeBooks.push({
        ...this.book,
        issuedOn: now
    });

    this.dataService.issueBookToUser(this.book, user);
  }

}
