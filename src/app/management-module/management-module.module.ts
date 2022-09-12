import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { AdminLoginComponent } from './management-component/admin-management/admin-login/admin-login.component';
import { AdminRegisterComponent } from './management-component/admin-management/admin-register/admin-register.component';
import { UserLoginComponent } from './management-component/admin-management/user-login/user-login.component';
import { UserRegisterComponent } from './management-component/admin-management/user-register/user-register.component';





@NgModule({
  declarations: [
    ManagementModuleComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserLoginComponent,
    UserRegisterComponent,

  
  
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule
  ]
})
export class ManagementModuleModule { }
