import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { SliderComponent } from './components/header/slider/slider.component';
import { ProductComponent } from './components/featuredProduct/product/product.component';

import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/productPage/search-bar/search-bar.component';
import { ProductDeatilComponent } from './components/productPage/product-deatil/product-deatil.component';
import { ContactFormComponent } from './components/ContactPage/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/loginPage/login/login.component';
import { WarrantyComponent } from './components/warrantyPage/warranty/warranty.component';
import {AppRoutingModule} from './app-routing.module';

import { CompanyDescriptionComponent } from './components/company-description/company-description.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductPageComponent } from './components/productPage/product-page/product-page.component';
import { SingleProductPageComponent } from './components/productPage/single-product-page/single-product-page.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SliderComponent,
    ProductComponent,

    FooterComponent,
    SearchBarComponent,
    ProductDeatilComponent,
    ContactFormComponent,
    HomeComponent,
    LoginComponent,
    WarrantyComponent,
    CompanyDescriptionComponent,
    ProductPageComponent,
    SingleProductPageComponent,
    ProfilePageComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,
             AuthGuard,
             { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService
              , multi: true }

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
