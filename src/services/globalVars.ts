import {Injectable} from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class GlobalVars {
  constructor(){
    let config = {
          apiKey: "AIzaSyCmcN5fbSd96aNqyaYDXupWzl59Bnx4kkw",
          authDomain: "portraitist-feabc.firebaseapp.com",
          databaseURL: "https://portraitist-feabc.firebaseio.com",
          projectId: "portraitist-feabc",
          storageBucket: "",
          messagingSenderId: "875565774267"
        };
        firebase.initializeApp(config);
  }
}
