import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({ //Run time pr inject kr skty hein with the help of dependency injection
  providedIn: 'root'
})
export class TestingService {

  constructor(private Httpclient:HttpClient) { } //HttpClient k use sy hum Post Get or dosry Http k option use kr skty hein//or network k oper data bhejta hai HttpClient
  postmydatatobackend (payload:any) {
  return this.Httpclient.post('http://localhost:5555/formValue/formApi',payload)
  }
  getmydatatobackend(){
    return this.Httpclient.get('http://localhost:5555/formValue//GetData')
  }
  updatemydatatobackend(){
    return
  }
  deletemydatatobackend(){
    return
  }
}
