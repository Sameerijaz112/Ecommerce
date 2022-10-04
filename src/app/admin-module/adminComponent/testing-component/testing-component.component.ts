import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css']
})
export class TestingComponentComponent implements OnInit {
    myForm:FormGroup|any; //Model ko group kr k frontend k saat joorny k liyae 
  constructor(private  formBuilder:FormBuilder) {
    this.myformmodel();
   }

  ngOnInit(): void {
  }
  myformmodel(){
    this.myForm = this.formBuilder.group({
      email: new FormControl(''),//Aik Form ke input ko FormControl kehty hein
      password: new FormControl('')
    })
  }
  SubmitmyForm(){
    let FormValue = this.myForm.value;
  }

}
