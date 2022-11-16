import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/servies/product.service';
@Component({
  selector: 'app-product-analytis',
  templateUrl: './product-analytis.component.html',
  styleUrls: ['./product-analytis.component.css']
})
export class ProductAnalytisComponent implements OnInit {
  Url='http://localhost:8888/'
  productArray:any = [];
  particularProductData:any = {};
  constructor(private _TosterServies:ToastrService, private ProductServies:ProductService) { }

  ngOnInit(): void {
    this.populateProductArray();
  }
  populateProductArray(){
    this.ProductServies.GetAllproduct().subscribe((ResponseComingFrombackend:any) => {
      ResponseComingFrombackend.Result.forEach((element:any) => {
        if(element.softDeleteStatus !== 1){
          this.productArray.push(element);
        }
      });
    })
}
getParticularData(_id:any){
  this.ProductServies.GetProductById(_id).subscribe((res:any) => {
    this.particularProductData = res.Result;
  })
}

deleteProduct(_id:any){
  this.ProductServies.DeleteProductById(_id).subscribe((res:any) => {
    this._TosterServies.error(res.Message);
    this.productArray = [];
    this.populateProductArray();
  })
}
}
