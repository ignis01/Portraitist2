import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {OnlineOrder} from "../../model/onlineorder";
import * as AWS from 'aws-sdk';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
  providers: [Slides]
})

export class OrderPage {
  @ViewChild(Slides) slides: Slides;
  nextBtnLabel: String;
  backBtnLabel: String;
  onlineOrder: OnlineOrder;
  backHidden: boolean;
  bucketName = 'portraitist-customer-upload';
  bucketRegion = 'us-east-1';
  identityPoolId = 'us-east-1:5ce684af-cc60-437d-980b-6039d7bbc851';
  s3: AWS.S3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nextBtnLabel = "Next";
    this.backBtnLabel = "Back";
    this.backHidden = true;
    this.onlineOrder = new OnlineOrder();
    let creds = new AWS.CognitoIdentityCredentials({
      AccountId: '000000000000', // replace your AWS account ID here
      RoleArn: 'arn:aws:iam::000000000000:role/Cognito_your_Unauthenticated_Role', //replace your cognito unauthenticated role here
      IdentityPoolId: this.identityPoolId
    });

    AWS.config.update({
      region: 'us-east-1',
      credentials: creds
    });

    this.s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: {Bucket: 'portraitist-customer-upload'}
    })
  }


  ionViewDidLoad() {
    this.slides.lockSwipes(true);


    console.log('ionViewDidLoad OrderPage');

  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext(500)
    if (this.slides.getActiveIndex() == this.slides.length() - 1) {
      this.nextBtnLabel = "Finish"
    }
    this.backHidden = false;
    this.slides.lockSwipes(true);
  }

  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev(500)
    if (this.slides.getActiveIndex() < this.slides.length() - 1) {
      this.nextBtnLabel = "Next"
    }
    if (this.slides.getActiveIndex() == 0) {
      this.backHidden = true;
    }
    this.slides.lockSwipes(true);
  }

  calculatePrice() {
    if (this.onlineOrder.numberOfHeads > 0 &&
      this.onlineOrder.portraitType != null &&
      this.onlineOrder.portraitSize != null &&
      this.onlineOrder.matAdd != null) {
      this.onlineOrder.totalPrice = 100;
    }
  }


  uploadPhoto(event) {

    let file = event.target.files[0];
    let fileName = file.name;
    let albumPhotosKey = encodeURIComponent(this.onlineOrder.orderId.toString()) + '/';
    let photoKey = albumPhotosKey + fileName;

    this.s3.upload({
      Key: photoKey,
      Body: file,
      ACL: 'public-read',
      Bucket: 'portraitist-customer-upload'
    }, function (err, data) {
      if (err) {
        return alert('There was an error uploading your photo: ' + err.message);
      }
      alert('Successfully uploaded photo.');
    })
  }
}
