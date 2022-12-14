import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/servies/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('FilesSelect') FileSelect: ElementRef | any
  color:any=["Red","Black","Blue"]
  selectSize:any=['small', 'medium' ,'large','xlarge'];
  categoryArray:any=['Men','Female']
  newSizeArray: any = [];
  imageArray: any = [];
  disableButtonTrue: boolean = false;
  ProductForm:FormGroup|any 
  Url='http://localhost:8888/'
  Allproducts:any=[]
  
  constructor(private formbuilder:FormBuilder, private productservices:ProductService, private Tostr:ToastrService) { 
    this.FormProductModel()
  }
  ngOnInit(): void {
    this.productservices.GetAllproduct().subscribe((ResponseComingFromBackend:any)=>{
      this.Allproducts= ResponseComingFromBackend.Result;
    })
  }
FormProductModel(){
  this.ProductForm=this.formbuilder.group({
    productName:  new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    productQuantity:new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    productPrice: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    productMaterial: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    logoMaterial: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    size:new FormArray([]),
    color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    category:new FormControl('', Validators.required),
  })
}
getSize(event: any ){
if (event.target.checked) {
  this.newSizeArray.push(event.target.value)
} else {
  this.newSizeArray = this.newSizeArray.filter((_value:any) => ! event.target.value)
} 
}

getimages(event: any){

if (event.target.files.length <= 5) {
  [... event.target.files].forEach(file => this.imageArray.push(file));
  this.imageArray;
} else {
  this.imageArray = [];
  this.FileSelect.nativeElement.value= null;
  this.disableButtonTrue = true;
}

}

formSubmit(){
 this.newSizeArray.forEach((element: string) => {
  let formControl = new FormControl(element)
  this.ProductForm.get("size").push(formControl)

 });
 /* MultipartformDAta */
 let MultiPartFormData = new FormData();
    MultiPartFormData.append(' productName',this.ProductForm.get(' productName').value)
    MultiPartFormData.append('productQuantity', this.ProductForm.get('productQuantity').value);
    MultiPartFormData.append('productPrice', this.ProductForm.get('productPrice').value);
    MultiPartFormData.append('description', this.ProductForm.get('description').value);
    MultiPartFormData.append('color', this.ProductForm.get('color').value);
    MultiPartFormData.append('category', this.ProductForm.get('category').value);
    MultiPartFormData.append('size', this.ProductForm.get('size').value);
    MultiPartFormData.append('productMaterial', this.ProductForm.get('productMaterial').value);
    this.imageArray.forEach((ImagesData: any) => {
      MultiPartFormData.append('images', ImagesData);
      this.productservices
      
    });
    this.productservices.CreatProductcard(MultiPartFormData).subscribe((ResponseComingFromBackend: any) => {
     if (ResponseComingFromBackend.Data === true) {
      this.Tostr.success(ResponseComingFromBackend.Message)
     } else {
      this.Tostr.error(ResponseComingFromBackend.Message)
     }
      this.ProductForm.reset();
      this.FileSelect.nativeElement.value = null;
    })
}
 
}




