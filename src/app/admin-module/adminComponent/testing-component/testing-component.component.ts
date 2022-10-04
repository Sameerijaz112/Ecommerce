import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css']
})
export class TestingComponentComponent implements OnInit {
    myForm:FormGroup|any; //Model ko group kr k frontend k saat joorny k liyae 
  constructor(private  formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  myformmodel(){
    this.myForm = this.formBuilder.group({
      
    })
  }

}
