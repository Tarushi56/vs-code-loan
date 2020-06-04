import { Component, OnInit } from '@angular/core';
import { LoanformService } from '../loanform.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export let apply={
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
       "applicationStatus":""
     }]  
}

@Component({
  selector: 'app-loanform',
  templateUrl: './loanform.component.html',
  styleUrls: ['./loanform.component.css']
})
export class LoanformComponent implements OnInit {
  message:any;
  defaultApplicationStatus ="Requested";
  defaultValue="ROLE_CUSTOMER";
  defaultPassword="Qwerty@1";
  constructor(private service:LoanformService,
    private router:Router) { }

  ngOnInit() {
  }

  postForm(form:NgForm){
    apply.fullName=form.value.fullName;
    apply.password=form.value.password;
    apply.email=form.value.email;
    apply.gender=form.value.gender;
    apply.age=form.value.age;
    apply.mobileNumber=form.value.mobileNumber;
    apply.panNumber=form.value.panNumber;
    apply.loanType=form.value.loanType;
    apply.address=form.value.address;
    apply.loanAmount=form.value.loanAmount;
    apply.salary=form.value.salary;
    apply.applicant[0].loanAmount=form.value.loanAmount;
    apply.applicant[0].loanType=form.value.loanType;
    apply.applicant[0].applicationStatus=form.value.applicationStatus;

    this.service.postData(apply).subscribe(response=>{
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
