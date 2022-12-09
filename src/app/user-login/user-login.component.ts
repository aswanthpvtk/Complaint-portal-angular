import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email=""
  psw=""

  // constructor(private api: ApiService, private route: Router) { }


  readValues=()=>
  {
    let data:any={"email":this.email,"psw":this.psw}
    console.log(data)

    // this.api.ulogin(data).subscribe(
    //   (response: any) => {
    //     this.email = ""
    //     this.psw = ""
    //     if (response.status == "success"){
    //       let userId=response.userId
    //       console.log(userId)
    //       localStorage.setItem("userinfo",userId)
          
    //       this.route.navigate(["/uf"])
    //     } else {
    //       alert(response.message)
    //     }
    //   }
    // )
  }

}
