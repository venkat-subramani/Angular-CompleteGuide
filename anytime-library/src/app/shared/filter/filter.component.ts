import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() searchInput: string;
  @Output() searchInputChange = new EventEmitter<string>();
  @Input() categorySearch: string;
  @Output() categorySearchChange = new EventEmitter<string>();
  @Input() ratingSearch: string;
  @Output()ratingSearchChange = new EventEmitter<string>();
  @Input() sortProperty = 'title';
  @Output() sortPropertyChange = new EventEmitter<string>();
  @Input() sortReverse = false;
  @Output() sortReverseChange = new EventEmitter<boolean>();

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

  onSort(prop) {
    if (this.sortProperty === prop) {
      this.sortReverse = !this.sortReverse;
      this.sortReverseChange.emit(this.sortReverse);
    }
    this.sortProperty = prop;
    this.sortPropertyChange.emit(this.sortProperty);
  }

  constructor() { }

  ngOnInit() {
  }

}
