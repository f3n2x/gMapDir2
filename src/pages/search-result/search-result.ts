import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'



/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {

  

  startPrm: string;
  endPrm: string;
  datePrm: string;
  private baseURI : string  = "http://desiphan.com/ionic3/";
  responseData : any;
  userData = {"email":"","phone":"","gender":"","last_updt":"","token":""};
  fromLatInp  : string;
  fromLongInp  : string;
  toLatInp  : string;
  toLongInp  : string;
  result:string [] ;
  resultdtl : string [] []; 
  trip_no : string;
  
  
  
  constructor(private navCtrl: NavController, private navParams: NavParams, private http: Http) {
    var idx : number;
    var idx2 : number;
    
    this.startPrm = this.navParams.get('start');
    this.endPrm = this.navParams.get('end');
    this.datePrm = this.navParams.get('date');
    var strTem = new String(this.navParams.get('start'));

    console.log('datePrm: '+this.datePrm);

    idx = strTem.indexOf(",");
    idx2 = strTem.indexOf(")");
    this.fromLatInp = strTem.substr(1,idx-1);
    this.fromLongInp = strTem.substr(idx+2,idx2-idx-2);

    console.log('fromLatInp: '+this.fromLatInp);
    console.log('fromLongInp: '+this.fromLongInp);


    strTem = new String(this.navParams.get('end'));
    idx = strTem.indexOf(",");
    idx2 = strTem.indexOf(")");
    this.toLatInp = strTem.substr(1,idx-1);
    this.toLongInp = strTem.substr(idx+2,idx2-idx-2);

    console.log('toLatInp: '+this.toLatInp);
    console.log('toLongInp: '+this.toLongInp);

    this.queryTrip();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultPage');
  }

  queryTrip(){
//    let body : string   = "key=create&dateInp="+this.datePrm+"&fromLatInp="+this.fromLatInp+"&fromLongInp="+this.fromLongInp+"&toLatInp="+this.toLatInp+"&toLongInp="+this.toLongInp,
    let body : string   = "?dateInp="+this.datePrm+"&fromLatInp="+this.fromLatInp+"&fromLongInp="+this.fromLongInp+"&toLatInp="+this.toLatInp+"&toLongInp="+this.toLongInp,
    type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
    headers  : any      = new Headers({ 'Content-Type': type}),
    options  : any      = new RequestOptions({ headers: headers }),
    //url      : any      = this.baseURI + "searchTrip.php";
    url      : any      = this.baseURI + "searchTrip2.php" + body;
    
    /*
    let data ={};

    this.http.post(url, body, options)   
    .subscribe((data) =>
    {
       // If the request was successful notify the user
       if(data.status === 200)
       {
        console.log("fandy1-success "+data['_body']);
        this.result = JSON.parse(data['_body'], (key, value) => {
          if (typeof value === 'string') {
            return value.toUpperCase();
          }
          return value;
        }); 
        console.log(this.result[0].TRIP_NO);
        //console.log(this.result);
      }
       // Otherwise let 'em know anyway
       else
       {
        console.log("fandy2-fail "+data);
       }
    });*/

    let data ={};
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log("url:"+url);
      console.log("data:"+data);
      this.result = data;
   });


  }

}
