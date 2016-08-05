import { Component } from '@angular/core';
import { Control,CORE_DIRECTIVES,NgIf } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { UserRegistrationService } from './user_reg.service';

import { ROUTER_DIRECTIVES } from '@angular/router';


/**
 * UserDetails
 */

export interface user{

  Name:string;
  Email:string;
  Dob:string;
  Sex:string;
  Work:string;
  Area:string;
  C_Area:string;
  Reference:string;
  Phone_No1:string;
  Phone_No2:string;
  Skill:string;


}
  
interface ValidationResult {
    [key: string]: boolean;
}  



@Component({
    selector: 'register-user',
    providers: [UserRegistrationService],

    directives: [CORE_DIRECTIVES, REACTIVE_FORM_DIRECTIVES,NgIf,ROUTER_DIRECTIVES],

    templateUrl:'./client_side/app/user_registration/user.html',
    styleUrls:['client_side/app/user_registration/user_reg.component.css']
                                                                   
})



export class UserRegistrationComponent {
  

   public myForm: FormGroup;
   public submitted: boolean=false;
   public events: any[] = [];
   

  showForm: boolean = true;

  
  
constructor(private rr:UserRegistrationService,private builder: FormBuilder) {
    

     this.myForm = this.builder.group({
             Name: ['', Validators.compose([<any>Validators.required, <any>Validators.minLength(5)])],
             Email:['', Validators.compose([<any>Validators.required,<any>Validators.minLength(5)])],
             Dob: ['', [<any>Validators.required]],
             Sex: ['', [<any>Validators.required]],
             Work: ['', [<any>Validators.required]],
             Area: ['0', [<any>Validators.required]],
             C_Area: ['0', [<any>Validators.required]],
             Reference: ['', [<any>Validators.required]],
             Phone_No1: ['', [<any>Validators.required]],
             Phone_No2: ['', [<any>Validators.required]],
             Skill: ['', [<any>Validators.required]]
             
        });
        this.subcribeToFormChanges();

}


  area = ['Doha','Test'];

    guser:user;
 
 
  message:String;

   subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;
        
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }
  
  

  

  onSubmit(model: user, isValid: boolean) {

       console.log(model);
       this.guser=model;
       
      let user = JSON.stringify(model);
      
        if(isValid)
        {
               this.rr.registerUser(user).subscribe(
                data => this.message =data.flag, // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );
              this.showForm=false;

        }
        else{
            this.submitted = true;
        }
       
              


      

    }

/*
validation fuctions

*/
     static mailFormat(control: Control): ValidationResult {

        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }



   
  
 
}