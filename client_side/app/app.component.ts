import { Component } from '@angular/core';
import { NavBarComponent} from './nav_bar/nav_bar.component';




@Component({
  selector: 'my-app',
  directives: [NavBarComponent],
  template: `
  <div>
    
    <nav-bar></nav-bar>
    

  </div>
  `
})
export class AppComponent {
 
 }
  