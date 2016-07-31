import { Component } from '@angular/core';

import { UserRegistrationComponent} from './user_reg.component';


@Component({
  selector: 'my-app',
  directives: [UserRegistrationComponent],
  template: '<div><h1>My First Angular 2 App</h1> <register-user></register-user></div>'
})
export class AppComponent {
 
 }
  