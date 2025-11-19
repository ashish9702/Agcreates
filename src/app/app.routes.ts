import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { App } from './app';
import {EcomHomeComponent } from './ecomPages/home/home';
import { HomeComponent } from './home-component/home-component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'home', component: Navbar },
     { path: 'ecom', component: EcomHomeComponent },
//   { path: 'about', component: AboutComponent }
];
