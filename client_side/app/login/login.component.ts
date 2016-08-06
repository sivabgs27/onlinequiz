import { Component } from '@angular/core';
import { Validators,Control } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginService } from './login.service';


export interface cred
{
    Email:string;
    Password:string;
}



@Component({
    selector: 'login',
    providers: [LoginService],
    directives: [REACTIVE_FORM_DIRECTIVES,ROUTER_DIRECTIVES],
    templateUrl:'./client_side/app/login/login.component.html',
    styleUrls:['client_side/app/login/login.component.css']
                                                                   
})

export class LoginComponent{

   public loginForm: FormGroup;
   public submitted: boolean;
   public events: any[] = [];  
   showerr:boolean=true;
   showser_err:boolean=true;
   private dat:boolean;
   private userid:string;

   constructor(private rr:LoginService,private builder: FormBuilder) {
    
     this.loginForm = this.builder.group({
            Email: ['', [<any>Validators.required, <any>Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]],
            Password: ['', [<any>Validators.required]]
             
        });
        
}

login(c:cred,isValid: boolean)
{
   
    if(isValid)
    {
       this.showerr=true;

      this.rr.login(c).subscribe(
                data => this.dat = data.loggedin,// put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            ); 
             console.log(this.dat)
          if(this.dat)
          {
             // this.showser_err=true;
          } 

          else{
              this.showser_err=false;
          }  
    }
    else{
        
    

     this.showerr=false;
     
    }
    
console.log(c,isValid);

}
 

 


}