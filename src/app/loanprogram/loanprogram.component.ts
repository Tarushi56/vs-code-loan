import { Component, OnInit } from '@angular/core';
import { LoanprogramService } from '../loanprogram.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loanprogram',
  templateUrl: './loanprogram.component.html',
  styleUrls: ['./loanprogram.component.css']
})
export class LoanprogramComponent implements OnInit {
message:string;
  constructor(private loanProgramService:LoanprogramService) { }

  ngOnInit() {
  }
postProgram(form:NgForm){
  this.loanProgramService.postData(form.value).subscribe(response=>{
    console.log(response);
    if(response.error===false){
      this.message=response.message;
      setTimeout(()=> {
        this.message=null;
      }, 6000);

    }
    form.reset();
  });
}
}
