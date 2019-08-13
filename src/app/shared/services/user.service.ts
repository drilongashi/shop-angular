import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRegisterModel} from '../models/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn = false;

  constructor(private httpClient: HttpClient) { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string) {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        this.loggedIn = true;
        resolve('ok');
      }, 2000);
    }));
    // return this.httpClient.post('/auth/login', { email, password});
  }

  register(payload: UserRegisterModel) {
    return this.httpClient.post<UserRegisterModel>('http://157.230.109.179:8080/shop/v1/customers', payload);
  }
}
