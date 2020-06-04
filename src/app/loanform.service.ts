import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanformService {
      backendUrl='http://localhost:8080/api/form';
  constructor(public http:HttpClient ) { }

  getLoanForm(){
    return this.http.get<any>(`${this.backendUrl}`);
  }
  getform(pageNo,itemsPerPage , sortBy){
    if(!sortBy){
      return this.http.get<{content:any[], totalElements: number}>(`${this.backendUrl}/${pageNo}/${itemsPerPage}`);
    }else{
      return this.http.get<{content:any[], totalElements: number}>(`${this.backendUrl}/${pageNo}/${itemsPerPage}/${sortBy}`);
    }
  }
  postData(loanForm){
   
    return this.http.post<any>('http://localhost:8080/api/form/add',loanForm);
  }

  getData(applicant){
    return this.http.get<any>('http://localhost:8080/api/loanapplication');
  }
  updateApprove(applicant){
return this.http.put<any>(`http://localhost:8080/api/loanapplicationapprove/${applicant.appId}`,applicant);
  }
  updateReject(applicant){
return this.http.put<any>(`http://localhost:8080/api/loanapplicationreject/${applicant.appId}`,applicant);
  }
  getCustomerByPage(pageNo, itemsPerPage,sortBy) {
    if (!sortBy) {
      return this.http.get<{ content: any[], totalElements: number }>(`http://localhost:8080/api/getCustomer/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{ content: any[], totalElements: number }>(`http://localhost:8080/api/getSortCustomer/${pageNo}/${itemsPerPage}/${sortBy}`);
    }
  }  
}
