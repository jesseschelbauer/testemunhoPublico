import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

import { ApiProvider } from '../../providers/api/api';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public credencial = { phone: '', password: '', email: '' };
  constructor(public nav: NavController, public navParams: NavParams, private alert: AlertController, private loading: LoadingController, private Api: ApiProvider) {
  }

  ionViewDidLoad() {
  }

  public login() {
    let logging = this.loading.create({content:"Carregando"});
    logging.present();
    this.Api.login(this.credencial)
      .subscribe(
        user => {
          if (user.authenticated) {
            this.nav.setRoot(TabsPage);
          }
          
          logging.dismiss();
        },
        error => {
          let alert = this.alert.create({
            title: 'Login inválido',
            subTitle: `Verifique seu usário e senha`,
            buttons: ['OK']
          });
          logging.dismiss();
          alert.present(); 
        });
  }
}
