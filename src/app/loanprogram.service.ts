import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoanprogramService {
   backendUrl="http://localhost:8080/api/loan";
  constructor(public http:HttpClient) { }
  getAllProgram(){
    return this.http.get(`${this.backendUrl}`);
  }
  getPrograms(pageNo, itemsPerPage,sortBy){
    if(!sortBy){
      return this.http.get<{content:any,totalElements:number}>(`${this.backendUrl}/${pageNo}/${itemsPerPage}`);
    }else{
      return this.http.get<{content:any,totalElements:number}>(`${this.backendUrl}/${pageNo}/${itemsPerPage}/${sortBy}`);
    }
  }
  postData(loanprogram){
    return this.http.post<any>('http://localhost:8080/api/loan/add-loan',loanprogram);
  }
  deleteData(loanprogram){
    return this.http.delete<any>(`http://localhost:8080/api/loan/delete/${loanprogram.loanType}`);
  }
}
