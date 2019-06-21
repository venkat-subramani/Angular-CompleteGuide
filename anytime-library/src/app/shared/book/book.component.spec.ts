import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { BookComponent } from './book.component';
import { MaterialModule } from './../../material/material.module';
import { DataService } from './../data.service';
import { User } from '../user.model';
import { Book } from './../book.model';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let book;
  let user;
  const dataService = jasmine.createSpyObj('DataService', ['issueBookToUser', 'deleteBook']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        MaterialModule
      ],
      providers: [{ provide: DataService, useValue: dataService} , MatDialog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    book = new Book('Book', 'image', 'desc', 'me', 'cat', 'isbn', '4', '44', 5, 5, '1');
    component.book = book;
    user = new User('email', 'now', null, null, '1');
    component.loggedInUser = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check book already issued by user', () => {
    component.loggedInUser.activeBooks = [];
    component.loggedInUser.activeBooks.push(book);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.bookIssuedByUser).toBeTruthy();
  });

  it('should check book available for user', () => {
    component.book.availableCopies = 0;
    component.canBookIssued();
    fixture.detectChanges();
    expect(component.book.availableCopies).toEqual(0);
  });

  it('should issue the book to user', () => {
    component.issueBook();
    fixture.detectChanges();
    expect(component.bookIssuedByUser).toBeTruthy();
  });

  it('should delete the book', () => {
    component.deleteBook();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
