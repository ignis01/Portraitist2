import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OnlineOrder} from "../../model/onlineorder";

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
  nextBtnLabel:String;
  backBtnLabel:String;
  onlineOrder:OnlineOrder;
  backHidden: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nextBtnLabel="Next";
    this.backBtnLabel="Back";
    this.backHidden = true;
    this.onlineOrder = new OnlineOrder();
  }


  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad OrderPage');
  }

  next(){
    this.slides.lockSwipes(false);
    this.slides.slideNext(500)
    if(this.slides.getActiveIndex() == this.slides.length()-1){
       this.nextBtnLabel="Finish"
    }
    this.backHidden = false;
    this.slides.lockSwipes(true);
  }

  prev(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev(500)
    if(this.slides.getActiveIndex() < this.slides.length()-1){
           this.nextBtnLabel="Next"
    }
    if(this.slides.getActiveIndex()==0){
      this.backHidden = true;
    }
    this.slides.lockSwipes(true);
  }

  calculatePrice(){
    if(this.onlineOrder.numberOfHeads>0&&
      this.onlineOrder.portraitType!=null &&
      this.onlineOrder.portraitSize!=null &&
      this.onlineOrder.matAdd!=null){
         this.onlineOrder.totalPrice=100;
    }
  }

}
