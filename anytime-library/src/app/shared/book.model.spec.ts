import { Book } from './book.model';

describe('BookModel', () => {
  it('create an instance', () => {
    const book = new Book('Title', 'imageUrl', 'description', 'authors', 'categories', 'isbn', 'rating', 'ratingCount', 3, 3);
    expect(book).toBeTruthy();
  });
});
