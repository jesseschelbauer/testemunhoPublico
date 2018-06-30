import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  public login(user: any) {
    return this.http.post<object>("http://testemunhopublicoapi20180622100828.azurewebsites.net/Account/Login", user).map((user:any) => {
      if (user && user.authenticated && user.accessToken) {
          localStorage.setItem('currentUser', JSON.stringify(user));
      }else{
          localStorage.removeItem('currentUser');
      }
      return user;
  });
   
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

}
