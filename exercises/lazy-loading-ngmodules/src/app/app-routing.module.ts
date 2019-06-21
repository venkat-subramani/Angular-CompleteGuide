import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
