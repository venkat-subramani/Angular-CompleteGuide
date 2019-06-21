import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { Book } from './book.model';
import { User } from './user.model';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DataService]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should fetch all users', inject([HttpTestingController, DataService],
      (httpMock: HttpTestingController, dataService: DataService) => {
        const mockUsers = [
          { name: 'Bob', website: 'www.yessss.com' },
          { name: 'Juliette', website: 'nope.com' }
        ];

        dataService.fetchUsers().subscribe((users) => {
          expect(users.length).toEqual(mockUsers.length);
        });

        const mockReq = httpMock.expectOne('users.json');

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      })
  );

  it('should add new user', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      dataService.addNewUser({email: 'newuser', registeredOn: 'now'});
    })
  );

  it('should update user', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      dataService.updateUser({email: 'newuser', registeredOn: 'now', id: '1'});
    })
  );

  it('should fetch logged in user', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      const mockUsers = [
        { name: 'Bob', email: 'bob@mail.co' },
        { name: 'Juliette', email: 'nope.com' }
      ];

      dataService.getLoggedInUser('bob@mail.co').subscribe((user) => {
        expect(user.email).toEqual('bob@mail.co');
      });
      const mockReq = httpMock.expectOne('users.json');
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockUsers);

      httpMock.verify();
    })
  );

  it('should get all books', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      const mockBooks = [
        { title: 'New Book', email: 'bob@mail.co' },
        { title: 'Juliette', email: 'nope.com' }
      ];

      dataService.getBooks().subscribe((books) => {
        expect(books.length).toEqual(mockBooks.length);
      });
      const mockReq = httpMock.expectOne('books.json');
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockBooks);

      httpMock.verify();
    })
  );

  it('should add new books', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      const book = new Book('Book', 'image', 'desc', 'me', 'cat', 'isbn', '4', '44', 5, 5, '1');
      dataService.addNewBook(book).subscribe((newBook) => {
        expect(newBook).toBeTruthy();
      });
      const mockReq = httpMock.expectOne('books.json');
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(book);
      httpMock.verify();
    })
  );

  it('should update book', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      const book = new Book('Book', 'image', 'desc', 'me', 'cat', 'isbn', '4', '44', 5, 5, '1');
      dataService.updateBook(book);
    })
  );

  it('should delete book', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      const book = new Book('Book', 'image', 'desc', 'me', 'cat', 'isbn', '4', '44', 5, 5, '1');
      dataService.deleteBook(book);
    })
  );

  it('should issue book', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      const book = new Book('Book', 'image', 'desc', 'me', 'cat', 'isbn', '4', '44', 5, 5, '1');
      const user = new User('venkat', 'now');
      dataService.issueBookToUser(book, user);
    })
  );

  it('should return book', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      const book = new Book('Book', 'image', 'desc', 'me', 'cat', 'isbn', '4', '44', 5, 5, '1');
      const user = new User('venkat', 'now');
      dataService.returnBookByUser(book, user);
    })
  );
});
