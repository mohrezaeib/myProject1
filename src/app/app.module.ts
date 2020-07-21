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
import { SecuredImageComponent } from './components/secured-image/secured-image.component';
import { EditableComponent } from './components/editable/editable.component';
import { OverviewComponent } from './components/productPage/product-detail/overview/overview.component';
import { DownloadComponent } from './components/productPage/product-detail/download/download.component';
import { SpecComponent } from './components/productPage/product-detail/spec/spec.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
import { AgmMapComponent } from './components/agm-map/agm-map.component';
import { FormComponent } from './test/form/form.component';


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
    SecuredImageComponent,
    EditableComponent,
    OverviewComponent,
    DownloadComponent,
    SpecComponent,
    AgmMapComponent,
    FormComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMjuUPXMzYhs7l4P1XG0vUUQA6eIRkw9k'
    })
  ],
  providers: [AuthService,
             AuthGuard,
             { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService
              , multi: true }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
