import {NgModel} from '@angular/forms';
import {Routes, RouterModule, Router, Scroll} from '@angular/router';
import {ContactFormComponent} from './components/ContactPage/contact-form/contact-form.component';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/loginPage/login/login.component';
import {WarrantyComponent} from './components/warrantyPage/warranty/warranty.component';
import {ProductPageComponent} from './components/productPage/product-page/product-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {AuthGuard} from './services/auth.guard';
import {ProductDeatilComponent} from './components/productPage/product-deatil/product-deatil.component';
import {OverviewComponent} from './components/productPage/product-detail/overview/overview.component';
import {DownloadComponent} from './components/productPage/product-detail/download/download.component';
import {SpecComponent} from './components/productPage/product-detail/spec/spec.component';
import {ViewportScroller} from '@angular/common';
import {filter} from 'rxjs/operators';
const appRouts: Routes = [
  {path: 'products', component: ProductPageComponent},
  { path: 'products/:id', component : ProductDeatilComponent,
  children: [
    {path: '', component: OverviewComponent},
    {path: 'overview', component: OverviewComponent},
    {path: 'download', component: DownloadComponent},
    {path: 'spec', component: SpecComponent}
  ]},
  {path: 'contact-us', component: ContactFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'warranty', component: WarrantyComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  // {path: '/assets/protected-info',  canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot((appRouts), {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]

})
export class AppRoutingModule{
  constructor(router: Router, viewportScroller: ViewportScroller) {

  }
}
