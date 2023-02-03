import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ShopComponent} from "./components/shop/shop.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path:"",component: LandingComponent},
  {path:"shop", component: ShopComponent},
  {path: "contact",component: ContactComponent},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
