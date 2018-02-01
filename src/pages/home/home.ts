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
    const unsubscribe = afAuth.auth.onAuthStateChanged( user => {
      if (!user) {
        console.log("unsuscribe") ;
      } 
      else { 
        this.usrMail = user.email;
        console.log("User : "+ user.email) ;        
      }
    });
  }

  openLoginPg(){
    
        if(this.usrMail){    
        }
        else{
          this.navCtrl.push(LoginPage); 
        }         
  }
    
  openSrcTrpPg(){
    this.navCtrl.push(GMapSearchPage);

  }

}