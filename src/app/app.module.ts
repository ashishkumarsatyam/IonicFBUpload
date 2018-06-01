import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataProvider } from '../providers/data/data';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyFilesPage } from '../pages/my-files/my-files';
var firebaseConfig = {
  apiKey: "AIzaSyDjseqG0_kqJY3ibN7J3lzQ_2q8rQW3aYg",
  authDomain: "ionicfbupload.firebaseapp.com",
  databaseURL: "https://ionicfbupload.firebaseio.com",
  projectId: "ionicfbupload",
  storageBucket: "ionicfbupload.appspot.com",
  messagingSenderId: "944465264594"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyFilesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyFilesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    InAppBrowser
  ]
})
export class AppModule {}
