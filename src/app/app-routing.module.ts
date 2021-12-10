import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { KeranjangComponent } from './components/keranjang/keranjang.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/albarrmart/home', pathMatch: 'full' },
  { path: 'albarrmart/home', component: HomeComponent },
  { path: 'albarrmart/about', component: AboutComponent },
  { path: 'albarrmart/product', component: ProductComponent },
  { path: 'albarrmart/keranjang', component: KeranjangComponent },
  { path: 'albarrmart/login', component: LoginComponent },
  { path: 'albarrmart/register', component: RegisterComponent },
  { path: '**', component: PagenotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
