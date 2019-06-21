import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  editForm: FormGroup;
  editMode = false;
  bookCategories: string[] = [
    'Action and Adventure',
    'Autobiography',
    'Business & Economics',
    'Computers',
    'Drama',
    'Fantasy',
    'Fiction',
    'Novel',
    'Non-Fiction',
    'Science'
  ];

  constructor(
    private dialogRef: MatDialogRef<BookEditComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    if (this.book.id) {
      this.editMode = true;
    }
    this.initForm();
  }

  initForm() {
    const availableCopies = { value: this.book.availableCopies, disabled: this.book.id };
    this.editForm = new FormGroup({
      'title': new FormControl(this.book.title, Validators.required),
      'description': new FormControl(this.book.description, Validators.required),
      'imageUrl': new FormControl(this.book.imageUrl, Validators.required),
      'authors': new FormControl(this.book.authors, Validators.required),
      'categories': new FormControl(this.book.categories, Validators.required),
      'isbn': new FormControl(this.book.isbn, Validators.required),
      'averageRating': new FormControl(this.book.averageRating, Validators.required),
      'ratingsCount': new FormControl(this.book.ratingsCount, Validators.required),
      'totalCopies': new FormControl(this.book.totalCopies, [Validators.required, Validators.min(1)]),
      'availableCopies': new FormControl(availableCopies, [Validators.required, Validators.min(0)]),
      'id': new FormControl(this.book.id)
    });
  }

}
