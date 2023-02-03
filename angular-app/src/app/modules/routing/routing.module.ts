import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from "../../components/landing/landing.component";
import {RouterModule} from "@angular/router";

let ROUTES = [
  {path:"",component:LandingComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RoutingModule { }
