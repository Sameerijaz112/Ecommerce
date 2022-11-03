import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
  


  constructor(private formbuilder:FormBuilder) { 
    this.FormProductModel()
  }

  ngOnInit(): void {
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
  this.newSizeArray = this.newSizeArray.filter((value:any) => ! event.target.value)
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
}
}
/* MultipartformDAta */
let MultiPartFormData = new FormData();
MultiPartFormData.append('productName', this.);


