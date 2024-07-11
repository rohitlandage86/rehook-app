import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ConnectMyBusinessComponent } from './connect-my-business/connect-my-business.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ConnectMyBusinessComponent
  ],
  imports: [
    // CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
   
  ]
})
export class AuthModule { }
