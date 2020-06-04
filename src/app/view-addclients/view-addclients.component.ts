import { Component, OnInit } from '@angular/core';
import { AddclientsService } from '../addclients.service';

@Component({
  selector: 'app-view-addclients',
  templateUrl: './view-addclients.component.html',
  styleUrls: ['./view-addclients.component.css']
})
export class ViewAddclientsComponent implements OnInit {
 client;
 pageNo=0;
 itemsPerPage=2;
 totalItems;
 fieldName;
 searchValue;
 searchBy="fullName";
 message:string;
  constructor(public service: AddclientsService) { }

  ngOnInit() {
    this.service.getClients(this.pageNo,this.itemsPerPage,null).subscribe(data=>{
      console.log(data);
      this.client=data.content;
      this.totalItems=data.totalElements;
    })  
  }
  getClients(fieldName){
    this.service.getClients(this.pageNo,this.itemsPerPage,fieldName).subscribe(data=>{
      console.log(data);
      this.client=data.content;
      this.totalItems=data.totalElements;
    })
  }
  getNextpageItems(event){
    console.log(event);
    this.pageNo=event.pageIndex;
    this.itemsPerPage=event.pageSize;
    this.getClients(this.fieldName);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getClients(this.fieldName);
  }
  deleteClient(client){
    this.service.deleteData(client).subscribe(response=>{
      console.log(response);
      if(response.error=== false){
        this.getClients(null);
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000);
        }
    });
  }
}
