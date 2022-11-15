import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/servies/product.service';
@Component({
  selector: 'app-product-analytis',
  templateUrl: './product-analytis.component.html',
  styleUrls: ['./product-analytis.component.css']
})
export class ProductAnalytisComponent implements OnInit {

  constructor(private _TosterServies:ToastrService, private ProductServies:ProductService) { }

  ngOnInit(): void {
  }

}
