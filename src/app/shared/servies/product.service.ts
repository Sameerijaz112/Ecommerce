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
}
