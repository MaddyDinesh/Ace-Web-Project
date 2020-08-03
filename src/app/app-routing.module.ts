import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutDetailComponent } from './checkout/checkout-detail/checkout-detail.component';


const routes: Routes = [
  {path: '' , redirectTo:'/checkout',pathMatch:'full'},
  {path:'checkout',component:CheckoutDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
