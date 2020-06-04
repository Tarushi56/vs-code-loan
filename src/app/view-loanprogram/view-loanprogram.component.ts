import { Component, OnInit } from '@angular/core';
import { LoanprogramService } from '../loanprogram.service';

@Component({
  selector: 'app-view-loanprogram',
  templateUrl: './view-loanprogram.component.html',
  styleUrls: ['./view-loanprogram.component.css']
})
export class ViewLoanprogramComponent implements OnInit {
 program;
 pageNo=0;
 itemsPerPage=2;
 totalItems;
 fieldName;
 searchValue;
 searchBy="fullName";
 message:string;

  constructor(public loanProgramService: LoanprogramService) { }

  ngOnInit():void {
    this.loanProgramService.getPrograms(this.pageNo,this.itemsPerPage,null).subscribe(data=>{
      console.log(data);
      this.program=data.content;
      this.totalItems=data.totalElements;
    })
  }
  getPrograms(fieldName){
    this.loanProgramService.getPrograms(this.pageNo,this.itemsPerPage,fieldName).subscribe(data=>{
      console.log(data);
      this.program=data.content;
      this.totalItems=data.totalElements;
    })
  }
  getNextpageItems(event){
    console.log(event);
    this.pageNo=event.pageIndex;
    this.itemsPerPage=event.pageSize;
    this.getPrograms(this.fieldName);
  }
  getSortedData(){
   // console.log(this.fieldName);
    this.getPrograms(this.fieldName);
  }
  deleteLoanprogram(loanprogram){
this.loanProgramService.deleteData(loanprogram).subscribe(response=>{
  console.log(response);
  if(response.error=== false){
    this.getPrograms(null);
    this.message=response.message;
    setTimeout(()=>{
      this.message=null;
    },5000);
    }
});
  }

}
