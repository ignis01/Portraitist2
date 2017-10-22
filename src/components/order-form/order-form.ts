import { Component } from '@angular/core';
import {OnlineOrder} from "../../model/onlineorder";

/**
 * Generated class for the OrderFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-form',
  templateUrl: 'order-form.html',

})
export class OrderFormComponent {

  text: string;
  order: OnlineOrder;
  constructor() {
    this.order = new OnlineOrder();
    console.log('Hello OrderFormComponent Component');
    this.text = 'Hello World';
  }

}
