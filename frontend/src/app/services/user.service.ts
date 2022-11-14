import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../auth/user';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint   =  'http://192.168.1.94:8080/api/users';

  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }


  getUsers(token) {
    const myOptions = this.getOptions(token);
    return this.httpClient.get(this.endpoint, myOptions);

  }
  private getOptions(token){

    const bearerAccess = 'Bearer ' + token;

    const options = {
      headers: {
        'Authorization' : bearerAccess,
        // 'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };

    return options;
  }

}
