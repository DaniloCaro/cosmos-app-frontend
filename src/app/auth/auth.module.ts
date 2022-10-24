import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Subroutingmodule
import { AuthRoutingModule } from './auth-routing.module';
//Components
import { LoginPageComponent } from './pages/login-page/login-page.component';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
