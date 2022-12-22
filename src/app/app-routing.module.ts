import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'customers',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
