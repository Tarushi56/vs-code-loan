import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../applicant.service';
import { Router } from '@angular/router';
import { LoanformService } from '../loanform.service';

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
  selector: 'app-viewapplicant',
  templateUrl: './viewapplicant.component.html',
  styleUrls: ['./viewapplicant.component.css']
})
export class ViewapplicantComponent implements OnInit {
 loanform;
 searchValue;
 searchBy='fullName';
 message:string;
 p: number = 1;
  constructor( private loanformService: LoanformService,
    private router: Router) { 
      this.getApplicant();
    }

    getApplicant(){
      this.loanformService.getLoanForm().subscribe(response=>{
        console.log(response);
        this.loanform=response;
      });
    }
  ngOnInit() {
  }
 selectApprove(applicant){
   this.loanformService.updateApprove(applicant).subscribe(response=>{
     console.log(response);
     if(response.error=== false){
       this.getApplicant();
       this.message=response.message;
       setTimeout(()=>{
         this.message=null;
       },5000);
     }
   });
 }
 selectReject(applicant){
   this.loanformService.updateReject(applicant).subscribe(response=>{
     console.log(response);
     if(response.error=== false){
      this.getApplicant();
      this.message=response.message;
      setTimeout(()=>{
        this.message=null;
      },5000);
    }
   });
 }

 updatePassword(applicant){
   this.router.navigate(['/edit-applicant'], {queryParams:applicant});
 }
//  getSortedData(){
//   // console.log(this.fieldName);
//    this.getPrograms(this.fieldName);}
}
