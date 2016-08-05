import { Component, } from '@angular/core';
import {CORE_DIRECTIVES,NgIf} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {NgModel} from '@angular/forms';

import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { NgForm }    from '@angular/forms';

import { UserRegistrationService } from './user_reg.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * UserDetails
 */



@Component({
    selector: 'register-user',
    providers: [UserRegistrationService],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES,NgModel,NgIf,ROUTER_DIRECTIVES],
    templateUrl:'./client_side/app/user_registration/user.html',
    styleUrls:['client_side/app/user_registration/user_reg.component.css']
                                                                   
})

export class UserRegistrationComponent{
  
  showForm: boolean = true;
  
constructor(private rr:UserRegistrationService) {
    
    

}

  public dt:Date = new Date();

  message: Object={};
  area = ['Doha','Test'];

    
 
  Name:string;
  Email:string;
  Dob:string;
  Sex:string;
  work:string;
  Area:string='0';
  C_Area:string='0';
  Reference:string;
  Pho1:string;
  Pho2:string;
  Skill:string;
  
  
  
  

  onSubmitTemplateBased() {

      let user = JSON.stringify({ Name: this.Name, Email: this.Email, Dob: this.Dob, Sex:this.Sex,work:this.work,Area:this.Area,C_Area:this.C_Area,Reference:this.Reference,Pho1:this.Pho1,Pho2:this.Pho2,Skill:this.Skill });
        this.rr.registerUser(user).subscribe(
                data => this.message = {}, // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );

        this.showForm=false;
    }

   
  
 
}