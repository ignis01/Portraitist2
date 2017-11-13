import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ArtistsPage} from "../pages/artists/artists";
import {GalleryPage} from "../pages/gallery/gallery";
import {OrderPage} from "../pages/order/order";
import {ContactPage} from "../pages/contact/contact";

import {IonicImageViewerModule} from "ionic-img-viewer";
import {HttpModule} from "@angular/http";
import {LoginPage} from "../pages/login/login";
import {GlobalVars} from "../services/globalVars";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArtistsPage,
    GalleryPage,
    OrderPage,
    ContactPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArtistsPage,
    GalleryPage,
    OrderPage,
    ContactPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalVars,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
