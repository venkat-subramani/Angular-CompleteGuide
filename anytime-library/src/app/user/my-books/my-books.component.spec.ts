import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { MyBooksComponent } from './my-books.component';
import { SharedModule } from './../../shared/shared.module';
import { DataService } from './../../shared/data.service';
import { User } from './../../shared/user.model';
import { Book } from './../../shared/book.model';

describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;
  let user;
  let book;

  beforeEach(async(() => {
    const dataService = jasmine.createSpyObj('DataService', ['getLoggedInUser', 'returnBookByUser']);
    const getLoggedInUserSpy = dataService.getLoggedInUser.and.returnValue( of('user') );
    TestBed.configureTestingModule({
      declarations: [ MyBooksComponent ],
      imports: [SharedModule, HttpClientModule],
      providers: [{ provide: DataService, useValue: dataService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    user = new User('email', 'now', null, null, '1');
    book = new Book('Book', 'image', 'desc', 'me', 'cat', 'isbn', '4', '44', 5, 5, '1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update TableData', () => {
    component.loggedInUser = user;
    component.loggedInUser.activeBooks = [];
    component.loggedInUser.activeBooks.push(book);
    component.updateTableData(user);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should return book to library', () => {
    component.loggedInUser = user;
    component.loggedInUser.activeBooks = [];
    component.loggedInUser.activeBooks.push(book);
    component.returnBook({bookName: 'Book'});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
