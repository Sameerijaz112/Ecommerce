import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './adminComponent/dashboard/dashboard.component';
import { ProductComponent } from './adminComponent/product/product.component';
import { TestingComponentComponent } from './adminComponent/testing-component/testing-component.component';
import { ReactiveFormsModule } from "@angular/forms";
import {FormsModule  } from "@angular/forms";
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    ProductComponent,
    TestingComponentComponent,
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ReactiveFormsModule,
 
  
  ]
})
export class AdminModuleModule { }
