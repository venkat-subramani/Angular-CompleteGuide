import { Book } from './book.model';

export class User {
  constructor (
    public email: string,
    public registeredOn: string,
    public activeBooks?: Book[],
    public historyBooks?: Book[],
    public id?: string
  ) {}
}
