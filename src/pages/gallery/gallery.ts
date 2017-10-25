import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import X2JS from 'x2js';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  images =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg'];
  imageNames;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.listBucketFromS3();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  listBucketFromS3()
  {
    let x2js = new X2JS;
     this.http.get('https://s3.amazonaws.com/portraitist/')
       .subscribe(
         data=>{
           this.imageNames = (x2js.xml2js(data.text()))['ListBucketResult']['Contents'];
           console.log(this.imageNames);
         }
       )
  }

}
