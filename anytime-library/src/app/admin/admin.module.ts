import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { StocksComponent } from './stocks/stocks.component';
import { UsersComponent } from './users/users.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    StocksComponent,
    UsersComponent,
    BookEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    AdminRoutingModule
  ],
  entryComponents: [BookEditComponent]
})
export class AdminModule { }
