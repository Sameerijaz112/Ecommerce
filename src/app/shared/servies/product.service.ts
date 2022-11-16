import { Injectable } from '@angular/core';
import {HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  constructor(private Httpclient:HttpClient) { }
  CreatProductcard(payload:any){
    return this.Httpclient.post('http://localhost:8888/ProductManagement/ProductData',payload);
  }
  GetAllproduct(){
    return this.Httpclient.get('http://localhost:8888/ProductManagement/Getproduct')
  }
  GetProductById(_id:any){
    return this.Httpclient.get(`http://localhost:8888/ProductManagement/GetProductById/${_id}`)
  }
  DeleteProductById(_id:any){
    return this.Httpclient.delete(`http://localhost:8888/ProductManagement/DeleteProductById/${_id}`);
  }
}
