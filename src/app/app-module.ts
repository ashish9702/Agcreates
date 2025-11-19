import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import {  EcomHomeComponent } from './ecomPages/home/home';
import { Product } from './ecomPages/services/product';
import { HomeComponent } from './home-component/home-component';



@NgModule({
  declarations: [],
  imports: [
    App,
    Navbar,
    EcomHomeComponent,
    HomeComponent,
  ],
  providers:[
    Product
  ]
})
export class AppModule { }
