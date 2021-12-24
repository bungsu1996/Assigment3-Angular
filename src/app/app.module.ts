import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
import { KeranjangComponent } from './components/keranjang/keranjang.component';
import { ProductpilihanComponent } from './components/home/productpilihan/productpilihan.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Productpilihan2Component } from './components/home/productpilihan2/productpilihan2.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { DetailproductComponent } from './components/product/detailproduct/detailproduct.component';
import { AngularMaterialModule } from './angular-materiial.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    RegisterComponent,
    PagenotFoundComponent,
    KeranjangComponent,
    ProductpilihanComponent,
    BannerComponent,
    Productpilihan2Component,
    DetailproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularMaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
