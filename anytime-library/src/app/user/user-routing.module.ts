import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse/browse.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { AuthGuard } from '../auth/auth.guard';

const userRoutes: Routes = [
  { path: 'browse', component: BrowseComponent, canActivate: [AuthGuard] },
  { path: 'mybooks', component: MyBooksComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
