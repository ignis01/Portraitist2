import {UUID} from "angular2-uuid";

export class OnlineOrder{
  _orderId:String;
  _numberOfHeads:number;
  _portraitType:String;
  _portraitSize:String;
  _matAdd:String;
  _shippingType:String;
  _totalPrice:number;
  _uploadPhotoUrls: String[];
  _comments:String;
  _customerFirstName:String;
  _customerLastName:String;
  _paymentType:String;
  _paymentReference:String;
  _mailingAddressLine1:String;
  _mailingAddressLine2:String;
  _mailingCity:String
  _mailingProvState:String;
  _mailingPostalZip:String;
  _mailingCountry:String;
  _customerEmail:String;
  _customerHomePhone:String;
  _customerMobilePhone:String;

  constructor(){
    this._orderId = UUID.UUID();
  }


  get orderId(): String {
    return this._orderId;
  }

  set orderId(value: String) {
    this._orderId = value;
  }

  get numberOfHeads(): number {
    return this._numberOfHeads;
  }

  set numberOfHeads(value: number) {
    this._numberOfHeads = value;
  }

  get portraitType(): String {
    return this._portraitType;
  }

  set portraitType(value: String) {
    this._portraitType = value;
  }

  get portraitSize(): String {
    return this._portraitSize;
  }

  set portraitSize(value: String) {
    this._portraitSize = value;
  }


  get matAdd(): String {
    return this._matAdd;
  }

  set matAdd(value: String) {
    this._matAdd = value;
  }

  get shippingType(): String {
    return this._shippingType;
  }

  set shippingType(value: String) {
    this._shippingType = value;
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  set totalPrice(value: number) {
    this._totalPrice = value;
  }

  get uploadPhotoUrls(): String[] {
    return this._uploadPhotoUrls;
  }

  set uploadPhotoUrls(value: String[]) {
    this._uploadPhotoUrls = value;
  }

  get comments(): String {
    return this._comments;
  }

  set comments(value: String) {
    this._comments = value;
  }

  get customerFirstName(): String {
    return this._customerFirstName;
  }

  set customerFirstName(value: String) {
    this._customerFirstName = value;
  }

  get customerLastName(): String {
    return this._customerLastName;
  }

  set customerLastName(value: String) {
    this._customerLastName = value;
  }

  get paymentType(): String {
    return this._paymentType;
  }

  set paymentType(value: String) {
    this._paymentType = value;
  }

  get paymentReference(): String {
    return this._paymentReference;
  }

  set paymentReference(value: String) {
    this._paymentReference = value;
  }


  get mailingAddressLine1(): String {
    return this._mailingAddressLine1;
  }

  set mailingAddressLine1(value: String) {
    this._mailingAddressLine1 = value;
  }

  get mailingAddressLine2(): String {
    return this._mailingAddressLine2;
  }

  set mailingAddressLine2(value: String) {
    this._mailingAddressLine2 = value;
  }

  get mailingCity(): String {
    return this._mailingCity;
  }

  set mailingCity(value: String) {
    this._mailingCity = value;
  }

  get mailingProvState(): String {
    return this._mailingProvState;
  }

  set mailingProvState(value: String) {
    this._mailingProvState = value;
  }

  get mailingPostalZip(): String {
    return this._mailingPostalZip;
  }

  set mailingPostalZip(value: String) {
    this._mailingPostalZip = value;
  }

  get mailingCountry(): String {
    return this._mailingCountry;
  }

  set mailingCountry(value: String) {
    this._mailingCountry = value;
  }

  get customerEmail(): String {
    return this._customerEmail;
  }

  set customerEmail(value: String) {
    this._customerEmail = value;
  }

  get customerHomePhone(): String {
    return this._customerHomePhone;
  }

  set customerHomePhone(value: String) {
    this._customerHomePhone = value;
  }

  get customerMobilePhone(): String {
    return this._customerMobilePhone;
  }

  set customerMobilePhone(value: String) {
    this._customerMobilePhone = value;
  }
}
