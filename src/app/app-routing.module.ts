import {NgModel} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {ProductRowComponent} from './components/featuredProduct/product-row/product-row.component';
import {ContactFormComponent} from './components/ContactPage/contact-form/contact-form.component';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/loginPage/login/login.component';
import {WarrantyComponent} from './components/warrantyPage/warranty/warranty.component';
const appRouts: Routes =[
  {path:'products', component: ProductRowComponent},
  {path: 'contact-us', component: ContactFormComponent},
  {path:'login', component:LoginComponent},
  {path:'warranty',component:WarrantyComponent},
  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path:'home', component:HomeComponent}
]
@NgModule({
  imports:[RouterModule.forRoot((appRouts))],
  exports:[RouterModule]

})
export class AppRoutingModule{
}
