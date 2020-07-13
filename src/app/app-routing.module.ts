import {NgModel} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {ContactFormComponent} from './components/ContactPage/contact-form/contact-form.component';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/loginPage/login/login.component';
import {WarrantyComponent} from './components/warrantyPage/warranty/warranty.component';
import {ProductPageComponent} from './components/productPage/product-page/product-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {AuthGuard} from './services/auth.guard';
const appRouts: Routes = [
  {path: 'products', component: ProductPageComponent},
  {path: 'contact-us', component: ContactFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'warranty', component: WarrantyComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot((appRouts))],
  exports: [RouterModule]

})
export class AppRoutingModule{
}
