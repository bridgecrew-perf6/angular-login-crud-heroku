import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signinData';
import { AuthenticationService } from '../service/authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  msg:String = '';

  empleados = [
    {'brm': 'BRM15690','password':' 123456'}
  ];

  model:any = {};
  hideUpdate: boolean = true;

  isFormInvalid = false;
  areCredentialsInvalid = false; 

  constructor(private authenticationService:AuthenticationService){}

  ngOnInit():void{

  }

  onSumbit(signInForm: NgForm){
    console.log(signInForm.value);
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    this.authenticationService.authenticate(signInData);
  }

}
