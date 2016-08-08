import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';


const template = './client_side/app/profile/profile.component.html';

@Component({
  selector: 'profile',
  directives: [ CORE_DIRECTIVES ],
  templateUrl: './client_side/app/profile/profile.html',
  styles:['./client_side/app/profile/profile.component.css'] 
})
export class ProfileComponent {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.jwt = localStorage.getItem('id_token');
   
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }

 //  */E:\onlinequiz\client_side\app\profile\profile.component.html
}