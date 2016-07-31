import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions,HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injector} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()

export class UserRegistrationService {
 http:Http;
 API_URL: string = 'http://localhost:8080/user';
 constructor(http:Http)
 {
   this.http=http;
 }
 registerUser(user:Object) {
    let data = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method: "post" });
   return this.http.post(this.API_URL, data,options)
      .map(res => res.json())
     .catch(this.handleError);
  }

  private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}