import { LOCALE_ID,NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PlainningPage } from '../pages/plainning/plainning';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { JwtInterceptor } from '../providers/jwt-interceptor/jwt-interceptor';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { EscalaPage } from '../pages/Escala/escala';

registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
    LoginPage,
    PlainningPage, 
    EscalaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,LoginPage,PlainningPage,EscalaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt'}
  ]
})
export class AppModule {}
