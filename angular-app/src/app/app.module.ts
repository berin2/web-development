import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { NavComponent } from './components/nav/nav.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent,
    ProductComponent,
    ContactComponent,
    ShopComponent,
    AppContainerComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
