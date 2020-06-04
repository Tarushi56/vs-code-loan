import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddclientsService {
  backendUrl="http://localhost:8080/api/client";
  constructor( public http: HttpClient) { }

  getAllClients(){
    return this.http.get(`${this.backendUrl}`);
  }
  getClients(pageNo,itemsPerPage,sortBy){
    if(!sortBy){
      return this.http.get<{content:any,totalElements:number}>(`${this.backendUrl}/${pageNo}/${itemsPerPage}`);
    }else{
      return this.http.get<{content:any,totalElements:number}>(`${this.backendUrl}/${pageNo}/${itemsPerPage}/${sortBy}`);
    } 
  }

  postData(client){
    return this.http.post<any>('http://localhost:8080/api/client/add',client);
  }
  deleteData(client){
    return this.http.delete<any>(`http://localhost:8080/api/client/delete/${client.email}`);
  }
}
