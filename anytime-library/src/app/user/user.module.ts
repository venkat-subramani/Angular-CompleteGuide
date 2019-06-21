import { NgModule } from '@angular/core';

import { BrowseComponent } from './browse/browse.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    BrowseComponent,
    MyBooksComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
