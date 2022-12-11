import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-cmp',
  templateUrl: './add-cmp.component.html',
  styleUrls: ['./add-cmp.component.css']
})
export class AddCmpComponent {

  complaint=""

  constructor(private api:ApiService){}
  readValues=()=>

  {
    let data:any={"userId":localStorage.getItem("userinfo"),"complaint":this.complaint}
    this.api.usercmp(data).subscribe(
      (generated:any)=>{
        console.log(generated)
      }
    )


  }



  }

