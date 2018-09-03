import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AcessoPage } from '../pages/acesso/acesso';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service';
import { FavoritosPage } from '../pages/favoritos/favoritos';

const firebaseConfig = {
  apiKey: "AIzaSyB1qJGxL2jB-dRIbG9ljQ3Wr2DrWAXSt9g",
  authDomain: "authbrocados.firebaseapp.com",
  databaseURL: "https://authbrocados.firebaseio.com",
  projectId: "authbrocados",
  storageBucket: "authbrocados.appspot.com",
  messagingSenderId: "545724672525"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AcessoPage,
    FavoritosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AcessoPage,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
