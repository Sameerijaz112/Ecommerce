import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './Home/home/home.component';
import { MainModuleComponent } from './main-module.component';
import { ProductComponent } from './product/product/product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,
children:[
  {path:'', component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'view-product',component:ViewProductComponent},
  {path:'check-out',component:CheckOutComponent},
  {path:'Contact',component:ContactUsComponent},
  {path:'About',component:AboutUsComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
