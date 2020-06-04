import { Component, OnInit } from '@angular/core';
import { LoanformService } from '../loanform.service';

@Component({
  selector: 'app-view-loanform',
  templateUrl: './view-loanform.component.html',
  styleUrls: ['./view-loanform.component.css']
})
export class ViewLoanformComponent implements OnInit {
  form;
  pageNo=0;
  itemsPerPage=2;
  totalItems;
  fieldName;
  searchValue;
  searchBy="fullName";
  constructor(public service:LoanformService) { }

  ngOnInit(): void {
    this.service.getform(this.pageNo,this.itemsPerPage, null).subscribe(data =>{
      console.log(data);
      this.form=data.content;
      this.totalItems=data.totalElements;
    })
  }

  getForms(fieldName){
    this.service.getform(this.pageNo,this.itemsPerPage,fieldName ).subscribe(data =>{
      console.log(data);
      this.form=data.content;
      this.totalItems=data.totalElements;
    })
  }
  getNextPageItems(event){
    console.log(event);
    this.pageNo=event.pageIndex;
    this.itemsPerPage=event.pageSize;
    this.getForms(this.fieldName);
  }

  getSortedData(){
    console.log(this.fieldName);
    this.getForms(this.fieldName);
  }

}
