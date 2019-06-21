export class Book {
  constructor (
    public title: string,
    public imageUrl: string,
    public description: string,
    public authors: string,
    public categories: string,
    public isbn: string,
    public averageRating: string,
    public ratingsCount: string,
    public totalCopies: number,
    public availableCopies: number,
    public id?: string,
    public issuedOn?: string,
    public returnedOn?: string
  ) {}
}
