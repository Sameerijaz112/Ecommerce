import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './adminComponent/dashboard/dashboard.component';
import { ProductAnalytisComponent } from './adminComponent/product-analytis/product-analytis.component';
import { ProductComponent } from './adminComponent/product/product.component';
import { TestingComponentComponent } from './adminComponent/testing-component/testing-component.component';
import { Testing2Component } from './adminComponent/testing2/testing2.component';


const routes: Routes = [{ path: '', component: AdminModuleComponent,
children:[
  {path:'admin-dashboard',component:DashboardComponent},
  {path:'testing-component',component:TestingComponentComponent },
 {path: 'products',component:ProductComponent},
 {path: 'testing2',component:Testing2Component},
 {path:'ProductAnalytics',component:ProductAnalytisComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
