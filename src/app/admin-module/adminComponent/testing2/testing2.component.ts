import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})
export class Testing2Component implements OnInit {
  Changebuttoncolor:Boolean = false
  ChangeColorProperty:Boolean = false
  color: Boolean = false
  Practice : Boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  changecolor(){
  this.Changebuttoncolor= !this.Changebuttoncolor
  
  }
  test(){
this.ChangeColorProperty = !this.ChangeColorProperty
   const a = ['Car','Bike',]
   let x = a;
   console.log(x)
  }
  
  test2(){
    this.color = !this.color

  }


  Practice1(){
    this.Practice=!this.Practice
  }
  
}
