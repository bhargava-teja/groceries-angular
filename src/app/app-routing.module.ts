import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { CartComponent } from './cart/cart.component';
import {HomeComponent} from './home/home.component'
import { PageNotFoundComponent} from './page-not-found/page-not-found.component'


const routes: Routes = [
  {path:'cart', component: CartComponent},
  {path:'cart/:id', component: CartComponent},
  {path:'store/:type', component: ProductListComponent},
  {path:':type/:id', component: ProductDetailComponent},
  {path:"",component:HomeComponent},
  {path:"**", component: PageNotFoundComponent}
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
