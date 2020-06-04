import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserformService {

  constructor(public http:HttpClient) { }
  postData(user){
    return this.http.post<any>('http://localhost:8080/api/user',user);
  }
}
