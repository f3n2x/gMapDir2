import { Component,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
import {  GoogleMaps, GoogleMap, GoogleMapsEvent,
          GoogleMapOptions, CameraPosition, MarkerOptions, Marker,
          Geocoder,GeocoderRequest, LatLng, GeocoderResult 
       } from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import {SearchResultPage} from '../search-result/search-result';   

/**
 * Generated class for the GMapSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-g-map-search',
  templateUrl: 'g-map-search.html',
})
export class GMapSearchPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  startP: string;
  endP: string;
  indicator: string;
  dateTm : string;
  

  constructor(private navCtrl: NavController, private navParams: NavParams
    , private platform :Platform, private geolocation: Geolocation
    , private geocoder: Geocoder, private nativeGeocoder: NativeGeocoder) {
   /* platform.ready().then(() => {
      this.loadMap();
    });*/
    this.indicator="start";
    
  }

   ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad GMapSearchPage');
    
  }

  verifyDest(coordinate){
    if (this.indicator == "start") {
      this.startP = coordinate;
    }else{
      this.endP = coordinate;
    }
  }
  

  loadMap() {    
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center : latLng,
        zoom : 15,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      }

      var clickPos : any;
             
      var map = new google.maps.Map(document.getElementById('map'),mapOptions);
      var geocoder = new google.maps.Geocoder;
      var marker1 = new google.maps.Marker({position:latLng,title:"Current Position"});
      marker1.setMap(map);
      var marker2= new google.maps.Marker({position:latLng,title:""});
      marker2.setMap(null);
                      

      map.addListener('click',(event)=>{
        clickPos = event.latLng ;
        let clickPosStr: string = clickPos.toString() ;
        
        let idx = clickPosStr.indexOf(",");
        let idx2 = clickPosStr.indexOf(")");
        let fromLatInp:number = parseFloat(clickPosStr.substr(1,idx-1));
        let fromLongInp:number = parseFloat(clickPosStr.substr(idx+2,idx2-idx-2));
        alert(fromLatInp+"###"+fromLongInp);
        


        /*this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
        .then((result: NativeGeocoderReverseResult) => {
          //let str : string   = 'The reverseGeocode address is ${result.locality} in ${result.countryCode}';
          
        console.log(JSON.stringify(result));
        }
      ).catch((error: any) => console.log(error));*/

        //let req : GeocoderRequest = { position: new LatLng( fromLatInp,  fromLongInp) } ;
        //let req: GeocoderRequest = { position: {lat: 37.421655, lng: -122.085637} };
        let req : GeocoderRequest = { position: new LatLng( 1.3563415021796763, 103.98829936981201) } ;
        
        Geocoder.geocode(req).then((results: GeocoderResult[])=>{
          let address = [
            (results[0].thoroughfare || "") + " " + (results[0].subThoroughfare || ""),
            results[0].locality
          ].join(", ");
          console.log("data_: ", address);
          
        })
                        
        this.verifyDest(clickPos);
        if (this.indicator=='start'){
            marker1.setMap(null);
            marker1 = new google.maps.Marker({
              position:clickPos ,title:"START"
            });        
            marker1.setMap(map);
        }else{                   
          marker2.setMap(null);
          marker2 = new google.maps.Marker({
            position:clickPos ,title:"END"
          });
          marker2.setMap(map);
        }
      });            
    }, (err) => {
      console.log(err);
    })  
}

setStartP(){
  this.indicator="start";
}

setEndP(){
  this.indicator="end";
}

validatePrm():boolean{
  var error = 0;
  if (this.startP == null){
    alert('Please select Starting Point');
    error = 1;
  }else if(this.endP== null){
    alert('Please select End Point');
    error = 1;
  }else if(this.dateTm == null){
    alert('Please select Date Time');
    error = 1;
  }
  if(error==0)
    return true;
  else 
    return false;  
}

openSrcRst(){
  if(this.validatePrm()){
    this.navCtrl.push(SearchResultPage,{start: this.startP, end: this.endP,date: this.dateTm});
  }
}

}
  

 


