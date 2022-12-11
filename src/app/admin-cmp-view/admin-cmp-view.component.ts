import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-cmp-view',
  templateUrl: './admin-cmp-view.component.html',
  styleUrls: ['./admin-cmp-view.component.css']
})
export class AdminCmpViewComponent {
  // userId:any=""
  // constructor(private api:ApiService){
  //   this.userId=localStorage.getItem("userinfo")
  //   let data:any={"id":this.userId}
    
  //   this.api.userProfile(data).subscribe(
  //     (response:any)=>{
  //       console.log(response)
  //       this.data=response
  //     }
  //   )

  // }

  // data:any=[]

  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userinfo")
    let data:any={"id":this.userId}
    
    this.api.admincmpview(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response
      }
    )

  }

  data:any=[]

}



