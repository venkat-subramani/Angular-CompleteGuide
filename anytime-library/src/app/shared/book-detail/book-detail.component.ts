import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Book } from '../book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public book: Book) { }

  ngOnInit() {
  }

}
