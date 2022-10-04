import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './adminComponent/dashboard/dashboard.component';
import { ProductComponent } from './adminComponent/product/product.component';
import { TestingComponentComponent } from './adminComponent/testing-component/testing-component.component';


const routes: Routes = [{ path: '', component: AdminModuleComponent,
children:[
  {path:'admin-dashboard',component:DashboardComponent},
  {path:'testing-component',component:TestingComponentComponent },
 {path: 'products',component:ProductComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
