import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent],
  exports: [
    HttpClientModule,
    LoginComponent
  ]
})
export class CoreModule { }
