import { Component, OnInit } from '@angular/core';
import { AddclientsService } from '../addclients.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {
message:string;
  constructor(private service: AddclientsService) { }

  ngOnInit() {
  }

  postClient(form:NgForm){
    this.service.postData(form.value).subscribe(response=>{
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
