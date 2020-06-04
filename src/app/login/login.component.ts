import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  constructor(private registerService:RegisterService,
    private router:Router) { }


 login(form:NgForm){
   console.log(form.value);
   this.registerService.loginUser(form.value).subscribe(response=>{
     console.log(response);
     if(response.error){
       this.message=response.message;
       setTimeout( ()=>{
        this.message=null;
       },5000);
     }else{
       localStorage.setItem('userData',JSON.stringify(response));
       if (response.role === 'ROLE_ADMIN') {
        this.router.navigateByUrl('/viewapplicant');
       } else if(response.role === 'ROLE_CUSTOMER'){
        this.router.navigateByUrl('/loanform');
       }else if(response.role === 'ROLE_LAD'){
        this.router.navigateByUrl('/viewapplicant');
       }
     }
   });
 }
  
  ngOnInit() {
  }

}
