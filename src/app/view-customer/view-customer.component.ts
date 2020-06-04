import { Component, OnInit } from '@angular/core';
import { LoanformService } from '../loanform.service';
import { Router } from '@angular/router';
export let applicant = {
  "fullName":" ",
  "password": " ",
  "email":" ",
  "gender":" ",
  "age":" ",
  "mobileNumber":0,
  "panNumber":0,
  "loanType":"",
  "address":"",
  "loanAmount":"",
  "salary":"", 
  "applicationStatus":"",
  "role":" ",
    "applicant":[{
       "loanType":"",
       "loanAmount":0,
       "applicationStatus":""}]

}
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  loanform;
  searchValue;
  searchBy='fullName';
  message:string;
  pageNo;
  itemsPerPage=2;
  totalItems;
  fieldName;
  constructor( private loanformService:LoanformService,
    private router: Router) { 
      this.getClient(this.fieldName);
    }

  ngOnInit():void {
    this.loanformService.getCustomerByPage(this.pageNo,this.itemsPerPage,null).subscribe(response=>{
      console.log(response);
      this.loanform=response.content;
      this.totalItems=response.totalElements;
    })
  }
  getClient(fieldName){
    this.loanformService.getCustomerByPage(this.pageNo,this.itemsPerPage,fieldName).subscribe(response=>{
      console.log(response);
      this.loanform=response.content;
      this.totalItems=response.totalElements;
    });
  }
  getNextPageItems(event) {
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getClient(null);
  }
  getSortedData() {
    console.log(this.fieldName);
    this.getClient(this.fieldName);
  }
}
