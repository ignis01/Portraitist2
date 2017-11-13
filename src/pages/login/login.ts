import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
import firebase, {User} from 'firebase';
import {GlobalVars} from "../../services/globalVars";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage{
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVars:GlobalVars) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }

    login(){
      console.log("Login!");
      console.log("email "+ this.email);
      console.log("password " + this.password);
      let user:User
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function(result){
          user = result;
          console.log(user.email);
          console.log(user.uid);
        }
      )
        .catch(
        function(error){
          console.log(error.code);
          console.log(error.message);
          if(error.code==='auth/wrong-password'){
            alert('Wrong Password.');
          }else{
            alert(error.message);
          }
        }
      )
    }

    signUp(){
        console.log("sign up!")
        console.log("email "+ this.email);
        console.log("password " + this.password);
        let user:User;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(function(result){
            user = result;
            console.log(user.email);
            console.log(user.uid);
          })
          .catch(
          function(error){
            console.log(error.code);
            console.log(error.message);
          }
        );
      }

     signInWithGoogle(){
          let provider:GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
          let user:User;
          firebase.auth().signInWithPopup(provider).
          then(function(result){
            user = result.user;
            console.log(user.displayName);
          }).catch(function(error){
            console.log(error.code);
            console.log(error.message);
       })

     }

      signInWithFaceBook(){
            let provider:FacebookAuthProvider = new firebase.auth.FacebookAuthProvider;
            let user:User;
            firebase.auth().signInWithPopup(provider).
            then(function(result){
              user = result.user;
              console.log(user.displayName);
            }).catch(function(error){
              console.log(error.code);
              console.log(error.message);
         })

       }

        signInWithTwitter(){
              let provider:TwitterAuthProvider = new firebase.auth.TwitterAuthProvider;
              let user:User;
              firebase.auth().signInWithPopup(provider).
              then(function(result){
                user = result.user;
                console.log(user.displayName);
              }).catch(function(error){
                console.log(error.code);
                console.log(error.message);
           })

         }
}
