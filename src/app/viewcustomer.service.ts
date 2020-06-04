import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewcustomerService {

  constructor(private http:HttpClient, private router:Router) { }
  getCustomerByPage(pageNo, itemsPerPage, sortBy) {
    if (!sortBy) {
      return this.http.get<{ content: any[], totalElements: number }>(`http://localhost:8080/api/getCustomer/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{ content: any[], totalElements: number }>(`http://localhost:8080/api/getSortCustomer/${pageNo}/${itemsPerPage}/${sortBy}`);
}}}
