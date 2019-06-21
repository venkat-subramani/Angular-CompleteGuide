import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocksComponent } from './stocks/stocks.component';
import { UsersComponent } from './users/users.component';
import { AdminGuard } from '../auth/admin.guard';

const adminRoutes: Routes = [
  { path: 'stocks', component: StocksComponent, canActivate: [AdminGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
