import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/servies/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Url='http://localhost:8888/'
  AllProducts:any = [];
data: any;
  constructor(private ProductServies:ProductService) { }

  ngOnInit(): void {
    this.ProductServies.GetAllproduct().subscribe((ResponseComingFromBackEnd:any) => {
      this.AllProducts = ResponseComingFromBackEnd.Result;
    })
  
  }

}
