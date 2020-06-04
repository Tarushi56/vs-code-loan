import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { applicant } from './viewapplicant/viewapplicant.component';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(public http: HttpClient ) { }

  postData(applicants){
return this.http.post<any>('http://localhost:8080/api/loanapplication',applicants);
  }
  updateData(applicant){
return this.http.put<any>('http://localhost:8080/api/loanapplication',applicant);
  }
  
}
