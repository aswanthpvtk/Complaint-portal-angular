import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserNavComponent } from './user-nav/user-nav.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"ul",
    component:UserLoginComponent
  },
  {
    path:"ur",
    component:UserRegComponent
  },
  {
    path:"uf",
    component:UserinfoComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegComponent,
    UserLoginComponent,
    MainNavComponent,
    UserinfoComponent,
    UserNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
