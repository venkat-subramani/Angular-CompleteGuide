import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { BrowseComponent } from './browse.component';
import { SharedModule } from './../../shared/shared.module';
import { DataService } from './../../shared/data.service';
import { Book } from './../../shared/book.model';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;

  const dataService = jasmine.createSpyObj('DataService', ['getBooks', 'getLoggedInUser']);
  const getLoggedInUserSpy = dataService.getLoggedInUser.and.returnValue( of('user') );

  const book = new Book('Book', 'image', 'desc', 'me', 'cat', 'isbn', '4', '44', 5, 5, '1');
  const arr = [];
  arr.push(book);
  const getBooksSpy = dataService.getBooks.and.returnValue( of(arr) );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseComponent ],
      imports: [SharedModule, HttpClientModule, BrowserAnimationsModule],
      providers: [{ provide: DataService, useValue: dataService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
