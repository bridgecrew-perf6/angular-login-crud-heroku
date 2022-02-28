import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './service/authentication/authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-crud';
  msg:String = '';

  constructor(public authenticationService:AuthenticationService){ }
  
  ngOnInit():void{

  }

  
/* 
  empleados = [
    {'brm': 'BRM15690','password':' 123456'}
  ];

  isFormInvalid = false;
  areCredentialsInvalid = false;

  

  model:any = {};
  hideUpdate: boolean = true;

 myValue: any
  addlogin():void {
    this.empleados.push(this.model);
    let i = this.myValue;
    var answer = confirm('Usuario Iniciado, Bienvenido!');
    if(answer){
      this.empleados.splice(i,1);
    }

  } 

  
  onSumbit(signInForm: NgForm):void{
    if(!signInForm.valid){
      this.isFormInvalid =true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);
   console.log(signInForm.value); 
    const signInData = new SignInData(signInForm.value.email,signInForm.value.password); 
  }

  private checkCredentials(signInForm:NgForm){
    const signInData = new SignInData(signInForm.value.email,signInForm.value.password);
    if(!this.authenticationService.authenticate(signInData)){
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }
  }
  */
}
