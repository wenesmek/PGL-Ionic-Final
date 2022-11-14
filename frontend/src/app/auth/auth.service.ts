import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from  'rxjs/operators';
import { AuthResponse } from './auth-response';
import { User } from './user';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  endpoint  =  'http://localhost:8080/api/users/';

  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }



  register(user: User): Observable<AuthResponse> {

    return this.httpClient.post<AuthResponse>(this.endpoint, {id: user.id, name: user.name, username: user.username, password: user.password }, this.getRegisterOptions(user)).pipe(
      tap(async (res:  AuthResponse ) => {

        if (res.user) {
          await this.storage.set('token', res.access_token);
          await this.storage.set('name', res.user.name);
        }
      })

    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(this.endpoint, null, this.getOptions(user)).pipe(
      tap(async (res: AuthResponse) => {

        if (res.user) {
          await this.storage.set('token', res.access_token);
          await this.storage.set('name', res.user.name);

        }
      })
    );
  }

  async logout() {
    await this.storage.remove('token');
  }

  async isLoggedIn() {
    // return this.authSubject.asObservable();
    const token = await this.storage.get('token');
    if (token){ //Just check if exists. This should be checked with current date
      return true;
    }
    return false;
  }

  private getOptions(user: User){
    const base64UserAndPassword = window.btoa(user.username + ':' + user.password);

    const basicAccess = 'Basic ' + base64UserAndPassword;

    const options = {
      headers: {
        'Authorization' : basicAccess,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };
    return options;
  }

  private getRegisterOptions(user: User){
    const base64UserAndPassword = window.btoa(user.username + ':' + user.password);

    const basicAccess = 'Basic ' + base64UserAndPassword;

    const options = {
      headers: {
        'Authorization' : basicAccess,
        'Content-Type' : 'application/json',
      }
      //, withCredentials: true
    };
    return options;
  }
}
