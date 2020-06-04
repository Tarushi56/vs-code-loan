import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
message:string;
  constructor(private registerService:RegisterService) { }

  ngOnInit() {
  }
  register(form:NgForm){
    console.log(form.value);
    this.registerService.registerUser(form.value).subscribe(data=>{
      console.log(data);
      form.reset();
      this.message=data.message;
      setTimeout( ()=>{
        this.message=null;
      },5000);
    });
  }
  
}
