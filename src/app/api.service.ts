import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  adduser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/ureg",dataToSend)
  }

  ulogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/userLogin",dataToSend)
  }

  userProfile=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/userinfo",dataToSend)
  }
  usercmp=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/cmp",dataToSend)
  }

  admincmpview=(dataToSend:any)=>
  {
    return this.http.get("http://localhost:8080/cmpview")
  }



  

}
