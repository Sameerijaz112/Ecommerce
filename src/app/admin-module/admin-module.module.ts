import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './adminComponent/dashboard/dashboard.component';
import { ProductComponent } from './adminComponent/product/product.component';
import { TestingComponentComponent } from './adminComponent/testing-component/testing-component.component';
import { ReactiveFormsModule } from "@angular/forms";
import {FormsModule  } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Testing2Component } from './adminComponent/testing2/testing2.component';
import { ProductAnalytisComponent } from './adminComponent/product-analytis/product-analytis.component';



@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    ProductComponent,
    TestingComponentComponent,
    Testing2Component,
    ProductAnalytisComponent,
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    
 
  
  ]
})
export class AdminModuleModule { }
