import { Component } from '@angular/core';
import { NavBarComponent} from './nav_bar/nav_bar.component';
import { ROUTER_DIRECTIVES } from '@angular/router';





@Component({
  selector: 'my-app',
  directives: [NavBarComponent,ROUTER_DIRECTIVES],
  template: `
  <div >
    
    <nav-bar></nav-bar>
    
  

  </div>
  `

})
export class AppComponent {
 
 }
 