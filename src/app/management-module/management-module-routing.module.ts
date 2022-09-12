import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './management-component/admin-management/admin-login/admin-login.component';
import { AdminRegisterComponent } from './management-component/admin-management/admin-register/admin-register.component';
import { UserLoginComponent } from './management-component/admin-management/user-login/user-login.component';
import { UserRegisterComponent } from './management-component/admin-management/user-register/user-register.component';


import { ManagementModuleComponent } from './management-module.component';

const routes: Routes = [{ path: '', component: ManagementModuleComponent,
children:[
  {path:"Admin-login", component:AdminLoginComponent },
  {path:'Admin-Register', component:AdminRegisterComponent},
  {path:'User-Login' , component:UserLoginComponent },
  {path:'User-Register', component:UserRegisterComponent},
  

] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
