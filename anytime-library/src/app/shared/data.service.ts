import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bookDeleted = new Subject();

  constructor(private httpClient: HttpClient) { }

  fetchUsers() {
    return this.httpClient.get('users.json')
      .pipe(map(
        (response) => {
          const fetchedUsers: User[] = [];
          for (const [key, user] of Object.entries(response)) {
            fetchedUsers.push({
              ...user,
              id: key
            });
          }
          return fetchedUsers;
        }
      ));
  }

  addNewUser(user: User) {
    return this.httpClient.post('users.json', user).subscribe();
  }

  updateUser(user: User) {
    return this.httpClient.put(`users/${user.id}.json`, user).subscribe();
  }

  getLoggedInUser(email) {
    return this.httpClient.get('users.json')
    .pipe(map(
      (response) => {
        const fetchedUsers: User[] = [];
        for (const [key, user] of Object.entries(response)) {
          fetchedUsers.push({
            ...user,
            id: key
          });
        }
        const loggedInUser = fetchedUsers.find(user => user.email === email);
        return loggedInUser;
      }
    ));
  }

  getBooks() {
    return this.httpClient.get('books.json')
      .pipe(map(
        (response) => {
          const books: Book[] = [];
          for (const [key, book] of Object.entries(response)) {
            books.push({
              ...book,
              id: key
            });
          }
          return books;
        }
      ));
  }

  addNewBook(book: Book) {
    return this.httpClient.post('books.json', book)
      .pipe(map(
        response => {
          const createdBook: Book = {
            ...book,
            id: response['name']
          };
          return createdBook;
        }
      ));
  }

  updateBook(book: Book) {
    return this.httpClient.put(`books/${book.id}.json`, book);
  }

  deleteBook(book: Book) {
    return this.httpClient.delete(`books/${book.id}.json`)
      .subscribe(res => {
        this.bookDeleted.next(book.id);
      });
  }

  issueBookToUser(book, user) {
    this.updateBook(book).subscribe(
      res => {
        this.updateUser(user);
      }
    );
  }

  returnBookByUser(book, user) {
    this.updateBook(book).subscribe(
      res => {
        this.updateUser(user);
      }
    );
  }
}
