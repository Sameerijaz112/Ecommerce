import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TestingService } from 'src/app/shared/servies/testing.service';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css']
})
export class TestingComponentComponent implements OnInit {
  
  Showdata:string='';
  myForm:FormGroup|any; //Model ko group kr k frontend k saat joorny k liyae 
  constructor(private  formBuilder:FormBuilder, private testingServies:TestingService) {
    
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
  Getpostdata(){
    
   this.testingServies.getmydatatobackend().subscribe((responcfrombackend:any) => {
    this.Showdata = responcfrombackend.Result;
   })
  }
  SubmitmyForm(){
    let FormValue = this.myForm.value;
    this.testingServies.postmydatatobackend(FormValue).subscribe((responcfrombackend:any) => {
      responcfrombackend;
    } 
    )
  }

}
