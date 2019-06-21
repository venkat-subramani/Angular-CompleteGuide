import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MaterialModule } from '../material/material.module';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    BookComponent,
    BookDetailComponent,
    FilterPipe,
    SortPipe,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents: [BookDetailComponent],
  exports: [
    CommonModule,
    MaterialModule,
    BookComponent,
    BookDetailComponent,
    FilterPipe,
    SortPipe,
    FilterComponent
  ]
})
export class SharedModule { }
