import { Component, } from '@angular/core';
import {NgStyle} from '@angular/common';



@Component({
    selector: 'nav-bar',
    templateUrl:'./client_side/app/nav_bar/nav_bar.html',
    styleUrls:['./client_side/app/nav_bar/nav_bar.component.css']
                                                                   
})
export class NavBarComponent
{
    snav_w='0px';

    snav_open()
    {
      this.snav_w='250px';
    }
    closeNav()
    {
        this.snav_w='0px';
    }

}