import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SliderComponent } from './components/header/slider/slider.component';
import { ProductComponent } from './components/featuredProduct/product/product.component';
import { ProductRowComponent } from './components/featuredProduct/product-row/product-row.component';
import { CompanyHistoryComponent } from './components/company-history/company-history.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/productPage/search-bar/search-bar.component';
import { ProductDeatilComponent } from './components/productPage/product-deatil/product-deatil.component';
import { ContactFormComponent } from './components/ContactPage/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SliderComponent,
    ProductComponent,
    ProductRowComponent,
    CompanyHistoryComponent,
    FooterComponent,
    SearchBarComponent,
    ProductDeatilComponent,
    ContactFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
