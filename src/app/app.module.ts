import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SliderComponent } from './components/header/slider/slider.component';
import { ProductComponent } from './components/featuredProduct/product/product.component';
import { ProductRowComponent } from './components/featuredProduct/product-row/product-row.component';

import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/productPage/search-bar/search-bar.component';
import { ProductDeatilComponent } from './components/productPage/product-deatil/product-deatil.component';
import { ContactFormComponent } from './components/ContactPage/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/loginPage/login/login.component';
import { WarrantyComponent } from './components/warrantyPage/warranty/warranty.component';
import {AppRoutingModule} from './app-routing.module';

import { CompanyDescriptionComponent } from './components/company-description/company-description.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SliderComponent,
    ProductComponent,
    ProductRowComponent,

    FooterComponent,
    SearchBarComponent,
    ProductDeatilComponent,
    ContactFormComponent,
    HomeComponent,
    LoginComponent,
    WarrantyComponent,
    CompanyDescriptionComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
