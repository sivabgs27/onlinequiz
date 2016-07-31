import { Component, } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {NgModel} from '@angular/forms';
//import * as moment_ from 'moment';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { NgForm }    from '@angular/forms';

import { UserRegistrationService } from './user_reg.service';


/**
 * UserDetails
 */
  


@Component({
    selector: 'register-user',
    providers: [UserRegistrationService],
     directives: [DATEPICKER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES,NgModel],
    templateUrl:'./client_side/app/user_registration/user.html'
                                                                   
})

export class UserRegistrationComponent{
  
constructor(private rr:UserRegistrationService) {
    
}

  public dt:Date = new Date();

  message: any;
  area = ['Doha','Test'];
  user:Object={};
  
 

  onSubmitTemplateBased() {
        this.rr.registerUser(this.user).subscribe(
                data => this.message = data.text, // put the data returned from the server in our variable
               // error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );
    }

   
  
 
}