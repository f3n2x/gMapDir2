import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
import { LoginPage} from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import {NewTripPage} from'../new-trip/new-trip';
import {GMapSearchPage} from'../g-map-search/g-map-search';





declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usrMail : any;
  
  constructor(public navCtrl: NavController, public platform :Platform, private afAuth:AngularFireAuth) {
    
  }

 
    
  openSrcTrpPg(){
    this.navCtrl.push(GMapSearchPage);

  }

}