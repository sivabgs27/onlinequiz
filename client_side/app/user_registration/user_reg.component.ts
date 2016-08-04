import { Component, } from '@angular/core';
import {CORE_DIRECTIVES,NgIf} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {NgModel} from '@angular/forms';

import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { NgForm }    from '@angular/forms';

import { UserRegistrationService } from './user_reg.service';


/**
 * UserDetails
 */
  


@Component({
    selector: 'register-user',
    providers: [UserRegistrationService],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES,NgModel,NgIf],
    templateUrl:'./client_side/app/user_registration/user.html',
    styleUrls:['client_side/app/user_registration/user_reg.component.css']
                                                                   
})

export class UserRegistrationComponent{
  
  
constructor(private rr:UserRegistrationService) {
    
    
}

  public dt:Date = new Date();

  message: Object={};
  area = ['Doha','Test'];

  Area:string='0';
  C_Area:string='0';
  Reference:string;

  user:Object={};
  
  
 

  onSubmitTemplateBased() {
        this.rr.registerUser(this.user).subscribe(
                data => this.message = {}, // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );
    }

   
  
 
}