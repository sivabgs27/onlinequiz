import { Component } from '@angular/core';
import { Validators,Control,CORE_DIRECTIVES } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ROUTER_DIRECTIVES,Router } from '@angular/router';
import { LoginService } from './login.service';
import { sharedService } from '../sharedservice';


export interface cred
{
    Email:string;
    Password:string;
}



@Component({
    selector: 'login',
    providers: [LoginService],
    directives: [REACTIVE_FORM_DIRECTIVES,ROUTER_DIRECTIVES,CORE_DIRECTIVES],
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

   constructor(private rr:LoginService,private builder: FormBuilder,public router: Router,private s: sharedService) {
    
     this.loginForm = this.builder.group({
            Email: ['', [<any>Validators.required, <any>Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]],
            Password: ['', [<any>Validators.required]]
             
        });

        s.condition=true;
        
}

login(c:cred,isValid: boolean)
{
   
    if(isValid)
    {
       this.showerr=true;

      this.rr.login(c).subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['/profile']);
        },
        error => {
        
          console.log(error);
        }
      );
             console.log(this.dat)
         
              this.showser_err=false;
           
    }
    else{
        
    

     this.showerr=false;
     
    }
    
console.log(c,isValid);

}
 

 


}