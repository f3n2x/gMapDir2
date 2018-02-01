import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {  GoogleMaps, GoogleMap, GoogleMapsEvent,
  GoogleMapOptions, CameraPosition, MarkerOptions, Marker
  ,Geocoder,GeocoderRequest
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {GMapSearchPage} from'../pages/g-map-search/g-map-search';
import {KeysPipe} from '../pipes/keys/keys'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GMapSearchPage,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GMapSearchPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,   
    ,Geocoder, 
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
