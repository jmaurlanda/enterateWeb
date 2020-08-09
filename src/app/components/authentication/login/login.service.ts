import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../../utils/constants';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: Users;

  constructor(
    private _http: HttpClient
  ) {
    this.users = new Users(this.users);
  }

  async validateUser(userName: String): Promise<any> {
    try {
      
      this.users.login = userName;

      const url = `${Constants.API_ENDPOINT}${Constants.USERS_ENDPOINT}${Constants.VALIDATE_USER_ENDPOINT}`;
      const result = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(this.users)
      });

      const response = await result.json();
      return response;

    }
    catch (error) {
      console.log(error);
    }
  }

  async authenticateUser(userName: String, password: String): Promise<any> {

    try {

      this.users.login = userName;
      this.users.password = password;

      const url = `${Constants.API_ENDPOINT}${Constants.USERS_ENDPOINT}${Constants.AUTHENTICATE_USER_ENDPOINT}`;
      const result = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(this.users)
      });

      const response = await result.json();
      return response;

    }
    catch (error) {
      console.log(error);
    }
  }

  async recoverPassword(userName: String): Promise<any> {
    try {

      this.users.login = userName;

      const url = `${Constants.API_ENDPOINT}${Constants.USERS_ENDPOINT}${Constants.RECOVERYPASSWORD_USER_ENDPOINT}`;
      const result = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(this.users)
      });

      const response = await result.json();
      return response;

    }
    catch (error) {
      console.log(error);
    }
  }
}
