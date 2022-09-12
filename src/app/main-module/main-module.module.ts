import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { HomeComponent } from './Home/home/home.component';
import { ProductComponent } from './product/product/product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderFailedComponent } from './order-failed/order-failed.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ViewProductComponent,
    CheckOutComponent,
    OrderFailedComponent,
    WildCardComponent,
    OrderSuccessfulComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
