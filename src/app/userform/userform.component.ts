import { Component, OnInit } from '@angular/core';
import { UserformService } from '../userform.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
message:string;
  constructor(private userService: UserformService) { }

  ngOnInit() {
  }

  postUser(form:NgForm){
    this.userService.postData(form.value).subscribe(response=>{
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
