import { Component } from '@angular/core';

import { UserRegistrationComponent} from './user_registration/user_reg.component';
import { NavBarComponent} from './nav_bar/nav_bar.component';
import {LoginComponent} from './login/login.component';


@Component({
  selector: 'my-app',
  directives: [UserRegistrationComponent,NavBarComponent,LoginComponent],
  template: '<div><nav-bar></nav-bar> <register-user></register-user></div>'
})
export class AppComponent {
 
 }
  