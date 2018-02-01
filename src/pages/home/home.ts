import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
import {GMapSearchPage} from'../g-map-search/g-map-search';





declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usrMail : any;
  
  constructor(public navCtrl: NavController, public platform :Platform) {
    
  }

 
    
  openSrcTrpPg(){
    this.navCtrl.push(GMapSearchPage);

  }

}