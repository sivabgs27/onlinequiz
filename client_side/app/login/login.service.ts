import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injector} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()

export class LoginService {
 http:Http;
 API_URL: string = 'http://104.237.131.101:8081/user_login';
 constructor(http:Http)
 {
   this.http=http;
 }

 login(cred){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    

    let options = new RequestOptions({ headers: headers, method: "post" });
   let result= this.http.post(this.API_URL, cred,options)
      .map(response => response.json())
     .catch(this.handleError);
     console.log("re===="+result);
     return result;

  }

  private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }


}