import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient, private router:Router) { }
  registerUser(loanForm){
    return this.http.post<any>('http://localhost:8080/api/form/add',loanForm);
  }
  loginUser(loanForm){
    return this.http.post<any>('http://localhost:8080/api/login',loanForm);

  }
  isUser():boolean{
    const userData=JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.role ==='ROLE_CUSTOMER') {
      return true;
    } else {
      return false;
    }
  }
  isAdmin():boolean{
    const userData=JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.role ==='ROLE_ADMIN') {
      return true;
    } else {
      return false;
    }
  }
  isLAD():boolean{
    const userData=JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.role ==='ROLE_LAD') {
      return true;
    } else {
      return false;
    }
  }
  islogged():boolean{
    const userData=JSON.parse(localStorage.getItem('userData'));
    if (userData ) {
      return true;
    } else {
      return false;
    }
  }
  
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
