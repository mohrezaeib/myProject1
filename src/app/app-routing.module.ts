import {NgModel} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {ContactFormComponent} from './components/ContactPage/contact-form/contact-form.component';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/loginPage/login/login.component';
import {RegisterComponent} from './components/loginPage/register/register.component';
import {WarrantyComponent} from './components/warrantyPage/warranty/warranty.component';
import {ProductPageComponent} from './components/productPage/product-page/product-page.component';
import {Page404Component} from './components/page404/page404.component'
import { AuthGuard } from './_helper';

const appRouts: Routes = [
  {path: 'products', component: ProductPageComponent},
  {path: 'contact-us', component: ContactFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'warranty', component: WarrantyComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/404' },
  { path: '404', component: Page404Component }
];
@NgModule({
  imports: [RouterModule.forRoot((appRouts))],
  exports: [RouterModule]

})
export class AppRoutingModule{
}
